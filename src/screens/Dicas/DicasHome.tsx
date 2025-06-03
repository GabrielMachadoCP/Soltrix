import { Button, Text, TextInput, ScrollView, TouchableOpacity, Image, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import BotaoImagem from "../../components/BotaoImagem";
import Noticia from "../../components/Noticia";
const Dicas = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
        <ScrollView style={styles.container}>
            <BotaoImagem 
            source={require('../../assets/img/left-chevron.png')} 
            onPress={() => navigation.navigate('TelaHome')}/>

            <Text style={styles.titulo}>Dicas para a falta de energia.</Text>
            <Text style={styles.texto}>Selecione a opção que mais faz sentido no momento para você:</Text>
            
            <BotaoImagem 
            source={require('../../assets/img/preparo.png')}  
            title="Antes da falta de energia" 
            onPress={() => navigation.navigate("DicaPreparo")} 
            tamanhoBotao={styles.botaoDica}
            exibirFiltro={true}/>

            <BotaoImagem 
            source={require('../../assets/img/durante.png')}  
            title="Durante a falta de energia" 
            onPress={() => navigation.navigate("DicaDurante")} 
            tamanhoBotao={styles.botaoDica}
            exibirFiltro={true}/>

             <BotaoImagem 
            source={require('../../assets/img/apos.png')}  
            title="Após a volta de energia" 
            onPress={() => navigation.navigate("DicaApos")} 
            tamanhoBotao={styles.botaoDica}
            exibirFiltro={true}/>

            <Text style={styles.texto}>Ps: compartilhe com quem você ama! Informação salva vidas!</Text>
            <View style={styles.containerNoticias}>
                <Noticia titulo="Dicas da Sol" 
                corpo="Evite usar velas. Dê preferência ao uso de lanternas recarregáveis;
                Não ligue todos os eletrodomésticos ao mesmo tempo após a energia voltar! Evite sobrecarga;
                Tenha sempre disponível power banks para manter o celular carregado;
                Desligue ou desconecte aparelhos sensíveis como TVs, PCs e micro-ondas;
                Tenha uma lista de contatos de emergência salva"></Noticia>
            </View>
            
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#DADADA',
    },
    titulo:{
        fontFamily:'Orbitron-Bold',
        textAlign:'center',
        fontSize:18
    },
    texto:{
        fontFamily:'Lato-Regular',
        textAlign:'center',
        fontSize:14,
        padding: 15
    },
    botaoDica: {
        width: '100%',
        height:'25%'
    },
    containerNoticias:{
        paddingHorizontal:20
    }
})
export default Dicas;
