import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from "react-native";

interface BotaoImagemProps {
  onPress: () => void;
  source: ImageSourcePropType;
  title?: string;
  tamanhoBotao?: ViewStyle;
  exibirFiltro?: boolean;
}

const BotaoImagem: React.FC<BotaoImagemProps> = ({ onPress, source, title, tamanhoBotao, exibirFiltro }) => {
  return (
    <TouchableOpacity style={[styles.botaoBase, tamanhoBotao]} onPress={onPress}>
      <Image source={source} style={styles.imagem} />
      {exibirFiltro && <View style={styles.filtro} />}
      {title && <Text style={styles.titulo}>{title}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  botaoBase: {
    width: 40,
    height: 40,
    marginVertical: 10,
    borderRadius: 10,
  },
  imagem: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  filtro: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(229, 110, 24, 0.38)',
  },
  titulo: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    color: 'white',
    fontSize: 14,
    fontFamily: 'Orbitron-Bold',
  },
});

export default BotaoImagem;
