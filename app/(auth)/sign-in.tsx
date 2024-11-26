//@ts-nocheck
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  ToastAndroid,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import CustomFormFiled from "@/components/CustomFormFiled";
import { Link, router } from "expo-router";
import axios from "axios";
import CustomButton from "@/components/CustomButton";
import * as Yup from "yup";
import { Formik } from "formik";
import api from "@/config/axiosInstance";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useUserStore from "@/stores/useUser";
const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const SignIn = () => {
  const { user, setUser, clearUser } = useUserStore();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const checkAndAuthenticate = async () => {
      const token = await AsyncStorage.getItem("accessToken");
      if (token) {
        router.push("../screens/admin/Home");
      }
    };

    checkAndAuthenticate();
  }, []);

  const submit = async (values, { resetForm }) => {
    setIsSubmitting(true);
    try {
      const response = await api.post(`/api/user/signin`, {
        email: values.email,
        password: values.password,
      });
      ToastAndroid.show("Request sent successfully!", ToastAndroid.SHORT);
      await AsyncStorage.setItem("accessToken", response.data.accessToken);
      await AsyncStorage.setItem("refreshToken", response.data.refreshToken);
      setUser({
        username: response.data.user.name,
        role: response.data.user.role,
        organizationId: response.data.user.organizationId,
      });
      console.log("USer ", response.data.user.role.name);

      if (response.data.user.role.name === "SUPER_ADMIN") {
        router.push("../screens/superadmin/organizations");
      } else if (response.data.user.role.name === "ADMIN") {
        router.push("../screens/admin/Home");
      } else {
        router.push("/(tabs)/home");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        const errorMessage = error.response.data.message;
        ToastAndroid.showWithGravity(
          errorMessage,
          ToastAndroid.LONG,
          ToastAndroid.TOP
        );
        alert(errorMessage);
      } else {
        console.error("Unexpected Error:", error.message);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="h-[83vh] w-full justify-center items-center">
          <View className="w-full flex flex-col px-2">
            <Image
              source={require("@/assets/images/Logo.png")}
              className="w-[145px] h-[70px]"
              resizeMode="contain"
            />
            <View className="pl-2 space-y-2">
              <Text className="text-lg font-semibold">
                Sign In to Nourished Education Inc
              </Text>

              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={validationSchema}
                onSubmit={submit}
              >
                {({
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  values,
                  errors,
                  touched,
                }) => (
                  <>
                    <CustomFormFiled
                      title="Email"
                      placeholder="Email"
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      value={values.email}
                    />
                    {touched.email && errors.email && (
                      <Text style={styles.errorText}>{errors.email}</Text>
                    )}

                    <CustomFormFiled
                      placeholder="Password"
                      title="Password"
                      onChangeText={handleChange("password")}
                      onBlur={handleBlur("password")}
                      value={values.password}
                    />
                    {touched.password && errors.password && (
                      <Text style={styles.errorText}>{errors.password}</Text>
                    )}

                    <CustomButton
                      buttonStyles="top-4"
                      title="Sign In"
                      TextStyles="text-xl font-semibold text-white"
                      handlePress={handleSubmit} // Calls Formik’s handleSubmit
                      isloading={isSubmitting}
                    />
                  </>
                )}
              </Formik>
            </View>
            <View className="top-7 flex-row justify-center items-center gap-x-2">
              <Text className="text-center text-base">
                Don't have an account?
              </Text>
              <Link href={"/(auth)/sign-up"}>
                <Text className="text-primary font-semibold text-lg">
                  Sign Up
                </Text>
              </Link>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  errorText: {
    fontSize: 12,
    color: "red",
  },
});

export default SignIn;
