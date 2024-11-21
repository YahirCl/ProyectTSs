import { View, Text, Image, Pressable, StyleSheet} from 'react-native'
import React, { useState } from 'react'
import Inputs from '@/components/authComponents/Inputs';
import { ThemedText } from '@/components/ThemedText';
import CustomButton from '@/components/CustomButton';
import { router } from 'expo-router';

export default function register() {

  const [formInfo, setFormInfo] = useState<FormInfo>({name: '', email: '', password: '', repeatPassword: ''})
  const [error, setError] = useState(false);
  
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
          placeholder="Nombre"
          value={formInfo.name}
          onChangeText={(text) => setFormInfo({...formInfo, name: text})}
          error={error}
        />

        <Inputs                                                                 
          placeholder="Correo"
          value={formInfo.email}
          onChangeText={(text) => setFormInfo({...formInfo, email: text})}
          error={error}
        />

        <Inputs                                                                 
          placeholder="Contraseña"
          value={formInfo.password}
          secureTextEntry
          onChangeText={(text) => setFormInfo({...formInfo, password: text})}
          error={error}
        />

        <Inputs                                                                 
          placeholder="Repetir contraseña"
          value={formInfo.repeatPassword}
          secureTextEntry
          onChangeText={(text) => setFormInfo({...formInfo, repeatPassword: text})}
          error={error}
        />
        
        <CustomButton text='Registrarse' onPress={() => setError(true)}/>

        <Pressable onPress={() => router.back()} style={{marginTop: 20}}>
          <ThemedText  type='link' style={{fontWeight: '600'}}>Ya cuentas con una cuenta? Inicia sesión.</ThemedText>
        </Pressable>
        

       
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