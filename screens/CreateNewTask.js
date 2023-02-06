import React from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "../globalStyle";
const CreateNewTask = () => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View>
        <View style={styles.formControl}>
          <Text style={styles.labelText}>Email</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter your email address"
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.labelText}>Email</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter your email address"
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.labelText}>Email</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter your email address"
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.labelText}>Email</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter your email address"
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 50,
//     marginHorizontal: 15,
//   },
//   formControl:{
//     marginVertical:10,
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
// });

export default CreateNewTask;
