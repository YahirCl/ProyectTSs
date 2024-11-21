import { View, Text, TextInput, StyleSheet} from 'react-native'
import React from 'react'

type Props = {
    secureTextEntry?: boolean;
    placeholder?: string;
    value?: string;
    onChangeText?: (text: string) => void;
    error?: boolean;
}

export default function Inputs({value, secureTextEntry, placeholder, error, onChangeText}: Props) {
  return (
    <View style={styles.container}>
        <TextInput
            style={[styles.input, {borderColor: error ? 'red' : 'black'}]}
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            value={value} // Aquí pasamos el valor del input
            onChangeText={onChangeText} // Aquí pasamos la función para manejar el cambio de texto
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '40%',
        marginBottom : 12,
    },
    input: {
        height: 40,
        borderWidth: 3,
        borderRadius : 5,
        marginBottom: 10,
        paddingHorizontal: 10,
        width: '100%',
    },
});