import {
  StyleSheet,
  StatusBar,
} from 'react-native';export default StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal:15,
    paddingTop: StatusBar.currentHeight,
    backgroundColor:'#F8F8F8'
  },
  heading: {
    marginTop: 35,
    fontFamily: "Roboto",
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 28,
    color: "#333333",
  },
  welcomeText: {
    marginBottom: 45,
    marginTop: 15,
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 24,
    color: "#828282",
  },
  formControl: {
    marginVertical: 10,
  },
  labelText: {
    fontFamily: "Roboto",
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 15,
    color: "#333333",
    marginVertical: 5,
  },
  inputField: {
    fontFamily: "Roboto",
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#E0E0E0",
    marginVertical: 5,
  },
  button: {
    width: "100%",
    padding: 15,
    backgroundColor: "#BE263B",
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    fontFamily: "Roboto",
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
  notRegisterText: {
    fontFamily: "Roboto",
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  createAccountText: {
    fontFamily: "Roboto",
    color: "#BE263B",
    fontWeight: "700",
  },
});
