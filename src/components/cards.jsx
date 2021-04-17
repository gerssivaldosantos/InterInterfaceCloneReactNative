import React from "react";
import { ScrollView, Text, TouchableOpacity, Image, View } from "react-native";
import styles from "../styles/cards";
export default function Cards() {
  return (
    <ScrollView horizontal={true} style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>É empreendedor MEI?</Text>
        <Image source={require("../assets/card1.png")} style={styles.cardImage} />
        <View style={styles.textButtonContainer}>
        <Text style={styles.cardText}>
          Conte também com os serviços gratuitos do Inter para seu negócio
        </Text>
        <TouchableOpacity 
        onPress={()=> alert("create MEI account")}
        style={styles.cardButton}>
          <Text style={styles.cardButtonText}>Abrir conta MEI</Text>
        </TouchableOpacity>
        </View>
      
      </View>


      <View style={styles.card}></View>
      <View style={styles.card}></View>
    </ScrollView>
  );
}
