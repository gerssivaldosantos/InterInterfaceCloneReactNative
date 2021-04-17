import {StyleSheet} from 'react-native'


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
        
        top:-8,
        left:135
    },

    balanceFooter:{
        top:0,
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

export default styles;