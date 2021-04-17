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
  }
});

export default styles;
