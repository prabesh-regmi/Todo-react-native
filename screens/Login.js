import React from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import globalStyles from "../globalStyle";
const Login = () => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.heading}>Login to your account</Text>
      <Text style={styles.welcomeText}>
        Welcome back! Enter your email address and password to login.
      </Text>
      <View style={styles.formControl}>
        <Text style={styles.labelText}>Email</Text>
        <TextInput
          style={styles.inputField}
          placeholder="Enter your email address"
        />
      </View>
      <View style={styles.formControl}>
        <Text style={styles.labelText}>Password</Text>
        <TextInput
          style={styles.inputField}
          secureTextEntry
          placeholder="Enter your password"
        />
      </View>
      <Text style={styles.forgetPasswordText}>Forget password ?</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.notRegisterText}>
        <Text>Not registered yet?</Text>
        <TouchableOpacity style={styles.name}>
          <Text style={styles.createAccountText}> Create an account</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};
const styles ={...globalStyles,
    forgetPasswordText: {
        fontFamily: "Roboto",
        color: "#BE263B",
        fontWeight: "700",
        marginBottom: 20,
      },
}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 50,
//     marginHorizontal: 15,
//   },
//   heading: {
//     marginTop: 35,
//     fontFamily: "Roboto",
//     fontWeight: "700",
//     fontSize: 24,
//     lineHeight: 28,
//     color: "#333333",
//   },
//   welcomeText: {
//     marginBottom: 45,
//     marginTop: 15,
//     fontFamily: "Roboto",
//     fontWeight: "400",
//     fontSize: 14,
//     lineHeight: 24,
//     color: "#828282",
//   },
//   formControl: {
//     marginVertical: 10,
//   },
//   labelText: {
//     fontFamily: "Roboto",
//     fontWeight: "700",
//     fontSize: 14,
//     lineHeight: 15,
//     color: "#333333",
//     marginVertical: 5,
//   },
//   inputField: {
//     fontFamily: "Roboto",
//     padding: 10,
//     borderWidth: 2,
//     borderRadius: 10,
//     borderColor: "#E0E0E0",
//     marginVertical: 5,
//   },
//   forgetPasswordText: {
//     fontFamily: "Roboto",
//     color: "#BE263B",
//     fontWeight: "700",
//     marginBottom: 20,
//   },
//   button: {
//     width: "100%",
//     padding: 15,
//     backgroundColor: "#BE263B",
//     borderRadius: 10,
//     alignItems: "center",
//     marginVertical: 10,
//   },
//   buttonText: {
//     fontFamily: "Roboto",
//     color: "#fff",
//     fontWeight: "700",
//     fontSize: 16,
//   },
//   notRegisterText: {
//     fontFamily: "Roboto",
//     marginVertical: 10,
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   createAccountText: {
//     fontFamily: "Roboto",
//     color: "#BE263B",
//     fontWeight: "700",
//   },
// });

export default Login;
