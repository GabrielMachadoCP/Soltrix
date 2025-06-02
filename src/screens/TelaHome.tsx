import { Button, Text, TextInput, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
const Home = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
        <ScrollView>
            <Text>User</Text>
            <TextInput placeholder="email" keyboardType="email-address" />
            <Text>Password</Text>
            <TextInput placeholder="password" secureTextEntry={true} />
            <Button title="Voltar" onPress={() => navigation.navigate("TelaInicial")} />
        </ScrollView>
    );
};
export default Home;
