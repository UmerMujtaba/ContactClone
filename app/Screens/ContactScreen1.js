/* eslint-disable prettier/prettier */
/* eslint-disable no-alert */
/* eslint-disable react/self-closing-comp*/
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-shadow */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  Image,
  TextInput,
  SectionList,
  TouchableOpacity,
} from 'react-native';
import {Modal} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useState} from 'react';
import Icons from 'react-native-vector-icons/AntDesign';
import SimpleMenu from '../Components/SimpleMenu';
import {NavigationContainer} from '@react-navigation/native';
import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

import Iconss from 'react-native-vector-icons/Entypo';
import AddContact from '../Components/AddContact';
const DATA = [
  {
    title: 'A',
    data: ['Abbas', 'Abdul Mateen', 'Abdul Qadir', 'Abdullah', 'Adil'],
  },
  {title: 'B', data: ['Basalat', 'Basit', 'Bilal', 'Burair']},
  {title: 'C', data: ['Car Rent', 'Ch Umair', 'CNIC']},
  {title: 'D', data: ['Danish', 'Daud', 'Dr Ishfaq']},
  {title: 'E', data: ['Ehsan', 'Emirates Lhr']},
  {title: 'F', data: ['Fahad', 'Faisal', 'Faizan', 'Faraz']},
  {title: 'G', data: ['Ghufran', 'Galaxy Vapers']},
  {title: 'H', data: ['Hameed', 'Hammad', 'Hamza', 'Haris']},
  {title: 'I', data: ['Ibrar', 'Ibtisam', 'Ijaz', 'Irtaza']},
  {title: 'J', data: ['Jabba', 'Jawad', 'Junaid']},
  {title: 'K', data: ['Kaleem', 'Kashif', 'Khubaib', 'Kips']},
  {title: 'L', data: ['Luqman', 'Lucky']},
  {title: 'M', data: ['Maaz', 'M', 'Majid', 'Malik Bilal']},
  {title: 'N', data: ['Nabeegh', 'Nabeel', 'Naseer', 'Nouman']},
  {title: 'O', data: ['Osama Clg']},
  {title: 'P', data: ['Pervaiz', 'PTCL']},
  {title: 'Q', data: ['Qadir', 'Qamar', 'Qasim']},
  {title: 'R', data: ['Rabeel', 'Rana Ahmer', 'Raza']},
  {title: 'S', data: ['Saad', 'Saif', 'Saim', 'Sajjad']},
  {title: 'T', data: ['Tahir', 'Tabish', 'Tipu']},
  {title: 'U', data: ['Ubaid', 'Usman', 'Usaid', 'Usama']},
  {title: 'V', data: ['Vicky']},
  {title: 'W', data: ['Wahid', 'Waleed', 'Waqar']},
  {title: 'Y', data: ['Yahya', 'Yaseen']},
  {title: 'Z', data: ['Zabir', 'Zaeem', 'Zain', 'Zaki']},
];
const ContactScreen1 = ({navigation}) => {
  const [textColor, setTextColor] = useState('green');
  const [text, setText] = useState('');

  const handleTextClick = () => {
    setTextColor(textColor === 'white' ? 'green' : 'white');
  };

  const handleTextClick2 = () => {
    setTextColor(textColor === 'white' ? 'green' : 'white');
  };

  const [isContactModalVisible, setisContactModalVisible] = useState(false);

  const showContactModal = () => {
    setisContactModalVisible(true);
  };

  const hideContactModal = () => {
    setisContactModalVisible(false);
  };
  const {
    container,
    edit,
    text1,
    icon1,
    phone,
    contact,
    opt,
    optTxt,
    srch,
    thisphone,
    detail,
    img,
    head,
    mid,
    cntct,
    item,
    header,
    title,
    circle,
    modalContainer,
    modalContent,
  } = styles;

  return (
    <SafeAreaView style={container}>
      <View style={edit}>
        <Text style={text1}>Edit</Text>
      </View>
      <View style={icon1}>
        <MenuProvider style={styles.container1}>
          <Menu>
            <MenuTrigger
              customStyles={{
                triggerWrapper: {
                  left: 40,
                  top: -35,
                },
              }}>
              <Iconss
                name="dots-three-vertical"
                size={26}
                color="white"
                marginTop={50}
                zIndex={1}
                marginLeft={60}
              />
            </MenuTrigger>
            <MenuOptions
              customStyles={{
                optionsContainer: {backgroundColor: 'grey', borderRadius: 10},
              }}>
              <MenuOption onSelect={() => alert('Save')} text="My Groups" />
              <MenuOption onSelect={() => alert('Delete')} text="Settings" />
            </MenuOptions>
          </Menu>
        </MenuProvider>
      </View>
      <View style={opt}>
        <View style={phone}>
          <TouchableOpacity onPress={handleTextClick}>
            <Text style={[optTxt, {color: textColor}]}>Phone</Text>
          </TouchableOpacity>
        </View>
        <View style={contact}>
          <TouchableOpacity onPress={handleTextClick2}>
            <Text style={[optTxt, {color: textColor}]}>Contacts</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={srch}>
        <Icon name="search" size={20} color="white" style={{margin: 10}} />
        <TextInput
          placeholder="Search among 20 contacts"
          placeholderTextColor={'grey'}
          value={text}
          onChangeText={setText}
          style={{flex: 1, color: 'white'}}
        />
      </View>
      <View style={thisphone}>
        <View style={img}>
          <Image
            source={require('../Assets/user.png')}
            style={{width: 50, height: 50, borderRadius: 25}}
          />
        </View>
        <View style={detail}>
          <View>
            <Text style={head}>This Phone's Number</Text>
          </View>
          <View>
            <Text style={mid}>03054034026</Text>
          </View>
        </View>
      </View>
      <View style={cntct}>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => (
            <View style={item}>
              <Text style={title}>{item}</Text>
            </View>
          )}
          renderSectionHeader={({section: {title}}) => (
            <Text style={header}>{title}</Text>
          )}
        />

        <View style={circle}>
          <TouchableOpacity onPress={showContactModal}>
            <Icons
              name="plus"
              size={30}
              color="white"
              style={{alignSelf: 'center', marginTop: 16}}
            />
          </TouchableOpacity>

          <AddContact
            isVisible={isContactModalVisible}
            onClose={hideContactModal}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ContactScreen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  edit: {
    position: 'absolute',
    top: 20,
    left: 30,
  },
  text1: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  icon1: {
    top: 20,
    position: 'absolute',
    right: 30,
  },
  container1: {
    flex: 1,

    flexDirection: 'column',
    height: 70,
    width: 80,
    marginRight: 40,
    zIndex: -1,
  },
  opt: {
    flexDirection: 'row',
    alignSelf: 'center',
    position: 'absolute',
    top: 60,
  },
  phone: {
    height: 20,
    right: 40,
  },
  contact: {
    height: 20,
    left: 40,
  },
  optTxt: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  srch: {
    width: '90%',
    height: 40,
    backgroundColor: '#31363F',
    marginTop: 100,
    alignSelf: 'center',
    borderRadius: 10,
    fontSize: 20,
    color: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  thisphone: {
    flexDirection: 'row',
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  detail: {
    flexDirection: 'column',
    marginLeft: 20,
  },
  img: {
    color: 'white',
    height: 50,
    backgroundColor: '#4E9F3D',
    marginLeft: 45,
    borderRadius: 25,
  },
  head: {
    marginTop: 5,
    fontSize: 16,
    color: 'white',
  },
  mid: {
    fontSize: 14,
    color: 'white',
  },
  cntct: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 20,
    // width: '75%'
  },
  item: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#31363F',
    borderRadius: 5,
  },
  header: {
    fontSize: 24,
    color: 'white',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  title: {
    fontSize: 18,
    color: 'white',
    padding: 15,
    marginLeft: 5,
  },
  circle: {
    borderColor: 'white',
    borderRadius: 50,
    backgroundColor: 'grey',
    height: 60,
    width: 60,
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    //backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
  
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Adjust opacity here
    borderRadius: 10,
  },
});
