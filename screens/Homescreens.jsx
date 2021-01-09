import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Homescreens = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>This is home screen</Text>
            <Button
                onPress={() => navigation.navigate('details')}
                title="Go to details screen"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    )
};

export default Homescreens;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
