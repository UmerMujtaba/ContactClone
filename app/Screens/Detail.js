/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import Icons from 'react-native-vector-icons/FontAwesome5';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import DropdownComponent from '../Components/DropDown1';
import Iconss from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/EvilIcons';
import DatePicker from 'react-native-date-picker';
import DropdownComponent1 from '../Components/DropDown2';
import DropdownComponent2 from '../Components/DropDown';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/SimpleLineIcons';
const Detail = ({navigation}) => {
  const {container, hdng, nav, hdng2, trainer1, txt1, txt2, main} = styles;
  const [Name, setUserName] = useState('');
  const [PhoneticName, setPhoneticName] = useState('');
  const [Company, setCompany] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [Mobile, setMbile] = useState(false);
  const [Email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [dateText, setDateText] = useState('');
  const [Website, setWebsite] = useState('');
  const [Notes, setNotes] = useState(false);

  const handleConfirm = date => {
    setSelectedDate(date);
    setDateText(date.toDateString()); // or format the date as needed
    setIsDatePickerVisible(false);
  };
  return (
    <ScrollView>
      <SafeAreaView style={container}>
        <View style={nav}>
          <Icon
            name={'cross'}
            size={30}
            color={'white'}
            marginLeft={10}
            onPress={() => navigation.goBack()}
          />
          <Text style={hdng}>New Contact</Text>
          <Icon
            name={'check'}
            size={30}
            color={'white'}
            right={10}
            onPress={() => navigation.goBack()}
          />
        </View>
        <View style={styles.img}>
          <Icon
            name={'camera'}
            size={30}
            color={'white'}
            top={22}
            left={25}
            opacity={1}
            //onPress={() => navigation.goBack()}
          />
        </View>

        <View style={styles.name}>
          <Icon name={'user'} size={25} color={'white'} />
          <View style={styles.inpt}>
            <TextInput
              placeholder="Name"
              placeholderTextColor={'grey'}
              height={45}
              bottom={7}
              fontSize={16}
              value={Name}
              onChangeText={setUserName}></TextInput>
          </View>
        </View>
        <View style={styles.name}>
          <View style={styles.inpt}>
            <TextInput
              placeholder="Phonetic Name"
              placeholderTextColor={'grey'}
              height={45}
              bottom={7}
              fontSize={16}
              value={PhoneticName}
              onChangeText={setPhoneticName}></TextInput>
          </View>
        </View>
        <View style={styles.name}>
          <Icons name={'building'} size={25} color={'white'} />
          <View style={styles.inpt}>
            <TextInput
              placeholder="Company"
              placeholderTextColor={'grey'}
              height={45}
              bottom={7}
              fontSize={16}
              value={Company}
              onChangeText={setCompany}></TextInput>
          </View>
        </View>
        <View style={styles.name}>
          <View style={styles.inpt}>
            <TextInput
              placeholder="Job Title"
              placeholderTextColor={'grey'}
              height={45}
              bottom={7}
              fontSize={16}
              value={jobTitle}
              onChangeText={setJobTitle}></TextInput>
          </View>
        </View>

        <View style={styles.name1}>
          <Icons name={'phone'} size={25} color={'white'} top={15} />
          <DropdownComponent />
          <View style={styles.inpt1}>
            <TextInput
              placeholder="Number"
              placeholderTextColor={'grey'}
              height={45}
              fontSize={16}
              keyboardType="numeric"
              value={Mobile}
              onChangeText={setMbile}
              style={{flex: 1, color: 'white'}}
              top={15}></TextInput>
          </View>
        </View>

        <View style={styles.name1}>
          <Iconss name={'mail'} size={25} color={'white'} top={15} />
          <DropdownComponent2 />
          <View style={styles.inpt1}>
            <TextInput
              placeholder="Email"
              placeholderTextColor={'grey'}
              height={45}
              fontSize={16}
              value={Email}
              onChangeText={setEmail}
              style={{flex: 1, color: 'white'}}
              top={15}></TextInput>
          </View>
        </View>

        <View style={styles.name1}>
          <Icon1 name={'location'} size={25} color={'white'} top={15} />
          <DropdownComponent2 />
          <View style={styles.inpt1}>
            <TextInput
              placeholder="Address"
              placeholderTextColor={'grey'}
              height={45}
              fontSize={16}
              value={address}
              onChangeText={setAddress}
              style={{flex: 1, color: 'white'}}
              top={15}></TextInput>
          </View>
        </View>

        <View style={styles.name1}>
          <Icons name={'calendar'} size={25} color={'white'} top={15} />
          <DropdownComponent1 />

          <TouchableOpacity
            style={{height: 25}}
            onPress={() => setIsDatePickerVisible(true)}>
            <View style={styles.inpt2}>
              <DatePicker
                modal
                open={isDatePickerVisible}
                date={selectedDate}
                onConfirm={handleConfirm}
                onCancel={() => setIsDatePickerVisible(false)}
                mode="date"
              />

              <TextInput
                placeholder={dateText || 'Date'}
                placeholderTextColor={'grey'}
                editable={false}
                //height={10}
                fontSize={16}
                style={{height: 45, color: 'white'}}
                // top={10}
              ></TextInput>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.name}>
          <Icon2 name={'web'} size={25} color={'white'} />
          <View style={styles.inpt}>
            <TextInput
              placeholder="Website"
              placeholderTextColor={'grey'}
              height={45}
              bottom={7}
              fontSize={16}
              value={Website}
              onChangeText={setWebsite}></TextInput>
          </View>
        </View>

        <View style={styles.name}>
          <Icon3 name={'note'} size={25} color={'white'} />
          <View style={styles.inpt}>
            <TextInput
              placeholder="Note"
              placeholderTextColor={'grey'}
              height={45}
              bottom={7}
              fontSize={16}
              value={Notes}
              onChangeText={setNotes}></TextInput>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 900,
    backgroundColor: 'black',
  },
  nav: {
    height: 50,
    width: '100%', // Use full width of the screen
    backgroundColor: 'black',
    opacity: 0.9,
    flexDirection: 'row',
    justifyContent: 'center', // Horizontally center the children
    alignItems: 'center', // Vertically center the children
    position: 'fixed',
    top: 0,
    zIndex: 1,
  },
  hdng: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    left: 110, // Pushes text to the left
    marginRight: 'auto', // Pushes text to the right,
  },
  img: {
    height: 80,
    width: 80,
    backgroundColor: 'lightgreen',
    opacity: 0.3,
    borderRadius: 50,
    alignSelf: 'center',
    top: 20,
  },
  name: {
    top: 50,
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    marginBottom: 50,
  },

  inpt: {
    borderBottomColor: 'green',
    width: '80%',
    height: 30,
    borderWidth: 2,
    bottom: 2,
    left: 55,
    position: 'absolute',
    borderBottomWidth: 1,
  },
  name1: {
    top: 40,
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    marginBottom: 25,
  },
  inpt1: {
    width: 185,
    borderBottomWidth: 1,
    borderBottomColor: 'green',
    bottom: 15,
  },
  inpt2: {
    width: 185,
    borderBottomWidth: 1,
    borderBottomColor: 'green',
    bottom: 0,
  },
});
