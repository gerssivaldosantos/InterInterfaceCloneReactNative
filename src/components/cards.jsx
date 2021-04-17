import React from "react";
import { ScrollView, Text, TouchableOpacity, Image, View } from "react-native";
import styles from "../styles/cards";
export default function Cards() {
  return (
    <ScrollView horizontal={true} style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>É empreendedor MEI?</Text>
        <Image />
        <Text>
          Conte também com os serviços gratuitos do Inter para seu negócio
        </Text>
        <TouchableOpacity>
          <Text>Abrir conta MEI</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.card}></View>
      <View style={styles.card}></View>
    </ScrollView>
  );
}
