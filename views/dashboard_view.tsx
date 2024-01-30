import { Query, Sdk } from '@namada/shared';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function DashboardView() {
    useEffect(() => {
        const sdk = new Sdk('Test');
        const query = new Query('Test');
    });
    return (
        <View style={styles.container}>
            <Text>Test</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});