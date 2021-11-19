import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
 

  return(

    <View style={styles.header}>
      <Text style={styles.title}>Projet SJP5 - Ikando</Text>
    </View>

  ); 
}

const styles = StyleSheet.create({
    header: {
        height:80,
        width: 260,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        borderBottomWidth: 2,
        borderBottomColor: 'coral',
        borderTopWidth: 2,
        borderTopColor: 'coral'
    },
    title: {
        fontSize: 25,
        color: 'coral',
        alignItems: 'center',
    },
 });