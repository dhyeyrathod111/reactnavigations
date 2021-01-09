import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Homescreens from './Homescreens';
import Detailscreen from './Detailscreen';
import ProfileScreen from './ProfileScreen'
import ExploreScreen from './ExploreScreen'

const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

function MainTabScreen() {
    return (
        <Tab.Navigator
            initialRouteName="Homescreen"
            activeColor="#fff"
        >
            <Tab.Screen
                name="Homescreen"
                component={HomeStackScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarColor: "#841584",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Details"
                component={DetailsStackScreen}
                options={{
                    tabBarLabel: 'Details',
                    tabBarColor: "#841584",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="bell" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarColor: "#841584",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Explore"
                component={ExploreScreen}
                options={{
                    tabBarLabel: 'Explore',
                    tabBarColor: "#841584",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="clipboard-file" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => {
    return (
        <HomeStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#841584'
            },
            headerTintColor: '#ffff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }}>
            <HomeStack.Screen name="Home" component={Homescreens} options={{
                title: "Overview",
                headerLeft: () => (
                    <Icon.Button name="ios-menu" size={25} backgroundColor="#841584"
                        onPress={() => navigation.openDrawer()}></Icon.Button>
                )
            }} />
        </HomeStack.Navigator>
    )
}

const DetailsStackScreen = ({ navigation }) => {
    return (
        <DetailStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#841584'
            },
            headerTintColor: '#ffff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }}>
            <DetailStack.Screen name="details" component={Detailscreen} options={{
                title: "Detailpage",
                headerLeft: () => (
                    <Icon.Button name="ios-menu" size={25} backgroundColor="#841584"
                        onPress={() => navigation.openDrawer()}></Icon.Button>
                )
            }} />
        </DetailStack.Navigator>
    )
}