import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { RootStackParamList } from '../types';
import BotaoPadrao from '../components/BotaoPadrao';

const Inicio = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ScrollView contentContainerStyle={styles.container}>
        <Image
            source={require('../assets/img/fundo.png')}
            style={styles.fundo}
        />
        <View style={styles.logoWrapper}>
            <Image
            source={require('../assets/img/logoSoltrix.png')}
            style={styles.logo}
            />
        </View>

        <View style={styles.bottomContainer}>
            <BotaoPadrao onPress={() => navigation.navigate("TelaLogin")} titulo='FAZER LOGIN'></BotaoPadrao>

            <View style={styles.containerlogin}>
                <Text style={styles.textLogin}>Não tem cadastro? </Text>
                <TouchableOpacity onPress={() => navigation.navigate("TelaCadastro")}>
                    <Text style={styles.textoCadastro}>Cadastre-se!</Text>
                </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#DADADA',
  },
  fundo: {
    width: '100%',
    height:'85%',
    borderBottomRightRadius: 90,
  },
  logoWrapper: {
    position: 'absolute',
    right: 0,
  },
  logo: {
    width: 150,
    height: 150,
  },
  bottomContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  loginButton: {
    backgroundColor: '#FF6B00',
    borderRadius: 30,
    paddingVertical: 14,
    paddingHorizontal: 50,
    marginBottom: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Orbitron-Bold',
  },
  containerlogin: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textLogin: {
    color: '#121212',
  },
  textoCadastro: {
    color: '#FF8C42',
  },
});

export default Inicio