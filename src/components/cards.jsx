import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import styles from "../styles/cards.js";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function Cards() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.colapse1}>
        <Text style={{ color: "#808080" }}>Transferência</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.colapse2}>
        <Text style={{ color: "#808080" }}>Pix</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.colapse3}>
        <Text style={{ color: "#808080" }}>Investimentos</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style={styles.arrowButton}
      onPress={()=> alert("The function will make")}>
        <MaterialIcons
          name="keyboard-arrow-down"
          size={50}
          style={styles.arrowButtonIcon}
          color={"#ff7a01"}
        />
      </TouchableOpacity>

    </View>
  );
}
