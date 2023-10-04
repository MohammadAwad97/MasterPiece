import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Feather, Ionicons, FontAwesome } from "@expo/vector-icons";

const Footer = ({ navigation }) => {
  return (
    <SafeAreaView style={{ alignSelf: "flex-end", width: "100%" }}>
      {/* Render header */}
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("MainFilterScreen")}
        >
          <FontAwesome
            style={styles.icons}
            name="home"
            size={24}
            color="black"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Ionicons
            style={styles.icons}
            name="person"
            size={24}
            color="black"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("Hello")}>
          <Feather
            style={styles.icons}
            name="settings"
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    backgroundColor: "rgb(250, 97, 100)",
    opacity: 0.9,
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 10,
    paddingTop: 10,
    borderRadius: 10,
  },
  icons: {
    fontSize: 35,
  },
});

export default Footer;
