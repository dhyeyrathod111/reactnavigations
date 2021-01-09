import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './screens/MainTabScreen';
import DrowerContent from './screens/DrowerContent';

const Drawer = createDrawerNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Drawer.Navigator drawerContent={props => <DrowerContent {...props} />}>
				<Drawer.Screen name="Home" component={MainTabScreen} />
				{/* <Drawer.Screen name="details" component={DetailsStackScreen} /> */}
			</Drawer.Navigator>
		</NavigationContainer>
	);
}

