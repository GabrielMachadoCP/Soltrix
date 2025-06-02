import React, { useState } from 'react';
import { View, Text, TextInput, Image, Switch, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Cabecalho from '../components/Cabecalho';
import BotaoPadrao from '../components/BotaoPadrao';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import InputPadrao from '../components/Inputpadrao';

const Login = () => {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [lembrarLogin, setLembrarLogin] = useState(false);
    
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ScrollView style={styles.container}>
      
      <Cabecalho/>

      <View style={styles.loginBox}>
        <Text style={styles.titulo}>Bem-vindo(a) de volta!</Text>
        <Text style={styles.texto}>Faça o login para acessar sua conta.</Text>

        <InputPadrao
          placeholder="Número do CPF"
          keyboardType="numeric"
          value={cpf}
          onChangeText={setCpf}
        />
        <InputPadrao
          placeholder="Senha"
          seguro={true}
          value={senha}
          onChangeText={setSenha}
        />

        <View style={styles.switchContainer}>
          <Text>Lembrar login</Text>
          <Switch
            value={lembrarLogin}
            onValueChange={setLembrarLogin}
            trackColor={{ false: '#999', true: '#F97316' }}
            thumbColor={lembrarLogin ? '#0C1B2C' : '#fff'}
          />
        </View>

        <BotaoPadrao titulo='LOGIN' onPress={() => navigation.navigate("TelaHome")}></BotaoPadrao>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DADADA',
  },
  loginBox: {
    flex: 1,
    padding: 28,
    borderTopWidth:5,
    borderColor: '#FF8C42', 
  },
  titulo: {
    fontSize: 24,
    marginBottom: 10,
    color: '#121212',
    textAlign: 'center',
    fontFamily: 'Lato-Bold'
  },
  texto: {
    fontSize: 18,
    marginBottom: 34,
    color: '#121212',
    textAlign: 'center',
    fontFamily: 'Lato-Regular'
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
});

export default Login;