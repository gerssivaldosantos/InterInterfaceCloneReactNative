import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    color: "white",
  },
  titleContainer: {
    width: "100%",
    height: "33.5%",
    backgroundColor:'white',
    alignItems: "center",
  },
  inputContainer: {
    alignItems: "center",
    width: "100%",
    flex: 1,
    backgroundColor:'white'
  },
  accountContainer: {
    height: "10.5%",
    alignItems:'center',
    backgroundColor:'white'
  },
  titleInput: {
    position: "absolute",
    left: 20,
    top: 10,
  },
  input: {
    paddingLeft: 15,
    width: "90%",
    height: 50,
    borderRadius: 10,
    top: 40,
    position: "absolute",
    color: "#121212",
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
    fontSize: 15,
  },
  title: {
    color: "#ff7a01",
    fontSize: 40,
    fontWeight: "bold",
    position: "absolute",
    top: 90,
  },
  forgotPassword: {
    color: "#ff7a01",
    top: 145,
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
