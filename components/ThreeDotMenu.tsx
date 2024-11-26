//@ts-nocheck
import React, { useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  ScrollView,
  Easing,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";

const ThreeDotsMenu = ({ id, activeMenu, setActiveMenu }) => {
  const slideAnim = useRef(new Animated.Value(-200)).current; // Start off-screen
  const isVisible = activeMenu === id;
  const menuOptions = [
    {
      id: "edit",
      label: "Edit",
      action: () => console.log("Edit clicked"),
    },
    {
      id: "delete",
      label: "Delete",
      action: () => console.log("Delete clicked"),
    },
  ];

  const toggleMenu = () => {
    if (isVisible) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  const openMenu = () => {
    setActiveMenu(id); // Set this menu as active
    Animated.timing(slideAnim, {
      toValue: 0, // Visible
      duration: 300, // Set a duration for sliding animation
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  };

  const closeMenu = () => {
    Animated.timing(slideAnim, {
      toValue: -200, // Hide off-screen
      duration: 300,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start(() => {
      if (activeMenu === id) setActiveMenu(null); // Close only if this menu is active
    });
  };

  const handleOptionPress = (action) => {
    action(); // Execute the action for the selected option
    closeMenu(); // Close the menu after selection
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleMenu}>
        <Feather name="more-vertical" size={24} color="black" />
      </TouchableOpacity>

      {isVisible && (
        <Animated.View
          style={[
            styles.menuContainer,
            { transform: [{ translateY: slideAnim }] },
          ]}
        >
          <ScrollView
            contentContainerStyle={styles.menuContent}
            scrollEnabled={false}
          >
            {menuOptions.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.menuOption}
                onPress={() => handleOptionPress(item.action)}
              >
                <Text style={styles.menuText}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  menuContainer: {
    position: "absolute",
    top: 30, // Adjust based on your layout
    right: 1,
    backgroundColor: "white",
    borderRadius: 4,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5, // Android shadow
    width: 120,
    zIndex: 10, // Ensure the menu is above other components
  },
  menuContent: {
    paddingVertical: 8, // Padding for the menu content
  },
  menuOption: {
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  menuText: {
    fontSize: 16,
    color: "black",
  },
});

export default ThreeDotsMenu;
