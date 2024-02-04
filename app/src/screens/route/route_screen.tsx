import { NavigationContainer } from '@react-navigation/native';
import { MainScreen } from '@screens/main_screen'
import { useDI } from '@di/di';
import { MainViewModel } from '@screens/main_viewmodel';
import { Stack } from './route';
import { View, Text } from 'react-native';

export const RouteScreen = () => {
    const { namadaNetwork } = useDI();
    useEffect(() => {

    });
    return <>
        <NavigationContainer>
            <Stack.Navigator initialRouteName='main_screen'>
                <Stack.Screen
                    name='main_screen'
                    component={() => {
                        const { namadaNetwork } = useDI()
                        return MainScreen({ viewmodel: new MainViewModel(namadaNetwork) })
                    }}
                />

                <Stack.Screen name="import-wallet" component={() => <><View><Text>asdfasdf</Text></View></>} />
            </Stack.Navigator>
        </NavigationContainer>
    </>
}

function useEffect(arg0: () => void) {
    throw new Error('Function not implemented.');
}
