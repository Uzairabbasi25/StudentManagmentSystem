//@ts-nocheck
import React from "react";
import { View, Text } from "react-native";

const TabIcon = ({ icon, focused, name }) => {
  return (
    <View
      className={`flex items-center justify-center p-2 ${
        focused ? "bg-white" : "bg-transparent"
      }`}
    >
      {focused ? (
        <View
          className="flex
        justify-center
        items-center"
        >
          {/* Custom content when focused */}
          <View
            className="rounded-[10px]
         bg-green-400/50
          
          
          px-4"
          >
            <View className="opacity-100 font-bold z-50  ">{icon}</View>
          </View>

          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            className="text-black text-xs font-bold"
          >
            {name}
          </Text>
        </View>
      ) : (
        <View
          className="
        flex
        justify-center
        items-center"
        >
          {icon}
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            className="text-xs text-black"
          >
            {name}
          </Text>
        </View>
      )}
    </View>
  );
};

export default TabIcon;
