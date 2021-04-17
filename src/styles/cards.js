import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    height: 100,
    width: "100%",
  },
  card: {
    marginLeft: 15,
    backgroundColor: "#ffffff",
    height: 220,
    width: 360,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.84,

    elevation: 0.5,
  },
  cardTitle:{
      marginTop:15,
      marginLeft:20,
      fontWeight:'bold',
      fontSize:20
  },
  cardImage:{
    height:150,
    width:150,
    left:10,
    top:3
  },
  textButtonContainer:{
    position:'absolute',
    height:155,
    width:170,
    backgroundColor:'white',
    bottom:0,
    right:20
  },
  cardText:{
    color:'#757575',
  },
  cardButton:{
    borderRadius:9,
    width:130,
    top:15,
    padding:10,
    backgroundColor:'orange'
  },
  cardButtonText:{
    color:"#ffff",
    fontWeight:'bold'
  }
});

export default styles;
