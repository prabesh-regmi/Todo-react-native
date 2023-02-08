import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { getDatabase, orderByChild, query, remove, ref, push, set, onValue } from "firebase/database";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import { Navbar } from "./Components.js/Navbar";
import globalStyles from "../globalStyle";
import { SingleTasks } from "./Components.js/SingleTasks";
import {auth, db} from "../firebase/";
export const Home = ({navigation}) => {
  const [user,setUser] = useState(null);
  useEffect(() => {
    if (!auth.currentUser){
      navigation.navigate("Login");
    }
    else{
      setUser(auth.currentUser);
      // const todoRef = ref(db, 'todos/' + auth.currentUser.uid);
      // const queryRef = query(ref, orderByChild('created_at'));
      const todoRef = query(ref(db, 'todos/' + auth.currentUser.uid), orderByChild('createdAt'));
      onValue(todoRef, (snapshot) => {
      const todo =[];
      snapshot.forEach((childSnapshot) => {
        todo.push(childSnapshot.val());
      });
      setTodos(todo.reverse());
});
    }
  }, []);
  const [todos, setTodos] = useState([]);
  const handleDelete = (id)=>{
    const todoRef = ref(db, 'todos/' + auth.currentUser.uid + '/' + id);
    remove(todoRef);
    setTodos((prev)=>{
        return prev.filter(todo=> todo.id!=id)
      })
  };
  const handleEditPress = (data)=>{
    navigation.push("EditTask",{todo:data})
  }
  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
        <FlatList
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <>
              <View>
                <Text style={styles.heading}>27 December 2023</Text>
                <Text style={styles.welcomeText}>
                  Keep up the pace to accomplish your task in time!
                </Text>
              </View>
              <View>
                <Text style={styles.heading}>Todos</Text>
              </View>
            </>
          }
          data={todos}
          renderItem={(item) => <SingleTasks handleDelete={handleDelete} handleEditPress={handleEditPress} data={item} />}
        />
      <TouchableOpacity 
      onPress={()=>navigation.push("CreateNewTask")}
      style={styles.addTaskIcon}>
        <Icon name="plussquareo" size={46} color="#434343" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  ...globalStyles,
  scrollView: {
    backgroundColor: "#F8F8F8",
    marginHorizontal: 20,
  },
  heading: {
    marginTop: 10,
    fontFamily: "Roboto",
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 28,
    color: "#333333",
  },
  welcomeText: {
    marginBottom: 15,
    marginTop: 15,
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 24,
    color: "#828282",
  },
  addTaskIcon: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    backgroundColor:'#ffffff'
  },
});
