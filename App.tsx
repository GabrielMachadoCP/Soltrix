import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Inicio from './src/screens/TelaInicial';
import Home from './src/screens/TelaHome';
import Login from './src/screens/TelaLogin';
import Cadastro from './src/screens/TelaCadastro';
import AppNavigator from './src/navigation/Navegador';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <AppNavigator/>
  );
}


export default App;
