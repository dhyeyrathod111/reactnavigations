import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function ProfileScreen() {
    return (
        <View style={styles.container}>
			<Text>This is Profile screen</Text>
		</View>
    )
}

export default ProfileScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
