//@ts-nocheck
import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
 

const CustomFormFiled = ({title,value,onChangeText,placeholder}) => {
  return (
    <View
    className={`
        mt-2
    space-y-2`}>
      <Text
      className='font-semibold
      text-base'>{title}</Text>
      <TextInput
      className={`
         h-16
         rounded-xl
         border-2
       border-slate-400
       focus:border-primary
         text-left
         px-2 
`}
      onChangeText={onChangeText}
placeholder={placeholder}
secureTextEntry={title==='Password'}

      />
    </View>
  )
}

export default CustomFormFiled

const styles = StyleSheet.create({})