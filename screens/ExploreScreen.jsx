import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function ExploreScreen({ navigation }) {
    return (
        <View style={styles.container}>
			<Text>This is Explore screen</Text>
		</View>
    )
}

export default ExploreScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});