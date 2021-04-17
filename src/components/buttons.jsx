import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import styles from "../styles/buttons.js";
import { MaterialIcons } from "@expo/vector-icons";

export default function Buttons() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.colapse1}>
        <Image
          style={styles.colapseIcon}
          source={require("../assets/transfer.png")}
        />
        <Text style={{ color: "#808080", fontSize: 12 }}>Transferência</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.colapse2}>
      <Image
          style={styles.colapseIcon}
          source={require("../assets/pix.png")}
        />
        <Text style={{ color: "#808080", fontSize: 12 }}>Pix</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.colapse3}>
      <Image
          style={styles.colapseIcon}
          source={require("../assets/invest.png")}
        />
        <Text style={{ color: "#808080", fontSize: 12 }}>Investimentos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.arrowButton}
        onPress={() => alert("The function will make")}
      >
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
