//@ts-nocheck
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HeaderWithText = ({ title }) => {
  console.log("headerme ", title);

  return (
    // <SafeAreaView className="bg-white">

    // </SafeAreaView>
    <View className="flex-row items-center justify-between p-3 border-b border-gray-300">
      <Text className="text-xl font-bold text-gray-800">{title}</Text>
    </View>
  );
};

export default HeaderWithText;
