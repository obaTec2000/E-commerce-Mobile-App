import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProductsList } from "./screens/ProductsList";

const Stack = createNativeStackNavigator();

function App() {
  return (
     <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Products" component={ProductsList} />
         
        </Stack.Navigator>
      </NavigationContainer>
   )
}

const styles = StyleSheet.create({
  Container: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  }
})

export default App;