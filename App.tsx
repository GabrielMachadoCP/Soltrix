import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Inicio from './src/screens/TelaInicial';
import Home from './src/screens/TelaHome';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TelaInicial" component={Inicio} options={{ headerShown: false }} />
        <Stack.Screen name="TelaHome" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
