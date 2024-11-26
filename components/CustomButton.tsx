//@ts-nocheck
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const CustomButton = ({handlePress,buttonStyles,TextStyles,title,isloading}) => {
  return (
    <TouchableOpacity
    disabled={isloading}
    activeOpacity={0.7}
    onPress={handlePress}
    className={`
        justify-center
        items-center
        min-h-[62px]
        rounded-xl
        bg-primary
        p-2
        ${buttonStyles}
        ${isloading?"opacity-50":""}
        `}
    >
  
    
    
        <Text
        className={`
           
            ${TextStyles}

            `}
        >{title}</Text>
    

    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({})