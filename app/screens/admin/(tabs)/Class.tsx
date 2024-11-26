//@ts-nocheck
import { StyleSheet, Text, View, ScrollView, Keyboard } from "react-native";
import React, { useState } from "react";
import PlusAddButton from "@/components/PlusAddButton";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderWithText from "@/components/HeaderwithText";
import { Octicons } from "@expo/vector-icons";
import ThreeDotsMenu from "@/components/ThreeDotMenu";
import AntDesign from "@expo/vector-icons/AntDesign";

const Class = () => {
  const classData = [
    {
      id: "1",
      className: "1st Grade",
      teacherInCharge: "Emma Wilson",
      studentCount: 20,
    },
    {
      id: "2",
      className: "2nd Grade",
      teacherInCharge: "Liam Johnson",
      studentCount: 22,
    },
    {
      id: "3",
      className: "3rd Grade",
      teacherInCharge: "Olivia Brown",
      studentCount: 25,
    },
    {
      id: "4",
      className: "4th Grade",
      teacherInCharge: "Noah Smith",
      studentCount: 27,
    },
    {
      id: "5",
      className: "5th Grade",
      teacherInCharge: "Sophia Garcia",
      studentCount: 30,
    },
    {
      id: "6",
      className: "6th Grade",
      teacherInCharge: "Mason Martinez",
      studentCount: 28,
    },
    {
      id: "7",
      className: "7th Grade",
      teacherInCharge: "Ava Davis",
      studentCount: 26,
    },
    {
      id: "8",
      className: "8th Grade",
      teacherInCharge: "Ethan Miller",
      studentCount: 24,
    },
    {
      id: "9",
      className: "9th Grade",
      teacherInCharge: "Isabella Turner",
      studentCount: 22,
    },
    {
      id: "10",
      className: "10th Grade",
      teacherInCharge: "James Carter",
      studentCount: 20,
    },
  ];
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <SafeAreaView>
      <View>
        <View
          className="flex
         p-1
         flex-col "
        >
          <HeaderWithText title={"Classes"} />
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
              {classData.map((classdata, index) => (
                <View
                  key={index}
                  className="flex flex-row gap-x-2 items-center justify-between"
                >
                  <View className="flex flex-row items-center gap-x-3 flex-1">
                    <View className="rounded-full bg-gray-400/50 p-3">
                      <AntDesign name="user" size={30} color="black" />
                    </View>

                    <View className="flex flex-col justify-center">
                      <Text className="font-bold text-base">
                        {classdata.className}
                      </Text>
                      <Text className="font-semibold text-sm">
                        StudentCount : {classdata.studentCount}
                      </Text>
                    </View>
                  </View>
                  <View className="flex flex-row gap-2 justify-center right-0 p-2">
                    <ThreeDotsMenu
                      id={classdata.id}
                      activeMenu={activeMenu}
                      setActiveMenu={setActiveMenu}
                    />
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
        <PlusAddButton route={"../Class/addclass"} />
      </View>
    </SafeAreaView>
  );
};

export default Class;

const styles = StyleSheet.create({});
