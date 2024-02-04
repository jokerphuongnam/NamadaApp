import { Button, View } from "react-native"
import { useNavigation } from '@react-navigation/native';


export const ImportWalletDashboardView = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Button
                onPress={() => {
                    
                }}
                title="Import Wallet"
            />
        </View>
    )
}