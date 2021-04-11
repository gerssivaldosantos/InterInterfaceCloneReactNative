import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, TextInput, View, TouchableOpacity, Alert } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from "../styles/login1";
export default function Login({navigation}) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>inter</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.titleInput}>Qual sua conta?</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite a conta como digito"
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('Login2')}
          style={styles.button}
        >
          <Text style={styles.buttonTitle}>Continuar</Text>
        </TouchableOpacity>
        <Text style={styles.createAccountText}>Abra uma conta gratuitamente</Text>

    
          <Text style={styles.needHelpText}>Precisa de ajuda?</Text>
     
      </View>
    </View>
  );
}
