import React, { useState } from 'react';

import { StyleSheet,
				 Text,
				 View, 
				 FlatList, 
				 SafeAreaView, 
				 TouchableOpacity, 
				 Alert, 
				 TouchableWithoutFeedback,
				 Keyboard 
				 } from 'react-native';
				 
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';
import Sandbox from './components/sandbox';


export default function App() {
  const [todos, setTodos] = useState([
  	{text: 'buy coffe', key: '1'},
  	{text: 'coding', key: '2'},
  	{text: 'college', key: '3'},
  ])
  
  const pressHandler = (key) => {
  	setTodos((prevTodos) => {
  		return prevTodos.filter((todo) => todo.key != key)
  	})
  }
  
  const submitHandler = (text) => {

		if(text.length > 3) {
  	setTodos(prevTodos => {
  		return [
  			{text: text, key: Math.random().toString()},
  			...prevTodos
  		]
  	})			
		} else {Alert.alert('input salah', 'todos must be over 3 chars long', [
			{text: 'understood', onPress: () => console.log('alert closed')}
		])}
  }
  
  return (
			<View style={styles.container}>
				<Header />
				<View style={styles.content}>
					<AddTodo submitHandler={submitHandler} />
					<View style={styles.list}>
						<FlatList 
							data={todos}
							renderItem={({item}) => {
								return (
									<TodoItem item={item} pressHandler={pressHandler} />
								)
							}}
						/>
					</View>
				</View>
			</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa'
  },
  
  content: {
  	backgroundColor: 'white',
  	flex: 1
  },
  
  list: {
  	marginHorizontal: 20,
  	flex: 1,
  	marginTop: 10
  }
});








