import { Button, Text, TextInput, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
const Dicas = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
        <ScrollView>
            <Text>Dicas</Text>
            <Button title="Voltar" onPress={() => navigation.navigate("TelaHome")} />
        </ScrollView>
    );
};
export default Dicas;
