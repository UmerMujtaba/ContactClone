/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Modal from 'react-native-modal';
import Iconss from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import DropdownComponent from './DropDown1';
import {useState} from 'react';
const AddContact = ({isVisible, onClose}) => {
  const {container, nav, hdng, name, nameinput, phone, nameinput1, info} =
    styles;
  const [text, setText] = useState('');
  const navigation = useNavigation();
  return (
    <Modal
      isVisible={isVisible}
      animationIn="slideInUp"
      animationOut="slideOutDown">
      <View style={container}>
        <View style={nav}>
          <Iconss
            name={'cross'}
            size={30}
            color={'white'}
            marginTop={12}
            marginLeft={15}
            onPress={onClose}
          />
          <Text style={hdng}>New Contact</Text>
          <Iconss
            name={'check'}
            size={30}
            color={'white'}
            marginTop={12}
            left={150}
            onPress={onClose}
          />
        </View>

        <View style={name}>
          <Iconss
            name={'user'}
            size={30}
            color={'white'}
            marginLeft={15}
            onPress={onClose}
          />
          <View style={nameinput}>
            <TextInput
              placeholder="Name"
              placeholderTextColor={'grey'}
              value={text}
              onChangeText={setText}></TextInput>
          </View>
        </View>

        <View style={[name, phone]}>
          <Iconss
            name={'phone'}
            size={30}
            color={'white'}
            marginLeft={15}
            onPress={onClose}
            top={15}
          />
          <TouchableOpacity style={styles.btn1}>
            <DropdownComponent />
          </TouchableOpacity>
          <View style={[nameinput1]}>
            <TextInput
              placeholder="Number"
              placeholderTextColor={'grey'}
              value={text}
              top={20}
              onChangeText={setText}
              keyboardType="numeric"></TextInput>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
          <Text style={info} >
            Add more info
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#151515', // Adjust opacity as needed
    height: 270,
    borderRadius: 50,
    top: 170,
    width: 'auto',
  },
  nav: {
    top: 20,
    opacity: 0.9,
    borderRadius: 50,
    flexDirection: 'row',
  },
  hdng: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 15,
    left: 75,
  },
  name: {
    flexDirection: 'row',
    top: 60,
  },
  nameinput: {
    width: '70%',
    borderColor: 'green',
    borderBottomWidth: 1,
    left: 35,
    bottom: 18,
  },
  nameinput1: {
    width: '45%',
    borderColor: 'green',
    borderBottomWidth: 1,
    left: 0,
    bottom: 18,
  },
  info: {
    fontSize: 18,
    color: 'green',
    top: 75,
    left: 25,
  },
});

export default AddContact;
