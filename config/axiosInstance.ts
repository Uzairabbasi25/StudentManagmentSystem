//@ts-nocheck

import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
const handleLogout = async () => {
  await AsyncStorage.removeItem("accessToken");
  await AsyncStorage.removeItem("refreshToken");
  // Here you would add navigation logic to redirect the user to the login screen
  // e.g., NavigationService.navigate('Login'); if using a navigation service
  router.push("/(auth)/sign-in");
};
const api = axios.create({
  baseURL: "https://fa0e-110-38-229-3.ngrok-free.app",
});

api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("accessToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error?.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = await AsyncStorage.getItem("refreshToken");
        const response = await api.post("/api/refresh", { refreshToken });
        const newAcessToken = response.data.accessToken;
        await AsyncStorage.setItem("accessToken", newAcessToken);
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        return api(originalRequest);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export default api;
