import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, Image, View, ScrollView, TouchableOpacity } from "react-native";
import styles from "../styles/home";
import { Ionicons } from "@expo/vector-icons";
export default function Home({ route }) {
  return (
    <ScrollView contentContainerStyle={styles.contentStyle} style={styles.container}>
        <StatusBar 
        style={"light"} 
        hidden={false} 
        translucent={true}
        backgroundColor="#12121280" />
          
        <View style={styles.header}>
            <Text style={styles.accountTitle}>Saldo em conta</Text>
            <Text style={styles.balanceTitle}>R$</Text>
            <Text style={styles.balance}>0,00</Text>
            <Ionicons name="ios-eye-outline" size={50} />
           
        </View>
     
        <TouchableOpacity style={styles.colapse1}>
            <Text style={{color:"#808080"}}>Transferência</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.colapse2}>
            <Text style={{color:"#808080"}}>Pix</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.colapse3}>
            <Text style={{color:"#808080"}}>Investimentos</Text>
        </TouchableOpacity>
      
        
    </ScrollView>
  );
}
