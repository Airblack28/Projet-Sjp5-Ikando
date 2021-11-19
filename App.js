import React, { useEffect, useState } from 'react';
// import 'localstorage-polyfill';
import { Button, FlatList, StyleSheet, Text,  TouchableOpacity, View, TextInput } from 'react-native';
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

  // function Supprimer(key){
  //   if(appui = true){
  //     const removeItem = todos.filter((todo) => {
  //       return todo.key !== key;
  //     });
  //     setTodos(removeItem);
  //   }
  // }

  
  const [text, setText] = useState('');
  const changeHandler = (val) => {
    setText(val);
  }

  const [selection, setSelect] = useState('');


  const Supprimer = (setSelect) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != setSelect);
    })
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
                  <TodoItem item={item} setSelect={setSelect} pressHandler={pressHandler} Supprimerhandler={Supprimerhandler}></TodoItem>
                )}
                >
              </FlatList>
            </View>
          </View>   
          {/*Zone de saisie*/}
          {/* <AddTodo envoyerHandler={envoyerHandler}></AddTodo> */}
          <View>
            <TextInput style={styles.input}
              placeholder='Entrer un mot'
              onChangeText={changeHandler}>
            </TextInput>
            <View style={{flexDirection:'row', flexWrap:'wrap'}}>
              <TouchableOpacity style={styles.button2} onPress={() => envoyerHandler(text)}>
                <Text style={styles.text}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button2} onPress={() => envoyerHandler(text)}>
                <Text style={styles.text}>M</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button2} onPress={() => Supprimer()}>
                <Text style={styles.text}>-</Text>
              </TouchableOpacity>
            </View>
          </View>
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
  },
  input: {
    width: 150,
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'black'
  },
    button2: {
      backgroundColor: 'coral',
      marginHorizontal: 5
    },
    text: {
      fontSize: 15,
      padding: 15,
      color: 'white'
    },
 });
 

