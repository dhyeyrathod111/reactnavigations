import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const DetailsCreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text>This is details screen</Text>
		</View>
	)
};

export default DetailsCreen ;


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
