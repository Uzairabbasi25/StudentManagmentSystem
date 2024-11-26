//@ts-nocheck
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const IconButton = ({
  handlePress,
  buttonStyles,
  TextStyles,
  title,
  isloading,
  icon,
  iconPosition = "left",
  color
}) => {
  return (
    <TouchableOpacity
      disabled={isloading}
      activeOpacity={0.7}
      onPress={handlePress}
      className={`
        justify-center
        items-center
        flex-row
        space-x-2
        min-h-[62px]
        rounded-xl
        bg-${color}
        p-2
        ${buttonStyles}
        ${isloading ? "opacity-50" : ""}
      `}
    >
      {icon && iconPosition === "left" && (
        <>{icon}</> // Render the icon if position is left
      )}
      <Text className={TextStyles}>{title}</Text>
      {icon && iconPosition === "right" && (
        <>{icon}</> // Render the icon if position is right
      )}
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({});
