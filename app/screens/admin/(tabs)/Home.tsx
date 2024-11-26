//@ts-nocheck
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Keyboard,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import PlusAddButton from "@/components/PlusAddButton";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderWithText from "@/components/HeaderwithText";
import { BarChart } from "react-native-chart-kit";

const Home = () => {
  const adminName = "John Doe"; // Replace with dynamic admin name from your state/context

  // Example data for statistics
  const stats = {
    totalClasses: 10,
    totalStudents: 250,
    totalTeachers: 25,
  };

  // Example data for bar charts
  const attendanceData = {
    labels: [
      "1st",
      "2nd",
      "3rd",
      "4th",
      "5th",
      "6th",
      "7th",
      "8th",
      "9th",
      "10th",
    ],
    datasets: [
      {
        data: [80, 90, 70, 85, 75, 95, 88, 82, 78, 91], // Attendance percentage
      },
    ],
  };

  const marksData = {
    labels: [
      "1st",
      "2nd",
      "3rd",
      "4th",
      "5th",
      "6th",
      "7th",
      "8th",
      "9th",
      "10th",
    ],
    datasets: [
      {
        data: [65, 70, 60, 75, 68, 80, 85, 78, 74, 82], // Average marks
      },
    ],
  };

  return (
    <SafeAreaView>
      <ScrollView
        className="p-4"
        keyboardShouldPersistTaps="handled"
        onTouchStart={Keyboard.dismiss}
      >
        <View
          className="flex
         p-1
         flex-col "
        >
          <HeaderWithText title={`Hy ${adminName}`} />
        </View>

        <View className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
          <Text className="text-lg font-bold mb-2">
            Organization Statistics
          </Text>
          <View className="flex flex-row justify-between">
            <View className="flex items-center">
              <Text className="text-xl font-semibold">
                {stats.totalClasses}
              </Text>
              <Text className="text-sm text-gray-600">Classes</Text>
            </View>
            <View className="flex items-center">
              <Text className="text-xl font-semibold">
                {stats.totalStudents}
              </Text>
              <Text className="text-sm text-gray-600">Students</Text>
            </View>
            <View className="flex items-center">
              <Text className="text-xl font-semibold">
                {stats.totalTeachers}
              </Text>
              <Text className="text-sm text-gray-600">Teachers</Text>
            </View>
          </View>
        </View>

        <View className="bg-white p-4 rounded-lg shadow-md mb-4">
          <Text className="text-lg font-bold mb-2">Attendance by Class</Text>
          <BarChart
            data={attendanceData}
            width={Dimensions.get("window").width - 60} // Full width minus padding
            height={220}
            yAxisLabel="%"
            chartConfig={{
              backgroundColor: "#1E2923",
              backgroundGradientFrom: "#1E2923",
              backgroundGradientTo: "#08130D",
              decimalPlaces: 1,
              color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              barPercentage: 0.5,
            }}
            style={{
              marginVertical: 8,
              borderRadius: 8,
            }}
          />
        </View>

        <View className="bg-white p-4 rounded-lg shadow-md mb-4">
          <Text className="text-lg font-bold mb-2">Average Marks by Class</Text>
          <BarChart
            data={marksData}
            width={Dimensions.get("window").width - 60} // Full width minus padding
            height={220}
            yAxisLabel=""
            chartConfig={{
              backgroundColor: "#4B5563",
              backgroundGradientFrom: "#FF9800",
              backgroundGradientTo: "#FF5722",
              decimalPlaces: 1,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              barPercentage: 0.5,
            }}
            style={{
              marginVertical: 8,
              borderRadius: 8,
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
