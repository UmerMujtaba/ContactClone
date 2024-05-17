/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import colors from '../config/colors';
function ImageScreen() {
  const {logocont, img, img2, log, sign} = styles;
  return (
    <View style={logocont}>
    <View style={log}></View>
      <View style={sign}></View>
    <Image style={img} source={require('../Assets/img.png')}>
      
    </Image>
    </View>
  );
}

const styles = StyleSheet.create({
    logocont:{
        backgroundColor: colors.black,
        flex: 1
    },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    
  },
  log: {
    backgroundColor: colors.primary,
    width: 50,
    height: 50,
    position: 'absolute',
    top: 20,
    left: 20
  },
  sign: {
    backgroundColor: colors.secondary,
    position: 'absolute',
    width: 50,
    height: 50,
    top: 20,
    right: 30
  },
});

export default ImageScreen;
