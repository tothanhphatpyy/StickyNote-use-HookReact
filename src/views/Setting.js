import { StyleSheet, Text, View, Switch, TouchableOpacity, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react';
import { rootContext } from '../context-hook/RootContext';

const Setting = ({ navigation}) => {

  const {darkMode, setDarkMode} = useContext(rootContext);

  return (
    <View style={{backgroundColor: darkMode? 'black' : 'white', flex: 1}}>
      <TouchableOpacity style={{flexDirection: 'row', marginTop: 15, marginLeft: 15, alignItems: 'center'}}
        onPress={() => navigation.goBack()}>
        <Image 
          source={{uri: 'https://i.imgur.com/kdc5wsn.png'}}
          style={{resizeMode: 'contain', height: 10, width: 10, tintColor: 'orange'}}
        />
        <Text style={{fontSize: 15, color: 'orange', marginLeft: 2}}>Back</Text>
      </TouchableOpacity>
      <Text style={{marginTop: 10, textAlign: 'center', fontSize: 25, fontWeight: 'bold', color: darkMode? 'white' : 'black'}}>
          Setting
      </Text>
      <View style={{marginTop: 50, marginLeft: 20, flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{color: darkMode? 'white' : 'black', fontSize: 15}}>Dark Mode: </Text>
        <Switch
            trackColor={{ false: "#A8A8A8", true: "#A9A9A9" }}
            thumbColor={darkMode ? "orange" : "#585858"}
            onValueChange={() => setDarkMode(!darkMode)} 
            value={darkMode}
            style={{marginLeft: 10}}
        />
      </View>
    </View>
  )
}

export default Setting

const styles = StyleSheet.create({})