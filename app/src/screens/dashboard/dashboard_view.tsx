import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '@screens/home_screen';
import SettingsScreen from '@screens/settings_screen';

const Tab = createBottomTabNavigator();

export default () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={()=> HomeScreen()} />
                <Tab.Screen name="Profile" component={() => SettingsScreen()} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}