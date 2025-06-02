import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import Home from '../screens/TelaHome';
import Dicas from '../screens/TelaDicas';
import Chat from '../screens/TelaChat';
import Config from '../screens/TelaConfig';

const Tab = createBottomTabNavigator();

const Tabs =() => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#0C1B2C',
          borderTopColor: '#0C1B2C',
          height: 60,
        },
        tabBarActiveTintColor: '#F97316',
        tabBarInactiveTintColor: '#fff',
      }}
    >
      <Tab.Screen
        name="TelaHome"
        component={Home}
        options={{
            tabBarIcon: () => (
            <Image
                source={require('../assets/img/home.png')}
                style={{
                width: 30,
                height: 30,
                }}
            />
            ),
            tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name="TelaDicas"
        component={Dicas}
        options={{
            tabBarIcon: () => (
            <Image
                source={require('../assets/img/hints.png')}
                style={{
                width: 30,
                height: 30,
                }}
            />
            ),
            tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name="TelaChat"
        component={Chat}
        options={{
            tabBarIcon: () => (
            <Image
                source={require('../assets/img/chat.png')}
                style={{
                width: 30,
                height: 30,
                }}
            />
            ),
            tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name="TelaConfig"
        component={Config}
        options={{
            tabBarIcon: () => (
            <Image
                source={require('../assets/img/setting.png')}
                style={{
                width: 30,
                height: 30, 
                }}
            />
            ),
            tabBarLabel: '',
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs