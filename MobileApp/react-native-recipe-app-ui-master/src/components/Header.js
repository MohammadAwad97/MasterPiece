import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const Header = ({ headerText, headerIcon, navigation }) => {
  return (
    <View style={{ flexDirection: "row", marginTop: 30 }}>
      <Text style={{ flex: 1, fontSize: 22, fontWeight: "700" }}>
        {headerText}
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate("SettingsScreen")}>
        <FontAwesome name={headerIcon} size={24} color="#f96163" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
