import { StyleSheet, TextInput, TextInputProps } from "react-native";

interface InputPadraoProps extends TextInputProps {
  placeholder: string;
  seguro?: boolean;
}

const InputPadrao: React.FC<InputPadraoProps> = ({ placeholder, seguro = false}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      secureTextEntry={seguro}
      placeholderTextColor="#aaa"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10,
    marginBottom: 30,
    fontSize: 16,
    borderBottomWidth: 2,
  },
});

export default InputPadrao;
