/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet} from 'react-native';
//import WelcomeScreen from './Screens/WelcomeScreen';
//import ImageScreen from './app/Screens/ImageScreen';
//import Revision from './app/Screens/Revision';
import ContactScreen1 from './app/Screens/ContactScreen1';
import AddContact from './app/Components/AddContact';
import Detail from './app/Screens/Detail';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const App=() =>{
  const {container} = styles;
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CS">
        <Stack.Screen
          name="CS"
          component={ContactScreen1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Add"
          component={AddContact}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>

    //<WelcomeScreen/>
    //<ImageScreen/>
    //<Revision/>
   //<ContactScreen1/>
    //<AddContact navigation={undefined}/>
  );
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    //paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
