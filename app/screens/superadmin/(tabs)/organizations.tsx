//@ts-nocheck
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
  Keyboard,
} from "react-native";
import { router } from "expo-router";
import CustomButton from "@/components/CustomButton";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import HeaderWithText from "@/components/HeaderwithText";
import PlusAddButton from "@/components/PlusAddButton";
import Octicons from "@expo/vector-icons/Octicons";
import ThreeDotsMenu from "@/components/ThreeDotMenu";

const organizations = () => {
  const [isAdding, setisAdding] = useState(false);

  const [organizations, setOrganizations] = useState([
    {
      id: "1",
      name: "Global Tech Hub",
    },
    {
      id: "2",
      name: "Innovative Solutions Inc.",
    },
    ,
    {
      id: "3",
      name: "Innovative Solutions Inc.",
    },
    ,
    {
      id: "4",
      name: "Innovative Solutions Inc.",
    },
    ,
    {
      id: "5",
      name: "Innovative Solutions Inc.",
    },
    ,
    {
      id: "6",
      name: "Innovative Solutions Inc.",
    },
    ,
    {
      id: "7",
      name: "Innovative Solutions Inc.",
    },
    ,
    {
      id: "8",
      name: "Innovative Solutions Inc.",
    },
    ,
    {
      id: "9",
      name: "Innovative Solutions Inc.",
    },
    ,
    {
      id: "10",
      name: "Innovative Solutions Inc.",
    },
    ,
    {
      id: "11",
      name: "Innovative Solutions Inc.",
    },
    ,
    {
      id: "12",
      name: "Innovative Solutions Inc.",
    },
    ,
    {
      id: "13",
      name: "Innovative Solutions Inc.",
    },
    // Add more organizations as needed
  ]);

  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <SafeAreaView>
      <View>
        <View
          className="flex
         p-1
         flex-col "
        >
          <HeaderWithText title={"Organization"} />
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
              {organizations.map((org, index) => (
                <View
                  key={index}
                  className="flex flex-row gap-x-2 items-center justify-between"
                >
                  <View className="flex flex-row items-center gap-x-3 flex-1">
                    <View className="rounded-full bg-gray-400/50 p-3">
                      <Octicons name="organization" size={30} color="black" />
                    </View>

                    <View className="flex flex-col justify-center">
                      <Text className="font-bold text-base">{org.name}</Text>
                    </View>
                  </View>
                  <View className="flex flex-row gap-2 justify-center right-0 p-2">
                    <ThreeDotsMenu
                      id={org.id}
                      activeMenu={activeMenu}
                      setActiveMenu={setActiveMenu}
                    />
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
        <PlusAddButton
          route={"/screens/superadmin/organizations/addorganization"}
        />
      </View>
    </SafeAreaView>
  );
};

export default organizations;

const styles = StyleSheet.create({});
