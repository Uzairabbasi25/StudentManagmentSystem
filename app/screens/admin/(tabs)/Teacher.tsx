//@ts-nocheck
import { StyleSheet, Text, View, ScrollView, Keyboard } from "react-native";
import React, { useState } from "react";
import PlusAddButton from "@/components/PlusAddButton";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderWithText from "@/components/HeaderwithText";
import { Octicons } from "@expo/vector-icons";
import ThreeDotsMenu from "@/components/ThreeDotMenu";
import AntDesign from "@expo/vector-icons/AntDesign";

const Teacher = () => {
  const teacherData = [
    {
      id: "1",
      name: "John Smith",
      subject: "Mathematics",
      experience: "10 years",
    },
    {
      id: "2",
      name: "Jane Doe",
      subject: "Physics",
      experience: "8 years",
    },
    {
      id: "3",
      name: "Alice Johnson",
      subject: "Chemistry",
      experience: "5 years",
    },
    {
      id: "4",
      name: "Michael Brown",
      subject: "Biology",
      experience: "12 years",
    },
    {
      id: "5",
      name: "Emily Davis",
      subject: "Computer Science",
      experience: "7 years",
    },
    {
      id: "6",
      name: "Daniel Walker",
      subject: "History",
      experience: "6 years",
    },
    {
      id: "7",
      name: "Sophia Wilson",
      subject: "English Literature",
      experience: "9 years",
    },
    {
      id: "8",
      name: "Oliver Martinez",
      subject: "Economics",
      experience: "4 years",
    },
    {
      id: "9",
      name: "Emma Thompson",
      subject: "Geography",
      experience: "11 years",
    },
    {
      id: "10",
      name: "Liam Garcia",
      subject: "Political Science",
      experience: "5 years",
    },
    {
      id: "11",
      name: "Ava Lee",
      subject: "Art and Design",
      experience: "8 years",
    },
    {
      id: "12",
      name: "Noah Hernandez",
      subject: "Physical Education",
      experience: "10 years",
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
          <HeaderWithText title={"Teachers"} />
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
              {teacherData.map((teacher, index) => (
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
                        {teacher.name}
                      </Text>
                      <Text className="font-semibold text-sm">
                        {teacher.subject}
                      </Text>
                    </View>
                  </View>
                  <View className="flex flex-row gap-2 justify-center right-0 p-2">
                    <ThreeDotsMenu
                      id={teacher.id}
                      activeMenu={activeMenu}
                      setActiveMenu={setActiveMenu}
                    />
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
        <PlusAddButton route={"../Teacher/addteacher"} />
      </View>
    </SafeAreaView>
  );
};

export default Teacher;

const styles = StyleSheet.create({});
