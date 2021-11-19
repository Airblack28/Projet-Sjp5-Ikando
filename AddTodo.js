import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity} from 'react-native';

export default function AddTodo({envoyerHandler}) {

  const [text, setText] = useState('');

  const changeHandler = (val) => {
    setText(val);
  }

  return(

    <View>
      <TextInput style={styles.input}
        placeholder='Entrer un mot'
        onChangeText={changeHandler}>
      </TextInput>
      <View style={{flexDirection:'row', flexWrap:'wrap'}}>
        <TouchableOpacity style={styles.button} onPress={() => envoyerHandler(text)}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => submitHandler(text)}>
          <Text style={styles.text}>M</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => submitHandler(text)}>
          <Text style={styles.text}>-</Text>
        </TouchableOpacity>
      </View>
    </View>

  ); 
}

const styles = StyleSheet.create({
    input: {
        width: 150,
        marginTop: 20,
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    },
    button: {
      backgroundColor: 'coral',
      marginHorizontal: 5
  },
  text: {
      fontSize: 15,
      padding: 15,
      color: 'white'
  },
 });