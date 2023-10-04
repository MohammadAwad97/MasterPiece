import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../Constant";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SettingsScreen = ({ navigation }) => {
  const handleLogOut = async () => {
    try {
      await AsyncStorage.clear();
      navigation.navigate("LogIn");
    } catch (err) {
      console.log("Error while applying logout", err);
    }
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.heading}>Investment</Text>
        <Text style={styles.glory}>Glory</Text>
      </View>
      <View style={styles.settingsContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("MainFilterScreen")}
        >
          <View style={styles.icons}>
            <FontAwesome name="home" size={30} color="white" />
            <Text style={styles.iconsText}>Home</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.underline}></View>
        <TouchableOpacity onPress={() => navigation.navigate("AboutUsScreen")}>
          <View style={styles.icons}>
            <FontAwesome name="newspaper-o" size={28} color="white" />
            <Text style={styles.iconsText}>About Us</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.underline}></View>
        <View style={styles.icons}>
          <Ionicons name="settings-outline" size={30} color="white" />
          <Text style={styles.iconsText}>Settings</Text>
        </View>
        <View style={styles.underline}></View>
        <View style={styles.icons}>
          <FontAwesome name="star" size={30} color="white" />
          <Text style={styles.iconsText}>Rate Us</Text>
        </View>
        <View style={styles.underline}></View>
        <TouchableOpacity onPress={handleLogOut}>
          <View style={styles.icons}>
            <FontAwesome name="home" size={30} color="white" />
            <Text style={styles.iconsText}>Log Out</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.underline}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.COLOR_PRIMARY,
  },
  heading: {
    fontSize: 42,
    fontWeight: "bold",
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  glory: {
    fontSize: 36,
    fontWeight: "bold",
    color: "gold",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  icons: {
    flexDirection: "row",
    paddingLeft: 20,
    alignItems: "center",
    color: "white",
    marginTop: 20,
  },
  iconsText: {
    marginLeft: 10,
    fontSize: 20,
    color: "white",
  },
  settingsContainer: {
    marginTop: 70,
  },
  underline: {
    borderBottomColor: "gold",
    borderBottomWidth: 1,
    width: "100%", // Make the line span the full width
    marginTop: 8, // Adjust this value to control the space between the text and the line
  },
});

export default SettingsScreen;
