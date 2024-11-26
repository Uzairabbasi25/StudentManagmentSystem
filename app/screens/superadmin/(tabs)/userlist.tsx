//@ts-nocheck
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import HeaderWithText from "@/components/HeaderwithText";
import PlusAddButton from "@/components/PlusAddButton";
import ThreeDotsMenu from "@/components/ThreeDotMenu";

const userslist = () => {
  const [user, setUser] = useState([
    { id: "1", name: "Alice Johnson", role: "Admin" },
    { id: "2", name: "Bob Smith", role: "Editor" },
    { id: "3", name: "Charlie Brown", role: "Viewer" },
    { id: "4", name: "David Lee", role: "Contributor" },
    { id: "5", name: "Eve Thomas", role: "Moderator" },
    { id: "6", name: "Bob Smith", role: "Editor" },
    { id: "7", name: "Charlie Brown", role: "Viewer" },
    { id: "8", name: "David Lee", role: "Contributor" },
    { id: "9", name: "Eve Thomas", role: "Moderator" },
    { id: "10", name: "Bob Smith", role: "Editor" },
    { id: "11", name: "Charlie Brown", role: "Viewer" },
    { id: "12", name: "David Lee", role: "Contributor" },
    { id: "13", name: "Eve Thomas", role: "Moderator" },
    // Add more users as needed
  ]);
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <SafeAreaView>
      <View>
        <View
          className="flex
         p-1
         flex-col"
        >
          <HeaderWithText title={"Users List"} />
          <ScrollView
            className="h-[93%]"
            keyboardShouldPersistTaps="handled"
            onTouchStart={() => {
              setActiveMenu(null); // Dismiss the active menu
              Keyboard.dismiss(); // Dismiss the keyboard
            }}
          >
            <View
              className="flex pt-2 pb-20
         flex-col space-y-2"
            >
              {user.map((user, index) => (
                <View
                  key={index}
                  className="flex flex-row gap-x-2 items-center justify-between"
                >
                  <View className="flex flex-row items-center gap-x-3 flex-1">
                    <View
                      className="rounded-full
            bg-gray-400/50
            p-3
            "
                    >
                      <AntDesign name="user" size={30} color="black" />
                    </View>

                    <View className="flex flex-col justify-center">
                      <Text className="font-bold text-base">{user.name}</Text>
                      <Text>
                        <Text className="font-semibold">Role</Text> :{" "}
                        {user.role}
                      </Text>
                    </View>
                  </View>
                  <View className="flex flex-row gap-2 justify-center right-0 p-2">
                    <ThreeDotsMenu
                      id={user.id}
                      activeMenu={activeMenu}
                      setActiveMenu={setActiveMenu}
                    />
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
        <PlusAddButton route={"/screens/superadmin/userlist/adduser"} />
      </View>
    </SafeAreaView>
  );
};

export default userslist;

const styles = StyleSheet.create({});
