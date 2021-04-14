import React from "react";
import { Text, View, TouchableOpacity } from "react-native";


export default function Accout(props) {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "flex-end",
        borderRadius: 5,
        position: "absolute",
        bottom: 15,
        width: "90%",
        height: 70,
        borderStyle: "solid",
        borderColor: "#75757575",
        borderWidth: 1,
      }}
    >
        <TouchableOpacity
        onPress={()=>alert("Trocar a conta")}>

        <Text style={{
          fontWeight:'bold',
          color: "#ff7a01",
          right:15}}> Trocar a conta</Text>

        </TouchableOpacity>
     
      <Text
        style={{
          position: "absolute",
          left: 15,
          bottom: 36,
        }}
      >
        Conta
      </Text>
      <Text
        style={{
          position: "absolute",
          left: 15,
          bottom: 13,
          fontWeight: "bold",
        }}
      >
        {props.number}
      </Text>
    </View>
  );
}
