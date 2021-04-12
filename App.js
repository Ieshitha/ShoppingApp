import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
// import {fontAwesome} from "@fortawesome/fontawesome-free";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import LoginScreen from './src/views/login/LogIn';
import ShoppingListScreen from './src/views/shoppingList/ShoppingList';
import Layout from './src/layouts/layout';
import GroupListScreen from './src/views/groupList/groupList';
import ProductListScreen from './src/views/products/products';
const Stack = createStackNavigator();

export default function App() {
  return (
   
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login" headerMode={false}>
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="shoppingList" component={ShoppingListScreen} />
        {/* <Stack.Screen name="layouts" component={Layout} /> */}
        <Stack.Screen name="groupList" component={GroupListScreen} />
        <Stack.Screen name="products" component={ProductListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

