/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

const data = [
  {label: 'Home', value: '1'},
  {label: 'Work', value: '2'},
  {label: 'Other', value: '3'},
  {label: 'Custom', value: '4'},
];

const DropdownComponent = () => {
  const [value, setValue] = useState(null);

  // Custom render function for dropdown items
  const renderItem = (item, index, isSelected) => {
    return (
      <View style={styles.dropdownItem}>
        <Text style={isSelected ? styles.selectedItemText : styles.itemText}>
          {console.log(item.label)}
          {item.label}
        </Text>
      </View>
    );
  };

  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      iconStyle={styles.iconStyle}
      data={data}
      containerStyle={styles.chk}
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Home"
      value={value}
      onChange={item => {
        setValue(item.value);
      }}
      
      renderItem={renderItem} // Pass the custom render function
    />
  );
};

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 30,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    color: 'black',
    width: 95,
    
    
     
  },
  chk:{
    backgroundColor: 'grey',
   borderTopLeftRadius:50
    // borderRadius: 50
  },
  placeholderStyle: {
    fontSize: 16,
    color: 'gray',
    
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'white',
    left: 5,
    
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  dropdownItem: {
    padding: 10,
    backgroundColor: 'grey',
  
  },
  itemText: {
    fontSize: 16,
    color: 'black',
  },
  selectedItemText: {
    fontSize: 16,
    color: 'white', // Customize the color for selected item
    fontWeight: 'bold', // Add any other styles for selected item
  },
});

export default DropdownComponent;
