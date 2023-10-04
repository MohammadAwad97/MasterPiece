import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  AntDesign,
  FontAwesome,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useState, useEffect } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LMS_API } from "../../api/url";

//Fetch user data:

const ProfileScreen = () => {
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState({});

  const fetchData = async () => {
    try {
      const userIdFetched = await AsyncStorage.getItem("userId");
      setUserId(userIdFetched);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // حطينا تحت الديبندينسي اليوزر اي ,  يعني  هاي اليوز ايفكت ما راح تشتغل الا لما تتحمل الصفحة  و راح يكون لسا اليوزر اي دي فاضي , و لما ايضا يصير في يوزر اي دي عشان هيك حطينا الكود تحت لمااااا يكون في يوزر اي دي
    if (userId) {
      // Now userId is updated

      // Fetch user data using the updated userId
      const fetchUserData = async () => {
        try {
          const response = await LMS_API.get(`/users/${userId}`);
          // console.log(response.data);
          setUser(response.data.data.user);
        } catch (err) {
          console.log(err);
        }
      };

      fetchUserData();
    }
  }, [userId]);

  console.log(user);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AntDesign name="user" size={80} color="#333" />
        <Text style={styles.username}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>

      <View style={styles.options}>
        <TouchableOpacity style={styles.option}>
          <FontAwesome name="heart" size={32} color="#FF6B6B" />
          <Text style={styles.optionText}>Favorites</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <FontAwesome name="history" size={32} color="#66D3F2" />
          <Text style={styles.optionText}>History</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Feather name="settings" size={32} color="#FFD700" />
          <Text style={styles.optionText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <MaterialCommunityIcons
            name="help-circle-outline"
            size={32}
            color="#A6A6A6"
          />
          <Text style={styles.optionText}>Help</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginTop: 50,
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    color: "#333",
  },
  email: {
    fontSize: 16,
    color: "#777",
    marginTop: 10,
  },
  options: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 40,
  },
  option: {
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
    width: "48%",
    marginBottom: 20,
    backgroundColor: "#f0f0f0",
    elevation: 5,
  },
  optionText: {
    fontSize: 18,
    marginTop: 10,
    color: "#333",
  },
});

export default ProfileScreen;
