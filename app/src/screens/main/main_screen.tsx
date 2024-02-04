import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import SettingsScreen from '@screens/settings_screen';
import { useEffect } from 'react';
import { HomeScreen } from '@screens/home_screen';
import { MainViewModel } from './main_viewmodel';
import { HomeViewModel } from '@screens/home_viewmodel';
import { useDI } from '@di/di';

const Tab = createBottomTabNavigator();

interface Props {
    viewmodel: MainViewModel
}

export const MainScreen: React.FC<Props> = ({ viewmodel }) => {
    useEffect(() => {
        viewmodel.init()
    }, undefined);
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={() => {
                    const { namadaNetwork } = useDI()
                    return HomeScreen({ viewmodel: new HomeViewModel(namadaNetwork) })
                }} options={{ headerStyle: { backgroundColor: 'yellow' } }} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}