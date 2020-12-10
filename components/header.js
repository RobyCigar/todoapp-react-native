import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
	return (
		<View style={styles.header}>
			<Text style={styles.title}>Todos App</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	header: {
		height: 80,
		backgroundColor: 'coral'
	},
	
	title: {
		padding: 30,
		textAlign: 'center',
		color: '#fff',
		fontWeight: 'bold'
	}
})
