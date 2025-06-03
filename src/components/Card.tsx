import React from 'react';
import { Image, StyleSheet, Text, View, ImageSourcePropType, Touchable, TouchableOpacity } from 'react-native';

interface CardProps {
  titulo: string;
  source: ImageSourcePropType;
  onPress?: () => void
}

const Card: React.FC<CardProps> = ({ titulo, source, onPress }) => {
  return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={source} style={styles.logo} />
            <Text style={styles.texto}>{titulo}</Text>
        </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#0B1E36',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 10,
    width: 120, 
    marginVertical: 10,
  },
  logo: {
    width: 40,
    height: 40,
    marginBottom: 8,
    resizeMode: 'contain',
  },
  texto: {
    color: '#FF6B00',
    fontFamily: 'Lato-Bold',
    fontSize: 15,
    textAlign: 'center',
  },
});

export default Card;
