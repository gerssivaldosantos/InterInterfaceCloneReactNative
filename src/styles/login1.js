import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    color: "gray",
  },
  titleContainer: {
    width: "100%",
    height: "39.5%",
    backgroundColor: "white",
    alignItems: "center",
  },
  inputContainer: {
    backgroundColor: "white",
    height: "60.5%",
    alignItems: "center",
  },
  titleInput: {
    position: "absolute",
    left: 30,
    top:15
  },
  input: {
    paddingLeft: 15,
    width: "90%",
    height: 50,
    borderRadius: 10,
    top: 40,
    position: "absolute",
    color: "#b8b9bd",
    backgroundColor: "#f5f6fa",
  },
  button: {
    borderRadius: 9,
    top: 125,
    backgroundColor: "#ff7a01",
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    height: 45,
  },
  buttonTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize:15
  },
  title: {
    color: "#ff7a01",
    fontSize: 40,
    fontWeight: "bold",
    position: "absolute",
    top: 90,
  },
  createAccountText: {
    color: "#ff7a01",
    top: 155,
    fontWeight: "bold",
  },
  needHelpText: {
    color: "#ff7a01",
    position:'absolute',
    bottom:50,
    fontWeight: "bold",
  },
});

export default styles;
