import { Button, Text, TextInput, ScrollView, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import Cabecalho from "../components/Cabecalho";
import InputPadrao from "../components/Inputpadrao";
import { useState } from "react";
import BotaoPadrao from "../components/BotaoPadrao";
const Cadastro = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const [cpf, setCpf] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cep, setCep] = useState('');
    const [senha, setSenha] = useState('');

    return (
        <ScrollView>
            <Cabecalho/>
            <View style={styles.container}>
                <Text style={styles.titulo}>Bem-vindo(a)!</Text>
                <Text style={styles.texto}>Crie sua conta para realizar seu login</Text>

                <InputPadrao
                placeholder="Número do CPF"
                keyboardType="numeric"
                value={cpf}
                onChangeText={setCpf}
                />
                <InputPadrao
                placeholder="Nome Completo"
                value={nome}
                onChangeText={setNome}
                />
                <InputPadrao
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                />
                <InputPadrao
                placeholder="CEP"
                value={cep}
                onChangeText={setCep}
                />
                <InputPadrao
                placeholder="Senha"
                seguro={true}
                value={senha}
                onChangeText={setSenha}
                />

                <BotaoPadrao titulo="Cadastrar" onPress={() => navigation.navigate("TelaInicial")}></BotaoPadrao>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 28,
    borderTopWidth:5,
    borderColor: '#FF8C42', 
  },
  titulo:{
    fontFamily: 'Lato-Bold',
    fontWeight:'bold',
    textAlign: 'center',
    fontSize: 25,
    paddingBottom:10
  },
  texto:{
    fontFamily: 'Lato-Regular',
    textAlign: 'center',
    fontSize: 18,
    paddingBottom:30
  }
})
export default Cadastro;
