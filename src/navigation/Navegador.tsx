import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Tabs from './BottomTabs';
import Inicio from '../screens/TelaInicial';
import Login from '../screens/TelaLogin';
import Cadastro from '../screens/TelaCadastro';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TelaInicial" component={Inicio} />
        <Stack.Screen name="TelaLogin" component={Login} />
        <Stack.Screen name="TelaCadastro" component={Cadastro} />
        <Stack.Screen name="TelaHome" component={Tabs}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator