import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const Home = () => {
  return (
    <ScrollView style={styles.containerImage}>
      <Image source={require('../assets/img/energia.png')} style={styles.topImage} />

      <View style={styles.container}>
        <Text style={styles.titulo}>Bem vindo, User!</Text>
        <Text style={styles.texto}>Vamos cuidar de sua energia juntos</Text>

        <View style={styles.noticias}>
            <Text style={styles.noticiaTitulo}>ATENÇÃO! ALERTA EM SUA REGIÃO!</Text>
            <Text style={styles.noticiaTexto}>
            No dia 04/06/2025 está previsto uma falta de energia devido a uma possível tempestade em sua região...
            </Text>
        </View>

        <View style={styles.icones}>
            {/* Aqui você pode criar botões individuais com ícones e texto */}
            <IconCard icon="headphones" label="Falar com Sol" />
            <IconCard icon="bar-chart" label="Previsão falta de energia" />
            <IconCard icon="alert-triangle" label="Alertar falta de energia" />
            <IconCard icon="info" label="Dicas" />
            <IconCard icon="activity" label="Cálculo de prejuízos" />
            <IconCard icon="clock" label="Tempo de interrupção" />
        </View>

        <View style={styles.noticias}>
            <Text style={styles.noticiaTitulo}>Dica da Sol</Text>
            <Text style={styles.noticiaTexto}>
            Oi, User! Sabia que desligar aparelhos em standby pode economizar até 12% da energia da sua casa?
            </Text>
        </View>
      </View>
      
    </ScrollView>
  );
}

function IconCard({ icon, label }: { icon: string; label: string }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>{label}</Text>
    </View>
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
  noticias: {
    backgroundColor: '#F97316',
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
  },
  noticiaTitulo: {
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  noticiaTexto: {
    color: '#000',
    fontSize: 13,
  },
  icones: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 14,
    marginVertical: 10,
  },
  card: {
    width: 100,
    height: 90,
    backgroundColor: '#0C1B2C',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  cardText: {
    color: '#F97316',
    fontSize: 11,
    textAlign: 'center',
    marginTop: 4,
  },
});


export default Home