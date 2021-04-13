import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
   
    contentStyle:{
        alignItems:'center',
        backgroundColor:'#12121202',
        height:'100%'
     
    },
    header:{
        paddingTop:40,
        backgroundColor:'#ff7a01',
        width:"100%",
        height:190
    },
    colapse1:{
        position:'absolute',
       borderRadius:12,
        top:150,
        left:20,
        width:120,
        height:120,
        backgroundColor:"#ffff",
        alignItems:'center',
        justifyContent:'flex-end',
        paddingBottom:10
        
    },
    colapse2:{
        position:'absolute',
       borderRadius:12,
        top:150,
        width:120,
        height:120,
        backgroundColor:"#ffff",
        alignItems:'center',
        justifyContent:'flex-end',
        paddingBottom:10
        
    },
    colapse3:{
        position:'absolute',
       borderRadius:12,
        top:150,
        right:20,
        width:120,
        height:120,
        backgroundColor:"#ffff",
        alignItems:'center',
        justifyContent:'flex-end',
        paddingBottom:10
        
    }
})

export default styles;