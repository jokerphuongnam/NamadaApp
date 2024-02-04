import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ImportWalletDashboardView } from './import_wallet_dashboard_view';
import { iNamadaNetwork } from '../../data/network/namada_network';
import { HomeViewModel } from './home_viewmodel';

interface Props {
    viewmodel: HomeViewModel
}

export const HomeScreen: React.FC<Props> = ({ viewmodel }) => {
    const [isLogined, setLogin] = useState(false);
    return (
        <SafeAreaView>
            <StatusBar animated={true} style="dark" />
            {isLogined ? (
                <View>
                    <Text>Logined</Text>
                </View>
            ) : (<View>
                <ImportWalletDashboardView/>
            </View>)}

        </SafeAreaView>
    );
}