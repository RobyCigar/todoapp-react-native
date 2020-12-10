import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Sandbox() {
	return (
		<View style={styles.container}>
			<Text style={styles.boxOne}>one</Text>
			<Text style={styles.boxTwo}>two</Text>
			<Text style={styles.boxThree}>three</Text>
			<Text style={styles.boxFour}>four</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		//flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		backgroundColor: '#444'
	},
	
	boxOne: {
		backgroundColor: 'gold',
		padding: 30
	},
	
	boxTwo: {
		backgroundColor: 'red',
		padding: 30
	},
	
	boxThree: {
		backgroundColor: 'blue',
		padding: 30
	},
	
	boxFour: {
		backgroundColor: 'violet',
		padding: 30
	}
})

















