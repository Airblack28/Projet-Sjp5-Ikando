import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button } from 'react-native';

export default function TodoItem2({item, pressHandler, Supprimerhandler2, handleEditClick, todo}) {



  return(

    <View>
        <TouchableOpacity style={styles.button} 
        // onPress={() => pressHandler(item.key)}
        >
          <Text style={styles.text}>{item.text}</Text>
        </TouchableOpacity>
        <Button onPress={() => handleEditClick(todo)} title='M' color='coral'></Button>
        <Button onPress={() => Supprimerhandler2(item.key)} title='-' color='coral'></Button> 
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