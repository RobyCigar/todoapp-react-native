import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function AddTodo({submitHandler}) {
	const [text, setText] = useState('')
	const changeHandler = (val) => {
		setText(val)
	}

	return (
		<View>
			<TextInput
				style={styles.input}
				placeholder='new todo...'
				onChangeText={changeHandler}
			/>
			<View style={styles.btn}>
				<Button onPress={() => submitHandler(text)} title='Add' color='coral' />			
			</View>
		</View>	
	)
}	


const styles = StyleSheet.create({
	input: {
		marginBottom: 10,
		marginTop: 20,
		marginLeft: 30,
		marginRight: 30,
		borderBottomWidth: 1,
		borderBottomColor: '#ddd'
	},
	
	btn: {
		marginBottom: 10,
		marginTop: 20,
		marginLeft: 30,
		marginRight: 30,
		borderRadius: 10
	}
	
})
