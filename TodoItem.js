import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button } from 'react-native';

export default function TodoItem({item, pressHandler, Supprimerhandler, handleEditClick, todo, setSelect}) {



  return(

    <View>
        <TouchableOpacity style={styles.button} 
        // onPress={() => pressHandler(item.key)}
        onPress={() => {setSelect(item.key)}}
        >
          <Text style={styles.text}>{item.text}</Text>
        </TouchableOpacity>
        <Button onPress={() => handleEditClick(todo)} title='M' color='coral'></Button>
        <Button onPress={() => Supprimerhandler(item.key)} title='-' color='coral'></Button> 
    </View>
      

  ); 
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 2,
        marginTop: 10,
        
    },
    text: {
        fontSize: 15,
        padding: 15,
    },
 });