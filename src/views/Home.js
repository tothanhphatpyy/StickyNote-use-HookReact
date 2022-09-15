import { Image, StyleSheet, Text, TouchableOpacity, View, Dimensions, ScrollView, TouchableHighlight} from 'react-native'
import React, { useContext, useRef, useState } from 'react'
import { rootContext } from '../context-hook/RootContext';
import AddNote from './modal/AddNote';
import OptionNote from './modal/OptionNote';
import UpdateNote from './modal/UpdateNote';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const Home = ({ navigation}) => {

  const {state, darkMode} = useContext(rootContext);
  const listNote = state;
  
  const [modalOption, setModalOption] = useState(false);
  const [modalAddNote, setModalAddNote] = useState(false);
  const [modalUpdateNote, setModalUpdateNote] = useState(false);
  const [valueIndex, setValueIndex] = useState(null);

  return (
    <View style={{flex: 1, backgroundColor: darkMode? '#202020' : '#F5F5F5'}}>
      <ScrollView>
      <View style={{flexDirection: 'row', marginTop: 30, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold', color: 'orange'}}>
          Sticky Note
        </Text>
      <TouchableOpacity 
        style={{ position: 'absolute', right: 20}}
        onPress={()=> navigation.navigate('Setting')}
      >
        <Image
          source={{uri : 'https://i.imgur.com/qbrMDIL.png'}}
          style={{resizeMode: 'contain', height: 25, width: 25, tintColor: darkMode? 'white' : 'black'}}
        />
      </TouchableOpacity>
      </View>

      <View style={{marginTop: 20}}>
        {listNote.map((item, index) => 
            <TouchableHighlight key={index}
                  style={{marginTop: 20, marginHorizontal: 15, height: 150, borderWidth: 0.5, borderColor: 'gray', borderRadius: 5}}
                  onPress={() => setModalOption(false)}>
              <View style={{marginTop: 5}}>
              <View style={{flexDirection: 'row'}}>
                <Text numberOfLines={1} style={{marginTop: 10, marginLeft: 10, fontSize: 17, fontWeight: 'bold', color: darkMode? 'white' : 'black'}}>
                  {item.title}
                </Text>
                <TouchableOpacity 
                  style={{ position: 'absolute', right: 0, padding: 10, top: -10}}
                  onPress= {() => {
                    setValueIndex(index)
                    setModalOption(!modalOption)
                  }}>
                  <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>...</Text>
                </TouchableOpacity>
                {index == valueIndex &&  modalOption?
                  <OptionNote setModalUpdateNote={setModalUpdateNote} setModalOption={setModalOption} valueIndex={valueIndex} />
                  : 
                  null
                }
              </View>
              <Text numberOfLines={2} style={{marginTop: 5, marginHorizontal: 15, fontSize: 15, color: darkMode? 'white' : 'black'}}>
                {item.detail}
              </Text>
              </View>
          </TouchableHighlight>
        )}
      </View>

      {modalAddNote && <AddNote modalAddNote={modalAddNote} setModalAddNote={setModalAddNote} />}
      {modalUpdateNote && <UpdateNote modalUpdateNote={modalUpdateNote} setModalUpdateNote={setModalUpdateNote} valueIndex={valueIndex}/>}
      
      <View style={{ height: 200}}></View>
    </ScrollView>

      <TouchableOpacity style={{ alignItems: 'center', marginTop: 10, position: 'absolute', top: windowHeight- 150, left: windowWidth/2 - 15 }}
                        onPress={() => { setModalAddNote(!modalAddNote) }}>
                       
        <Text style={{fontSize: 35, fontWeight: '400', borderRadius: 20,
                    backgroundColor: 'orange', color: 'white', paddingHorizontal: 15}}
        >+</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})