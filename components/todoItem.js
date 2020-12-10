import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function TodoItem({item, pressHandler}) {
	
	return (
		<TouchableOpacity>
			<View style={styles.item}>
					<AntDesign name="delete" size={20} color="black" onPress={() => pressHandler(item.key)} />
					<Text style={styles.itemText}>{item.text}</Text>
			</View>
		</TouchableOpacity>
	)
}


const styles = StyleSheet.create({
	item: {
		flexDirection: 'row',
		alignItems: 'space-betwee',
		padding: 16,
		marginTop: 16,
		marginLeft: 20,
		marginRight: 20,
		borderColor: '#bbb',
		borderWidth: 1,
		borderRadius: 10
	},
	
	itemText: {
		marginLeft: 20
	}
})
