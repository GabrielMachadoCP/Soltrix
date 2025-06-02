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
  Dimensions,
} from 'react-native';
import { RootStackParamList } from '../types';

const { width } = Dimensions.get('window');

export default function TelaLogin() {
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
            <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate("TelaHome")}>
            <Text style={styles.loginButtonText}>FAZER LOGIN</Text>
            </TouchableOpacity>

            <View style={styles.signupContainer}>
                <Text style={styles.signupText}>Não tem cadastro? </Text>
                <TouchableOpacity onPress={() => navigation.navigate("TelaHome")}>
                    <Text style={styles.signupLink}>Cadastre-se!</Text>
                </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  fundo: {
    width: width,
    height:'85%',
    borderBottomRightRadius: 90,
  },
  logoWrapper: {
    position: 'absolute',
    top: 0,
    right: 0,
    alignItems: 'center',
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
    backgroundColor: '#ff8000',
    borderRadius: 30,
    paddingVertical: 14,
    paddingHorizontal: 50,
    marginBottom: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Orbitron-Regular',
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signupText: {
    color: '#000000',
  },
  signupLink: {
    color: '#ff8000',
    fontWeight: 'bold',
  },
});
