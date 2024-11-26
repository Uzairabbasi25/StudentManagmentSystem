//@ts-nocheck

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { FontAwesome } from "@expo/vector-icons"; // Import FontAwesome icons from Expo
import HeaderWithText from "@/components/HeaderwithText";
const addorganization = () => {
  const [organizationName, setOrganizationName] = useState("");
  const [selectedHead, setSelectedHead] = useState("");
  const [admins, setAdmins] = useState([
    { id: 1, name: "Alice Johnson" },
    { id: 2, name: "Bob Smith" },
    { id: 3, name: "Carol Davis" },
  ]);

  const handleSave = () => {
    if (!organizationName || !selectedHead) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    Alert.alert(
      "Form Saved",
      `Organization: ${organizationName}\nHead: ${
        admins.find((admin) => admin.id === selectedHead)?.name
      }`
    );
  };

  return (
    <View className="flex-1 p-5 bg-gray-100">
      <HeaderWithText title={"Add/Edit Organization Form"}/>
      <Text className="text-lg font-bold mb-2 text-gray-700">
        Organization Name
      </Text>
      <TextInput
        className="border border-gray-300 rounded-lg p-3 text-base bg-white mb-5"
        placeholder="Enter organization name"
        value={organizationName}
        onChangeText={(text) => setOrganizationName(text)}
      />

      <Text className="text-lg font-bold mb-2 text-gray-700">
        Select Admin/Head
      </Text>
      <View className="border border-gray-300 rounded-lg bg-white mb-5">
        <Picker
          selectedValue={selectedHead}
          onValueChange={(itemValue) => setSelectedHead(itemValue)}
          className="text-base"
        >
          <Picker.Item label="Select an Admin/Head" value="" />
          {admins.map((admin) => (
            <Picker.Item key={admin.id} label={admin.name} value={admin.id} />
          ))}
        </Picker>
      </View>

      <TouchableOpacity
        className="bg-blue-500 flex-row items-center justify-center rounded-lg p-4 gap-1"
        onPress={handleSave}
      >
        <FontAwesome name="save" size={27} color="white" className="mr-2" />
        <Text className="text-white font-bold text-xl">Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default addorganization;

const styles = StyleSheet.create({});
