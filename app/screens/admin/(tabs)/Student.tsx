//@ts-nocheck
import { StyleSheet, Text, View, ScrollView, Keyboard } from "react-native";
import React, { useState } from "react";
import PlusAddButton from "@/components/PlusAddButton";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderWithText from "@/components/HeaderwithText";
import { Octicons } from "@expo/vector-icons";
import ThreeDotsMenu from "@/components/ThreeDotMenu";
import AntDesign from "@expo/vector-icons/AntDesign";

const Student = () => {
  const studentData = [
    {
      id: "1",
      name: "Ethan Miller",
      grade: "10th Grade",
      enrollmentYear: 2020,
    },
    {
      id: "2",
      name: "Sophia Anderson",
      grade: "9th Grade",
      enrollmentYear: 2021,
    },
    {
      id: "3",
      name: "Liam Carter",
      grade: "11th Grade",
      enrollmentYear: 2019,
    },
    {
      id: "4",
      name: "Olivia Turner",
      grade: "12th Grade",
      enrollmentYear: 2018,
    },
    {
      id: "5",
      name: "Noah Wilson",
      grade: "8th Grade",
      enrollmentYear: 2022,
    },
    {
      id: "6",
      name: "Ava Martinez",
      grade: "10th Grade",
      enrollmentYear: 2020,
    },
    {
      id: "7",
      name: "Isabella Gonzalez",
      grade: "11th Grade",
      enrollmentYear: 2019,
    },
    {
      id: "8",
      name: "Mason Hernandez",
      grade: "9th Grade",
      enrollmentYear: 2021,
    },
    {
      id: "9",
      name: "Charlotte Walker",
      grade: "12th Grade",
      enrollmentYear: 2018,
    },
    {
      id: "10",
      name: "James Lewis",
      grade: "10th Grade",
      enrollmentYear: 2020,
    },
    {
      id: "11",
      name: "Amelia Hall",
      grade: "8th Grade",
      enrollmentYear: 2022,
    },
    {
      id: "12",
      name: "Elijah Young",
      grade: "9th Grade",
      enrollmentYear: 2021,
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
          <HeaderWithText title={"Students"} />
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
              {studentData.map((student, index) => (
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
                        {student.name}
                      </Text>
                      <Text className="font-semibold text-sm">
                        {student.grade}
                      </Text>
                    </View>
                  </View>
                  <View className="flex flex-row gap-2 justify-center right-0 p-2">
                    <ThreeDotsMenu
                      id={student.id}
                      activeMenu={activeMenu}
                      setActiveMenu={setActiveMenu}
                    />
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
        <PlusAddButton route={"../Student/addstudent"} />
      </View>
    </SafeAreaView>
  );
};

export default Student;

const styles = StyleSheet.create({});
