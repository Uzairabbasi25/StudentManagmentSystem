//@ts-nocheck
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Modal } from 'react-native';

const CustomSelect = ({ options, onSelect }) => {
    useEffect(()=>{
setSelectedOption(options[0]);
    },[])
  const [visible, setVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setVisible(!visible);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onSelect(option); // Call the provided onSelect function
    toggleDropdown(); // Close the dropdown
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleDropdown} style={styles.selectButton}>
        <Text
        className={`
            text-2xl
            font-bold
            text-primary`}
        
        >
          {selectedOption ? selectedOption.label : 'Select an option'}
        </Text>
      </TouchableOpacity>

      {visible && (
        <Modal transparent={true} animationType="fade">
          <TouchableOpacity style={styles.overlay} onPress={toggleDropdown} />
          <View style={styles.dropdown}>
            <FlatList
              data={options}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => handleOptionSelect(item)}
                >
                  <Text className={`
            text-2xl
            font-bold
            text-primary`}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  selectButton: {
    padding: 10,
    backgroundColor: 'transparent', // No background color
    // No border styles
  },
  selectText: {
    fontSize: 16,
    color: 'black',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  dropdown: {
    position: 'absolute',
    top: 50, // Adjust based on your layout
    left: 0,
    right: 0,
    backgroundColor: 'white',
    zIndex: 1,
    elevation: 5,
    padding: 10,
  },
  option: {
    padding: 10,
  },
  optionText: {
    fontSize: 16,
    color: 'black',
  },
});

export default CustomSelect;
