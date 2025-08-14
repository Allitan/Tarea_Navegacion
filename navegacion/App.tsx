import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BottonTabNavegacion from './Componentes/BottonTabNavegacion';
import ProviderTarea from './Providers/ProviderTarea';

export default function App() {
  return (
    <ProviderTarea>
      <BottonTabNavegacion></BottonTabNavegacion>
    </ProviderTarea>
      
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
