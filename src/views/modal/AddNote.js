import { Keyboard, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { rootContext } from '../../context-hook/RootContext'

const AddNote = ({modalAddNote, setModalAddNote}) => {
  const {dispatch} = useContext(rootContext);
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');  
  
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalAddNote}
        >
        <TouchableOpacity activeOpacity={1} style={{backgroundColor:'#000000aa',flex:1}} 
            onPress={() => { setModalAddNote(!modalAddNote) }}/>
            <View style={{flex: 2, backgroundColor:'#282828', borderRadius: 10,}}>
            <ScrollView>
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View>
              <TextInput
                  multiline={true}
                  placeholder='  Name task'
                  placeholderTextColor={'#A9A9A9'}
                  style={{borderWidth: 0.2, borderColor:'gray', marginTop: 30, marginLeft: 20, width: '90%', color: 'white'}}
                  onChangeText={setTitle}
                />
                <TextInput
                  multiline={true}
                  placeholder='  Detail task'
                  placeholderTextColor={'#A9A9A9'}
                  style={{borderWidth: 0.2, borderColor:'gray', marginTop: 30, marginLeft: 20, paddingBottom: 100, width: '90%', color: 'white'}}
                  onChangeText={setDetail}
                />
                <TouchableOpacity style={{marginTop: 30, marginHorizontal: 50}}
                                  onPress={() => {
                                    dispatch({type: "ADD_TASK", title: title, detail: detail})
                                    setModalAddNote(!modalAddNote)
                                    }}>
                    <Text style={{textAlign: 'center', padding: 13, fontSize: 15, backgroundColor: '#FF9900', color: 'white', fontWeight: 'bold', 
                                borderRadius: 10}}>Add Task</Text>
                </TouchableOpacity>
              </View>

              </TouchableWithoutFeedback>
            </ScrollView>
                
            </View>
                <TouchableOpacity activeOpacity={1} style={{backgroundColor:'#000000aa',flex:1}} onPress={() => setModalAddNote(!modalAddNote)} />
      </Modal>
    </View>
  )
}

export default AddNote

const styles = StyleSheet.create({})