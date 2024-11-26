import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const SuperAdminStack_layout = () => {
  return (
    <Stack screenOptions={{ headerTitle: "" }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="organizations/addorganization" />
      <Stack.Screen name="userlist/adduser" />
    </Stack>
  );
};

export default SuperAdminStack_layout;

const styles = StyleSheet.create({});
