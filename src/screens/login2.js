import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, TextInput, View, TouchableOpacity, Alert } from "react-native";
import styles from "../styles/login2";
import Account from '../components/account'
export default function Login2({route, navigation}) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>inter</Text>
      </View>
      <View style={styles.accountContainer}>

      <Account number={route.params?.accountNumber} />

      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.titleInput}>Senha</Text>
        <TextInput 
        style={styles.input} 
        placeholder="Senha"
        selectionColor="#ff7a01" />
        <TouchableOpacity
          onPress={() => navigation.navigate("Home", {accountNumber: route.params?.accountNumber}) }
          style={styles.button}
        >
          <Text style={styles.buttonTitle}>Entrar</Text>
        </TouchableOpacity>
        <Text style={styles.forgotPassword}>Esqueci minha senha</Text>

        <Text style={styles.needHelpText}>Precisa de ajuda?</Text>
      </View>
    </View>
  );
}
