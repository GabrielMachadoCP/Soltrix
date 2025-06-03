import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Tabs from './BottomTabs';
import Inicio from '../screens/TelaInicial';
import Login from '../screens/TelaLogin';
import Cadastro from '../screens/TelaCadastro';
import DicaPreparo from '../screens/Dicas/DicaPreparo';
import DicaDurante from '../screens/Dicas/DicaDurante';
import DicaApos from '../screens/Dicas/DicaApos';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TelaInicial" component={Inicio} />
        <Stack.Screen name="TelaLogin" component={Login} />
        <Stack.Screen name="TelaCadastro" component={Cadastro} />
        <Stack.Screen name="TelaHome" component={Tabs}/>
        <Stack.Screen name="DicaPreparo" component={DicaPreparo}/>
        <Stack.Screen name="DicaDurante" component={DicaDurante}/>
        <Stack.Screen name="DicaApos" component={DicaApos}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator