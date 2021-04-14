import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";
import { Text, Image, View, ScrollView, TouchableOpacity } from "react-native";
import styles from "../styles/home";
import Header from '../components/header';
import Cards from "../components/cards";

export default function Home({ route }) {
    const [ishidden, setishidden] = useState(false)
  return (
    <ScrollView contentContainerStyle={styles.contentStyle} style={styles.container}>
        <StatusBar 
        style={"light"} 
        hidden={false} 
        translucent={true}
        backgroundColor="#12121280" />
        
        <Header ishidden={ishidden} setishidden={setishidden} />
        <Cards/>
       
    </ScrollView>
  );
}
