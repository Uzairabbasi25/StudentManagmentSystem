//@ts-nocheck
import React from 'react'
import { Text, View, ScrollView, Image } from 'react-native'
import { StatusBar } from "expo-status-bar"
import { SafeAreaView } from "react-native-safe-area-context"
import CustomButton from '@/components/CustomButton';
import { router,Redirect } from 'expo-router';
import { MenuProvider } from 'react-native-popup-menu' // Import MenuProvider

export default function App() {
  return (
    
    <SafeAreaView className="bg-white 
    h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View
          className="w-full justify-center 
          h-[85vh]
         items-center  
         space-y-4
        
          px-4"
        >
          <Image
            source={require('@/assets/images/Logo.png')}  
            className="w-[145px]
h-[70px]"
            resizeMode='contain'
          />
          <View className="
          mt-4
          flex
          flex-col
          justify-center
          w-full
          
          items-center
          space-y-6
          ">
            <Text className="text-2xl text-center font-semibold text-gray-800">
              Track. Analyze. Visualize.
            </Text>
            <Text className="text-lg text-gray-600 text-center mt-2 px-2">
              Effortlessly manage attendance, store exam scores, and visualize student performance.
            </Text>
            <View>
            
          </View>
          <CustomButton
          handlePress={()=>{router.push('/(auth)/sign-in')}}
          title={"Continue With Email"}
          buttonStyles={
            `w-full
            mt-7
            `}
            TextStyles={`
              text-white
              font-semibold
              text-base`}
          />
          </View>
         
        </View>
      </ScrollView>
    </SafeAreaView>
    
  );
}
