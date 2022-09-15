import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { rootContext } from '../../context-hook/RootContext'

const OptionNote = ({setModalUpdateNote, setModalOption, valueIndex}) => {
  const {dispatch} = useContext(rootContext);
  return (
    <View style={{position: 'absolute', right: -10, top: 40}}>
        <View style={{ backgroundColor: 'black', height: 120, width: 130, borderWidth: 0.2,
                         borderColor: 'white', justifyContent: 'space-between'}}>
            <TouchableOpacity 
                style={{ borderBottomWidth: 0.2, borderColor: 'white', height: '50%', justifyContent: 'center'}}
                onPress={() => {
                  dispatch({type: "UPDATE_TASK", valueIndex: valueIndex})
                  setModalOption(false);
                  setModalUpdateNote(true);
                }}>
                <Text style={{paddingLeft: 10, color: 'white', width: '100%'}}>Update note</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={{ borderBottomWidth: 0.2, borderColor: 'white', height: '50%', justifyContent: 'center'}}
                onPress={() => {
                  dispatch({type: "DELETE_TASK", index: valueIndex})
                  setModalOption(false);
                }}>
                    <Text style={{marginLeft: 10, color: 'white'}}>Delete note</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default OptionNote

const styles = StyleSheet.create({})