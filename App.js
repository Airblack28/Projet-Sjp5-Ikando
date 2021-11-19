import React, { useEffect, useState } from 'react';
// import 'localstorage-polyfill';
import { Button, FlatList, Image, Platform, StyleSheet, Text,  TouchableOpacity, View } from 'react-native';
import AddTodo from './AddTodo';
import AddTodo2 from './AddTodo2';
import Header from './Header';
import TodoItem from './TodoItem';
import TodoItem2 from './TodoItem2';


export default function App() {

  const [todos, setTodos] = useState([
    { text: 'Texte1', key:'1'},
  ]);
  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    })
  }
  const envoyerHandler = (text) => {
    setTodos((prevTodos) => {
      return [
        { text: text, key: Math.random().toString()},
        ...prevTodos
      ]
    })
  }
  function Supprimerhandler(key) {
    const removeItem = todos.filter((todo) => {
      return todo.key !== key;
    });
    setTodos(removeItem);
  }



  const [todos2, setTodos2] = useState([
    { text: 'Texte1', key:'1'},
  ]);
  const pressHandler2 = (key) => {
    setTodos2((prevTodos2) => {
      return prevTodos2.filter(todo2 => todo2.key != key);
    })
  }
  const envoyerHandler2 = (text2) => {
    setTodos2((prevTodos2) => {
      return [
        { text: text2, key: Math.random().toString()},
        ...prevTodos2
      ]
    })
  }
  function Supprimerhandler2(key) {
    const removeItem = todos.filter((todo) => {
      return todo.key !== key;
    });
    setTodos2(removeItem);
  }

  
  



  return(

    <View style={styles.container}>

      {/*Titre du projet*/}
      <Header></Header>

      <View style={{flexDirection:'row', flexWrap:'wrap', justifyContent:'center', alignItems:'center'}}>
        
        <View style={{flexDirection:'column', flexWrap:'wrap'}}>
          <View style={styles.content}>
          {/*Affichage des elements*/}
            <View style={styles.list}>
              <FlatList 
                data={todos} 
                renderItem={({item})=>(
                  <TodoItem item={item} pressHandler={pressHandler} Supprimerhandler={Supprimerhandler}></TodoItem>
                )}
                >
              </FlatList>
            </View>
          </View>   
          {/*Zone de saisie*/}
          <AddTodo envoyerHandler={envoyerHandler}></AddTodo>
        </View>
      
     

        <View style={styles.container3}> 
          <TouchableOpacity onPress={() => alert('Hello, world!')} style={styles.button}>
            <Text style={styles.buttonText}>{'>>'}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('Hello, world!')} style={styles.button}>
            <Text style={styles.buttonText}>{'<<'}</Text>
          </TouchableOpacity>
        </View>



        <View style={{flexDirection:'column', flexWrap:'wrap'}}>
          <View style={styles.content}>
          {/*Affichage des elements*/}
            <View style={styles.list}>
              <FlatList 
                data={todos2} 
                renderItem={({item})=>(
                  <TodoItem2 item={item} pressHandler2={pressHandler2} Supprimerhandler2={Supprimerhandler2}></TodoItem2>
                )}
                >
              </FlatList>
            </View>
          </View>   
          {/*Zone de saisie*/}
          <AddTodo2 envoyerHandler2={envoyerHandler2}></AddTodo2>
        </View>
      

    </View>


    </View>

  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    width: 150,
    height: 400,
    borderWidth: 2,
    borderColor: 'black',
    padding: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  list: {
    
  },
  container3: {
    width: 70,
    height:300,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  button:{
    width:50,
    height:50,
    marginTop:20,
    alignItems: 'center',
    borderColor:'black',
    padding: 10,
    borderWidth:2,
  }
 });
 

