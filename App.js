import { StyleSheet, Text, View } from 'react-native'
import React, {useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {RootContext} from './src/context-hook/RootContext' 
import Home from './src/views/Home';
import Setting from './src/views/Setting';
import Test from './src/views/Test';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <RootContext>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Setting" component={Setting} />
          <Stack.Screen name="Test" component={Test} />
        </Stack.Navigator>
      </NavigationContainer>
    </RootContext>
  )
}

export default App

const styles = StyleSheet.create({})