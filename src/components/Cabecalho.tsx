import { Image, StyleSheet, View } from "react-native"

const Cabecalho = () => {
return (
      <View style={styles.topSection}>
        <Image source={require('../assets/img/logoSoltrix.png')} style={styles.logo}/>
      </View>
    );
}

const styles = StyleSheet.create({
  topSection: {
    alignItems: 'center',
    backgroundColor: '#0C1B2C',
    paddingTop: 30,
    paddingBottom: 10,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
}
)
export default Cabecalho