import { Button, Text, TextInput, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
const DicaApos = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
        <ScrollView>
            <Text>Dicas para quando a energia retornar</Text>
            <Button title="Voltar" onPress={() => navigation.pop()} />
        </ScrollView>
    );
};
export default DicaApos;
