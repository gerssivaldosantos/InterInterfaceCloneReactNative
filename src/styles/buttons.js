import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    //backgroundColor:'black',
    height: 135,
    alignItems: "center",
    width: "100%",
  },
  colapseIcon:{
    height:80,
    width:80,
    marginBottom:3
  },
  colapse1: {
    position: "absolute",
    borderRadius: 12,
    top: -40,
    left: 20,
    width: 120,
    height: 120,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.84,

    elevation: 0.5,
  },
  colapse2: {
    position: "absolute",
    borderRadius: 12,
    top: -40,
    width: 120,
    height: 120,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.84,

    elevation: 0.5,
  },
  colapse3: {
    position: "absolute",
    borderRadius: 12,
    top: -40,
    right: 20,
    width: 120,
    height: 120,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.84,

    elevation: 0.5,
  },
  arrowButton: {
    top: 97,
  },
  arrowButtonIcon: {},
});

export default styles;
