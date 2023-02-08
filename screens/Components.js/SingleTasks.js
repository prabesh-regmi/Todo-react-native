import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import Checkbox from 'expo-checkbox';
import {auth, db} from "../../firebase";
import { getDatabase,remove, update, ref, push, set, onValue } from "firebase/database";

export const SingleTasks = (props) => {
    const todo = props.data.item;
    const priority = todo.priority;
    const [isCompleted, setCompleted] = useState(todo.completed);
    const handleCheckBoxClick = ()=>{
      const user = auth.currentUser;
      const todoRef = ref(db, "todos/" + user.uid + '/' + todo.id);
      console.log("Heool",todoRef)
      
      todo.completed = !todo.completed;
      update(todoRef, todo).then(()=>setCompleted(prev => !prev))
        .catch((error) => {
          alert(error?.message);
        });
    }
  return (
    <View key={props.data.index} style={styles.container}>
    <TouchableOpacity
    onPress={()=>props.handleEditPress(props.data.item)}
     style={[styles.singleTask,isCompleted&&styles.completed]}>
      <View style={styles.checkboxAndTask}>
        <Checkbox
          value={isCompleted}
          onValueChange={handleCheckBoxClick}
          style={styles.checkbox}
        />
        <Text style={[styles.taskText,isCompleted&&{color:"#ffffff"}]}>{props.data.item.title}</Text>
        </View>
        <Text style={[styles.taskPriority,priority=='High'?styles.high:priority=='Low'?styles.low:styles.medium]}>{props.data.item.priority}</Text>
    </TouchableOpacity>
    <TouchableOpacity
    onPress={()=>props.handleDelete(props.data.item.id)}
    style={styles.deleteIcon} >
        <Icon name="trash" size={24} color="#500"  />
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
container:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
},
  singleTask: {
    flex:10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginVertical:10,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:"#ffffff",
    borderRadius:10
  },
  deleteIcon:{
    flex:1,
    marginLeft:5
  },
  checkboxAndTask:{
    flexDirection:'row',
    flex:5
  },
  taskText:{
    fontFamily:'Roboto',
    fontWeight:'600',
    fontSize:16,
    color:"#333333",
    marginLeft:5
  },
  taskPriority:{
    paddingVertical:10,
    paddingHorizontal:20,
    borderRadius:10,
    fontSize:12
  },
  high:{
    backgroundColor:'#F4D1F0',
    color:'#EB5757'
  },
  medium:{
    backgroundColor:'#35B3CA',
    color:'#fff'
  },
  low:{
    backgroundColor:'#B7CB3C',
    color:'#fff'
  },
  checkbox: {
    alignSelf: 'center',
  },
  completed:{
    backgroundColor:"#219653",
    opacity:0.5
  },
});