import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"

interface BotaoPadraoProps {
  titulo: string;
  onPress: () => void
}

const BotaoPadrao: React.FC<BotaoPadraoProps> = ({ titulo, onPress}) => {
  return (
    <TouchableOpacity style={[styles.botao]} onPress={onPress}>
      <Text style={styles.texto}>{titulo}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#FF6B00',
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 99,
    alignItems: 'center',
    margin: 6,
  },
  texto: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Orbitron-Bold',
  },
});
export default BotaoPadrao