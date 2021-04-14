import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
export default function Header(props){
   
        return (
        <View style={styles.header}>
        <Text style={styles.accountTitle}>Saldo em conta</Text>
        <Text style={styles.balanceTitle}>R$</Text>
        <Text style={styles.balance}>{props.ishidden?"00,0":"...."}</Text>
        <TouchableOpacity 
        style={styles.balanceIcon}
        onPress={()=> props.setishidden(!props.ishidden) }>
        <Ionicons 
        name={props.ishidden?"ios-eye-outline":"ios-eye-off-outline"}
        size={27}
        color={"#ffffff"}
        />
        </TouchableOpacity>
       <Text style={styles.balanceFooter}>Atualizado neste momento</Text>

        <View style={styles.accountIcon}><Text style={styles.accountIconTitle}>GO</Text>
        </View>
    </View>
 
        )
    }


const styles = StyleSheet.create({

    header:{
        flexDirection:'column',
        paddingTop:40,
        backgroundColor:'#ff7a01',
        width:"100%",
        height:190
    },
    accountTitle:{
        position:'absolute',
        fontSize:13,
        color:"#ffffff80",
        fontWeight:'bold',
        top:45,
        left:20
    },
    balanceTitle:{
        position:'absolute',
        color:"#ffffff90",
        fontSize:25,
        top:65,
        left:20,
        fontWeight:'bold'
    },
    balance:{
   
        color:"#ffffff",
        top:25,
        left:60,
        fontSize:25,
        fontWeight:'bold'
    },
    balanceIcon:{
        
        top:0,
        left:120
    },

    balanceFooter:{
        top:65,
        color:"#ffffff80",
        left:20
    },
    accountIcon:{
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        right:20,
        top:50,
        width:50,
        height:50,
        backgroundColor:'#ffffff',
        borderRadius:50

    },
    accountIconTitle:{
        color:"#ff7a01",
        fontSize:23,
        fontWeight:'bold'
            
    }, 
})
