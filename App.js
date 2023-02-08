import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import CreateNewTask from "./screens/CreateNewTask";
import { Home } from "./screens/Home";
// import Toast from './screens/Toast';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EditTask from "./screens/EditTask";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    // <Signup/>
    // <Login/>
    // <Toast/>
    // <CreateNewTask/>
    // <Home/>

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Signup"
          component={Signup}
        />
        <Stack.Screen 
        name="CreateNewTask" 
        component={CreateNewTask}
        options={{ title: 'Create New Task' }}
        />
        <Stack.Screen 
        name="EditTask" 
        component={EditTask}
        options={{ title: 'Edit Task' }}
        />
        {/* <Stack.Screen name="CreateNewTask" component={CreateNewTask} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
