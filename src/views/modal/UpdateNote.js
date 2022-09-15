import { Keyboard, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { rootContext } from '../../context-hook/RootContext'

const UpdateNote = ({modalUpdateNote, setModalUpdateNote, valueIndex}) => {
  const {state, dispatch} = useContext(rootContext);
  const [title, setTitle] = useState(state[valueIndex].title);
  const [detail, setDetail] = useState(state[valueIndex].detail);  
  
  
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalUpdateNote}
        >
        <TouchableOpacity activeOpacity={1} style={{backgroundColor:'#000000aa',flex:1}}
            onPress={() => { setModalUpdateNote(!modalUpdateNote) }}/>
            <View style={{flex: 2, flexDirection: 'row'}}>
              <TouchableOpacity activeOpacity={1} 
                                style={{backgroundColor:'#000000aa', width: '5%'}} 
                                onPress={() => setModalUpdateNote(!modalUpdateNote)} />
              <View style={{ backgroundColor:'#282828', borderRadius: 10, width: '90%'}}>
                <ScrollView>
                  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                  <View>
                  <TextInput
                      multiline={true}
                      placeholderTextColor={'#A9A9A9'}
                      style={{borderWidth: 0.2, borderColor:'gray', marginTop: 30, marginLeft: 20, width: '90%', color: 'white'}}
                      onChangeText={setTitle}
                      value={title}
                    />
                    <TextInput
                      multiline={true}
                      placeholderTextColor={'#A9A9A9'}
                      style={{borderWidth: 0.2, borderColor:'gray', marginTop: 30, marginLeft: 20, paddingBottom: 100, width: '90%', color: 'white'}}
                      onChangeText={setDetail}
                      value={detail}
                    />
                    <TouchableOpacity style={{marginTop: 30, marginHorizontal: 50}}
                                      onPress={() => {
                                        dispatch({type: "UPDATE_TASK", title: title, detail: detail, index: valueIndex})
                                        setModalUpdateNote(false);
                                      }}>
                        <Text style={{textAlign: 'center', padding: 13, fontSize: 15, backgroundColor: '#FF9900', color: 'white', fontWeight: 'bold', 
                                    borderRadius: 10}}>Update Task</Text>
                    </TouchableOpacity>
                  </View>
                  </TouchableWithoutFeedback>
                </ScrollView>
              </View>
              <TouchableOpacity activeOpacity={1} 
                                style={{backgroundColor:'#000000aa', width: '5%'}} 
                                onPress={() => setModalUpdateNote(!modalUpdateNote)} />
            </View>
            
        <TouchableOpacity activeOpacity={1} style={{backgroundColor:'#000000aa',flex:1}} onPress={() => setModalUpdateNote(!modalUpdateNote)} />
      </Modal>
    </View>
  )
}

export default UpdateNote

const styles = StyleSheet.create({})