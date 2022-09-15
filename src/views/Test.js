import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'



const Test = () => {
  const windowHeight = Dimensions.get('window').height;
  console.log(windowHeight);
  return (
    <ScrollView style={{backgroundColor: 'pink',}}>
        <View style={{height: 500, backgroundColor: 'red'}}></View>
        <View style={{height: 500, backgroundColor: 'blue'}}></View>
    </ScrollView>
  )
}

export default Test

const styles = StyleSheet.create({})