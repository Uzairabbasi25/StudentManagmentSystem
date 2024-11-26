//@ts-nocheck
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import TabIcon from "@/components/TabIcon";
import Feather from "@expo/vector-icons/Feather";
import HeaderWithText from "@/components/HeaderwithText";

const SuperAdminlayout = () => {
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
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="organizations"
        options={{
          title: "Organizations",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              name="Organizations"
              focused={focused}
              icon={
                <SimpleLineIcons name="organization" size={24} color="black" />
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="userlist"
        options={{
          title: "UserList",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              name="UserList"
              focused={focused}
              icon={<Feather name="users" size={24} color="black" />}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default SuperAdminlayout;

const styles = StyleSheet.create({});
