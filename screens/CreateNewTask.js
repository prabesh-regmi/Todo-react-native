import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { getDatabase, ref, push, set,child } from "firebase/database";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "../globalStyle";
import {auth, db} from "../firebase/";


const CreateNewTask = ({route, navigation}) => {
  const [task, setTask] = useState('');
  const [openPriority, setOpenPriority] = useState(false);
  const [priorityValue, setPriorityValue] = useState(null);
  const [priorityItems, setPriorityItems] = useState([
    {label: 'High', value: 'High'},
    {label: 'Medium', value: 'Medium'},
    {label: 'Low', value: 'Low'}
  ]);
  const handleAddTaskData = ()=>{
    if(task.length>2 && priorityValue?.length>0){
      const user =auth.currentUser
      const newTodoRef = push(ref(db, 'todos/' + user.uid));
      const newTodo = {
        id:newTodoRef.key,
        title:task,
        priority:priorityValue,
        completed:false,
        createdBy: user.email,
        createdAt: `${new Date()}`
      };

      set(newTodoRef, newTodo).then(()=>{
        navigation.navigate("Home");
      }).catch((error) => {
        alert(error?.message)
      });

    }
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">

      <View>
        <View style={styles.formControl}>
          <Text style={styles.labelText}>Task Name</Text>
          <TextInput
          value={task} onChangeText={(text) => setTask(text)}
          style={styles.inputField}
           placeholder="Enter task name" />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.labelText}>Priority</Text>
          <DropDownPicker
          style={styles.inputField}
            open={openPriority}
            value={priorityValue}
            items={priorityItems}
            setOpen={setOpenPriority}
            setValue={setPriorityValue}
            setItems={setPriorityItems}
          />
        </View>
        <TouchableOpacity 
        onPress={handleAddTaskData}
        style={styles.button}>
          <Text style={styles.buttonText}>Add Task</Text>
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
