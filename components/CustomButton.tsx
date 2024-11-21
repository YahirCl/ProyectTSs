import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors';
import { ThemedText } from './ThemedText';

export default function CustomButton({text, onPress}: CustomButtonProps) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <ThemedText style={styles.textBtn}>{text}</ThemedText>
    </Pressable>
  )
}

//#2F70AF
//#02315E
//#add2f8

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#add2f8',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 10,
        shadowOffset: {height: 5, width: 5}
    },
    textBtn: {
        fontSize: 17,
        fontWeight: '400',
    }
});