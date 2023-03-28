import React, { useState, useEffect } from 'react'
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard, Button } from 'react-native'
import Header from './components/Header'
import TodoItem from './components/TodoItem'
import AppTodo from './components/AppTodo'
import { request, PERMISSIONS, RESULTS, check } from "react-native-permissions"


const App = () => {
  
  const accessPermission = () => {
    request(PERMISSIONS.ANDROID.SEND_SMS).then((response) => console.log(response))
  }

  check(PERMISSIONS.ANDROID.SEND_SMS)
    .then((result) => {
      switch (result) {
        case RESULTS.UNAVAILABLE:
          console.log('This feature is not available (on this device / in this context)');
          break;
        case RESULTS.DENIED:
          console.log('The permission has not been requested / is denied but requestable');
          break;
        case RESULTS.LIMITED:
          console.log('The permission is limited: some actions are possible');
          break;
        case RESULTS.GRANTED:
          console.log('The permission is granted');
          break;
        case RESULTS.BLOCKED:
          console.log('The permission is denied and not requestable anymore');
          break;
      }
    })

  const [todos, setTodos] = useState("")

  useEffect(() => {
    accessPermission()
  }, [])

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo => todo.key !== key))
    })
  }

  const submitHandler = (text) => {
    if (!text) {
      Alert.alert("Oops!", "TextInput cannot Be Empty", [
        { text: "Understood", onPress: () => console.log("alert closed") }
      ])
    } else {
      setTodos((prevTodos) => {
        return [
          { text, key: Math.random().toString() },
          ...prevTodos,
        ]
      })
    }
  }


  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()
    }}>
      <View style={style.container}>
        <Header />
        <View style={style.content}>
          <AppTodo submitHandler={submitHandler} />
          <View style={style.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const style = StyleSheet.create({
  container: {
    margin: 0,
    padding: 0,
    flex: 1
  },
  content: {
    marginTop: 25,
    flex: 1,
  },
  list: {
    flex: 1,
    marginBottom: 10
  }
})


export default App