import { Button, Text, TextInput, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
const DicaPreparo = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
        <ScrollView>
            <Text>Dicas para se preparar para a falta de energia</Text>
            <Button title="Voltar" onPress={() => navigation.pop()} />
        </ScrollView>
    );
};
export default DicaPreparo;
