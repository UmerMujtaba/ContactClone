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
function WelcomeScreen() {
  const {logocont, img, img2, log, sign} = styles;
  return (
    <ImageBackground style={img} source={require('../Assets/img.png')}>
      <View style={logocont}>
        <Image style={img2} source={require('../Assets/logo.png')} />
        <Text style={{fontSize: 20, color: 'white'}}>I am a new brand</Text>
      </View>

      <View style={log}></View>
      <View style={sign}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  img: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  logocont: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  log: {
    backgroundColor: colors.primary,
    width: '100%',
    height: 50,
  },
  sign: {
    backgroundColor: colors.secondary,
    width: '100%',
    height: 50,
  },
});

export default WelcomeScreen;
