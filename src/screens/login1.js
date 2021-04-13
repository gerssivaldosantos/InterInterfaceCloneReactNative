import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import { Text, TextInput, View, TouchableOpacity, Alert } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from "../styles/login1";
export default function Login({navigation}) {
const [accountNumber, setaccountNumber] = useState(false)
  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>inter</Text>
      </View>
    
      <View style={styles.inputContainer}>
        <Text style={styles.titleInput}>Qual sua conta?</Text>
        <TextInput
        keyboardType="numeric"
          style={styles.input}
          placeholder="Digite a conta como digito"
          onChangeText={(number)=> setaccountNumber(number)}
          selectionColor="#ff7a01"
        />
        <TouchableOpacity
          onPress={() => 
            accountNumber?navigation.navigate('Login2',{accountNumber:accountNumber}):null}
          style={styles.button}
        >
          <Text style={styles.buttonTitle}>Continuar</Text>
        </TouchableOpacity>
        <Text style={styles.createAccountText}>Abra uma conta gratuita</Text>

    
          <Text style={styles.needHelpText}>Precisa de ajuda?</Text>
     
      </View>
    </View>
  );
}
