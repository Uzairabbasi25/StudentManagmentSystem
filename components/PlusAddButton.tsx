// @ts-nocheck
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { router } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

const PlusAddButton = ({ route }) => {
  return (
    <TouchableOpacity
      className="absolute bottom-5 right-4 bg-primary w-16 h-16 rounded-full items-center justify-center shadow-lg"
      onPress={() => {
        router.push(route);
        console.log("Add button pressed");
      }}
    >
      <AntDesign name="plus" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default PlusAddButton;

const styles = StyleSheet.create({});
