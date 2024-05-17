/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  Button,
  Alert,
  StatusBar,
  Platform,
  Dimensions,
  ScrollView,
  ImageBackground,
} from 'react-native';

function Revision() {
  const handlePress = () => console.log('Text Pressed');
  console.log(Dimensions.get('screen')); //used to get dimensions of the screen
  console.log(require('./Assets/icon.png')); //to show reference
 return (
    <View
    style={{
      backgroundColor: 'white',
      flex: 1,
      flexDirection:'row', //horizontal
      justifyContent: 'center', //main axis
      alignItems: 'center', //secondary axis a.k.a cross axis
      //flexWrap: 'wrap',
      alignContent: 'center'
    }}>
    <View
      style={{
        backgroundColor: 'dodgerblue',
        width: 100,
        height: 100,
  
        //flexBasis: 100, //to set width or height along main axis
        //flexGrow: 1, //
       // flex: -1, //
        //alignSelf: 'flex-start'
      }}></View>
    <View
      style={{
        backgroundColor: 'gold',
        width: 100,
        height: 100,
        //top:20, // as postion by default is relative so it work acc to it
        //left:20,
      }}></View>
    <View
      style={{
        backgroundColor: 'tomato',
        width: 100,
        height: 100,
  
        //as position set to absolute , it will work ac to the main container
        //position: 'absolute',
        //top: 20,
        //left:20,
      }}></View>


<Text style={styles.txt1}>
       Start to react native. lets make it a very long text and below will
       implement the props named as numberoflines
     </Text>
     <Text style={styles.txt1} numberOfLines={1} onPress={handlePress}>
       Start to react native. lets make it a very long text and below will
       implement the props named as numberoflines
     </Text> 



<TouchableOpacity>
       <Image source={require('./Assets/icon.png')} />
     </TouchableOpacity>
     <TouchableHighlight onPress={() => console.log('Image Pressed')}>
       <Image
         fadeDuration={1000} //to fade
         blurRadius={5}// to blur
         width={250}
         height={50}
         source={{uri: 'https://picsum.photos/200/300'}}
       />
     </TouchableHighlight>
     <TouchableNativeFeedback>
       <View style={{width: 50, height: 50, backgroundColor: 'green'}}></View>
     </TouchableNativeFeedback> 

<Button>
        color={'orange'}
        title="Click me"
        onPress={() => Alert.alert('Button Pressed')}
        onPress={()=> Alert.prompt("My title","my message", text=>console.log(text))}
         
         </Button>
         {/* Alert.alert("My title", "My message", [
          {text: "Yes", onPress: () => console.log("yes")},
          {text: "No" , onPress: () => console.log("No") },
         ]) */}


{/*layots*/}
<View
        style={{backgroundColor: 'darkblue', 
        height: 70, 
        width: '50%'}}>
        </View> 
  </View>

  
);
}

 
export default Revision;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    //paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});


