import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import TabIcon from "@/components/TabIcon";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
const AdminLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white", // WhatsApp-like green
          height: 60,
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "#888",
        headerShown:false
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              name={"Home"}
              focused={focused}
              icon={<AntDesign name="home" size={24} color="black" />}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Teacher"
        options={{
          title: "Teacher",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              name="Teacher"
              focused={focused}
              icon={<FontAwesome6 name="user-tie" size={24} color="black" />}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Student"
        options={{
          title: "Student",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              name="Student"
              focused={focused}
              icon={
                <FontAwesome6 name="user-graduate" size={24} color="black" />
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Class"
        options={{
          title: "Classes",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              name="Classes"
              focused={focused}
              icon={
                <MaterialCommunityIcons
                  name="google-classroom"
                  size={24}
                  color="black"
                />
              }
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default AdminLayout;

const styles = StyleSheet.create({});
