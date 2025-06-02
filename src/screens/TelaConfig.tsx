import { Button, Text, TextInput, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
const Config = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
        <ScrollView>
            <Text>Config</Text>
            <Button title="Voltar" onPress={() => navigation.navigate("TelaHome")} />
        </ScrollView>
    );
};
export default Config;
