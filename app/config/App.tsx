import { diContainer } from '@di/container';
import { DIProvider } from '@di/di';
import { RouteScreen } from '@screens/route_screen';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const container = diContainer();
  return (
    <DIProvider container={container}>
      <RouteScreen/>
    </DIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
