import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Card from '../components/Card';
import Noticia from '../components/Noticia';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

const Home = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ScrollView style={styles.containerImage}>
      <Image source={require('../assets/img/energia.png')} style={styles.topImage} />

      <View style={styles.container}>
        <Text style={styles.titulo}>Bem vindo, User!</Text>
        <Text style={styles.texto}>Vamos cuidar de sua energia juntos</Text>

        <Noticia titulo='ATENÇÃO! ALERTA EM SUA REGIÃO!' 
        corpo={'No dia 04/06/2025 está previsto uma falta de energia devido a uma possível tempestade em sua região. '+ 
        'Importante ressaltar de evitar sair de casa nesse dia e se proteja, prepare suas lanternas e evite sobrecarga na volta de energia!'}/>

        <View style={styles.containerCards}>
            <Card titulo='Falar com Sol' source={require('../assets/img/customer-support.png')}/>
            <Card titulo='Previsão falta de energia' source={require('../assets/img/forecasting.png')}/>
            <Card titulo='Alertar falta de energia' source={require('../assets/img/warning.png')}/>
            <Card titulo='Dicas' source={require('../assets/img/hints.png')} onPress={() => navigation.navigate("DicasHome")}/>
            <Card titulo='Cálculo de prejuízos' source={require('../assets/img/accounting.png')}/>
            <Card titulo='Tempo de interrupção' source={require('../assets/img/time-left.png')}/>
        </View>
        

        <Noticia titulo='Dica da Sol' 
        corpo='Oi, User! Sabia que desligar aparelhos em standby pode economizar até 12% da energia da sua casa?'/>
      </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    containerImage: {
    backgroundColor: '#DADADA',
  },
  container: {
    backgroundColor: '#DADADA',
    height:'100%',
    margin:10
  },
  topImage: {
    width: '100%',
    height: 180,
    resizeMode: 'stretch',
  },
  titulo: {
    fontSize: 18,
    fontFamily: 'Orbitron-Bold',
    marginBottom: 4,
  },
  texto: {
    fontSize: 14,
    marginBottom: 12,
  },
  containerCards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  }
});


export default Home