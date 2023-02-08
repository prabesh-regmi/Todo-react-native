import { useState, React,useEffect } from "react";
import { getAuth, signOut, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
// import { auth } from "../firebase";
import styles from "../globalStyle";
import {auth} from '../firebase'
const Signup = ({navigation}) => {
  useEffect(() => {
    if (auth.currentUser){
      signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
        alert(error.message)
      });
    }
  }, [])
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');

  
  const handleSignup = ()=>{
    createUserWithEmailAndPassword(auth,email,password1)
    .then(userCredentials =>{
      navigation.reset({
        index: 0,
        routes: [{name: 'Login'}],
      });
      
    })
    .catch(error=>alert(error.message));
  }
  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     // User is signed in, see docs for a list of available properties
  //     // https://firebase.google.com/docs/reference/js/firebase.User
  //     const uid = user.uid;
  //     // ...
  //   } else {
  //     // User is signed out
  //     // ...
  //   }
  // });
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.heading}>Create an account</Text>
      <Text style={styles.welcomeText}>
        Welcome ! Create an account to get started with TODO APP{" "}
      </Text>
      <View style={styles.formControl}>
        <Text style={styles.labelText}>Email</Text>
        <TextInput
          style={styles.inputField}
          placeholder="Enter your email address"
          value={email}
          onChangeText={text => setEmail(text)}
        />
      </View>
      <View style={styles.formControl}>
        <Text style={styles.labelText}>Password</Text>
        <TextInput
          style={styles.inputField}
          secureTextEntry
          placeholder="Enter your password"
          value={password1}
          onChangeText={text => setPassword1(text)}
        />
      </View>
      <View style={styles.formControl}>
        <Text style={styles.labelText}>Confirm Password</Text>
        <TextInput
          style={styles.inputField}
          secureTextEntry
          placeholder="Enter your password"
          value={password2}
          onChangeText={text => setPassword2(text)}
        />
      </View>
      <TouchableOpacity
      style={styles.button}
      onPress={handleSignup}
      >
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
      <View style={styles.notRegisterText}>
        <Text>Already have an account?</Text>
        <TouchableOpacity
        onPress={()=>navigation.navigate("Login")}
         style={styles.name}>
          <Text style={styles.createAccountText}> Login</Text>
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

export default Signup;
