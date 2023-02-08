import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { getDatabase, update, ref, push, set, child } from "firebase/database";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "../globalStyle";
import { auth, db } from "../firebase/";

const EditTask = ({ route, navigation }) => {
  const { todo } = route.params;
  const [task, setTask] = useState(todo.title);
  const [openPriority, setOpenPriority] = useState(false);
  const [priorityValue, setPriorityValue] = useState(todo.priority);
  const [priorityItems, setPriorityItems] = useState([
    { label: "High", value: "High" },
    { label: "Medium", value: "Medium" },
    { label: "Low", value: "Low" },
  ]);
  const handleEditTaskData = () => {
    if (task.length > 2 && priorityValue?.length > 0) {
      const user = auth.currentUser;
      const todoRef = ref(db, "todos/" + user.uid + '/' + todo.id);
      todo.title = task;
      todo.priority = priorityValue;
      update(todoRef, todo)
        .then(() => {
          navigation.navigate("Home");
        })
        .catch((error) => {
          alert(error?.message);
        });
    }
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View>
        <View style={styles.formControl}>
          <Text style={styles.labelText}>Task Name</Text>
          <TextInput
            value={task}
            onChangeText={(text) => setTask(text)}
            style={styles.inputField}
            placeholder="Enter task name"
          />
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
        <TouchableOpacity onPress={handleEditTaskData} style={styles.button}>
          <Text style={styles.buttonText}>Save Task</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default EditTask;
