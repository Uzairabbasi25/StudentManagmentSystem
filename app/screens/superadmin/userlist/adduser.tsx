// @ts-nocheck
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import HeaderWithText from "@/components/HeaderwithText";

const AddUser = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [organization, setOrganization] = useState("");

  // Example roles and organizations
  const roles = [
    { id: "1", name: "Admin" },
    { id: "2", name: "Editor" },
    { id: "3", name: "Viewer" },
    { id: "4", name: "Contributor" },
  ];

  const organizations = [
    { id: "1", name: "Organization 1" },
    { id: "2", name: "Organization 2" },
    { id: "3", name: "Organization 3" },
  ];

  return (
    <ScrollView className="flex-1 bg-gray-100 p-5">
      <HeaderWithText title={"Add New User"} />

      {/* User Name */}
      <Text className="text-lg font-bold mb-2 text-gray-700">Name</Text>
      <TextInput
        className="border border-gray-300 rounded-lg p-3 text-base bg-white mb-5"
        placeholder="Enter user's name"
        value={userName}
        onChangeText={setUserName}
      />

      {/* Email */}
      <Text className="text-lg font-bold mb-2 text-gray-700">Email</Text>
      <TextInput
        className="border border-gray-300 rounded-lg p-3 text-base bg-white mb-5"
        placeholder="Enter user's email"
        value={email}
        onChangeText={setEmail}
      />

      {/* Password */}
      <Text className="text-lg font-bold mb-2 text-gray-700">Password</Text>
      <TextInput
        className="border border-gray-300 rounded-lg p-3 text-base bg-white mb-5"
        placeholder="Enter user's password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Role Select */}
      <Text className="text-lg font-bold mb-2 text-gray-700">Role</Text>
      <View className="border border-gray-300 rounded-lg bg-white mb-5">
        <Picker
          selectedValue={role}
          onValueChange={(itemValue) => setRole(itemValue)}
          className="text-base p-3"
        >
          <Picker.Item label="Select a Role" value="" />
          {roles.map((role) => (
            <Picker.Item key={role.id} label={role.name} value={role.id} />
          ))}
        </Picker>
      </View>

      {/* Organization Select */}
      <Text className="text-lg font-bold mb-2 text-gray-700">
        Organization (Optional)
      </Text>
      <View className="border border-gray-300 rounded-lg bg-white mb-5">
        <Picker
          selectedValue={organization}
          onValueChange={(itemValue) => setOrganization(itemValue)}
          className="text-base p-3"
        >
          <Picker.Item label="Select an Organization" value="" />
          {organizations.map((org) => (
            <Picker.Item key={org.id} label={org.name} value={org.id} />
          ))}
        </Picker>
      </View>

      {/* Submit Button */}
      <TouchableOpacity
        className="bg-blue-500 flex-row items-center justify-center rounded-lg p-4 gap-1"
        onPress={() => {
          console.log("User added with", {
            userName,
            email,
            password,
            role,
            organization,
          });
        }}
      >
        <FontAwesome name="save" size={20} color="white" />
        <Text className="text-white font-semibold">Save User</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default AddUser;
