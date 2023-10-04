import { ImageComponent, StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import RecipeListScreen from "../screens/RecipeListScreen";
import RecipeDetailsScreen from "../screens/RecipeDetailsScreen";
import Login from "../screens/Login";
import Registration from "../screens/Registration";
import footer from "../components/Footer";
import Profile from "../screens/Profile";
import Settings from "../screens/Settings";
import SettingsScreen from "../screens/SettingsScreen";
import FilterStorsProducts from "../screens/FilterStorsProducts";
import MainFilterScreen from "../screens/MainFilterScreen";
import AboutUsScreen from "../screens/AboutUsScreen";
const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="RecipeList" component={RecipeListScreen} />
        <Stack.Screen name="RecipeDetail" component={RecipeDetailsScreen} />
        <Stack.Screen name="LogIn" component={Login} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen name="MainFilterScreen" component={MainFilterScreen} />
        <Stack.Screen name="AboutUsScreen" component={AboutUsScreen} />
        <Stack.Screen
          name="FilterStorsProducts"
          component={FilterStorsProducts}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
