import { StyleSheet, Text, View } from 'react-native'
import React, {createContext, useReducer, useState} from 'react'
import {initialState, reducer} from '../reducer-hook/rootReducer'

export const rootContext = createContext();

export const RootContext = ({children}) => {

  const [state, dispatch] = useReducer(reducer, initialState);
  const [darkMode, setDarkMode] = useState(true);
  return (
   <rootContext.Provider value={{state, dispatch, darkMode, setDarkMode}}>
     {children}
   </rootContext.Provider>
  )
}



const styles = StyleSheet.create({})