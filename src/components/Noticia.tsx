import { Image, StyleSheet, Text, View } from "react-native"

interface CardProps {
  titulo: string;
  corpo: string;
}

const Noticia: React.FC<CardProps> = ({titulo, corpo}) => {
return (
      <View style={styles.container}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.corpo}>{corpo}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FF8C42',
    padding: 20,
    borderRadius:10
  },
  titulo: {
    fontFamily: 'Orbitron-Bold',
    fontSize:14,
    textAlign:'center',
    marginBottom: 5,
  },
  corpo: {
    fontFamily: 'Lato-Regular',
    fontSize:14,
  }
}
)
export default Noticia