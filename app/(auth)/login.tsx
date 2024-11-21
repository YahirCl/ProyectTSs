import { View, Text , StyleSheet, Image, Button, Pressable} from 'react-native'
import React, { useState } from 'react'
import Inputs from '@/components/authComponents/Inputs';
import { ThemedText } from '@/components/ThemedText';
import CustomButton from '@/components/CustomButton';
import { router } from 'expo-router';

export default function login() {
    

  const [formInfo, setFormInfo] = useState<FormInfo>({password: '', email: ''})
  
  return (
    <View style={styles.container}>
        {/* Imagen agregada aquí */}
        <Image
            source={require('../../assets/images/logo1.png')} // Reemplaza con la ruta de tu imagen
            style={styles.logo}
        />
        <View style={styles.innerContainer}>

            <ThemedText type='subtitle'>Or</ThemedText>
            
            <Inputs
                placeholder="Correo"
                value={formInfo.email}
                onChangeText={(text) => setFormInfo({...formInfo, email: text})}
            />
            {/* {errorUsuario ? <Text style={styles.errorText}>{errorUsuario}</Text> : null} */}

            <Inputs                                                                 
                placeholder="Contraseña"
                value={formInfo.password}
                secureTextEntry
                onChangeText={(text) => setFormInfo({...formInfo, password: text})}
            />

            <CustomButton text='Iniciar Sesion'/>
            
            <Pressable onPress={() => router.navigate('/(auth)/register')} style={{marginTop: 20}}>
                <ThemedText  type='link' style={{fontWeight: '600'}}>No tienes cuenta? Regístrate.</ThemedText>
            </Pressable>
            {/* {errorContrasena ? <Text style={styles.errorText}>{errorContrasena}</Text> : null} */}

          
        </View>
    </View>
);
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
  },
  logo: {
      width: 400, // Ajusta el tamaño según tus necesidades
      height: 400,
      marginBottom: 10,
  },
  title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
  },
  innerContainer: {
      width: '50%',
      alignItems: 'center',
  },
  errorText: {
      color: 'red',
      fontSize: 12,
      marginBottom: 10,
  },
});