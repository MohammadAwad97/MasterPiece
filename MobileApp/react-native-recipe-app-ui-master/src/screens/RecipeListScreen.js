import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import CategoriesFilter from "../components/CategoriesFilter";
import RecipeCard from "../components/RecipeCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import Footer from "../components/Footer";
import { LMS_API } from "../../api/url";

const RecipeListScreen = ({ navigation }) => {
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState({});
  const [categoryId, setCategoryId] = useState("");

  //Now we want to make function for submit:

  const handleSelectCategory = (cateId) => {
    setCategoryId(cateId);
  };
  // console.log(categoryId, "Come from the categoryId,  the function applied");

  const fetchData = async () => {
    try {
      const userIdFetched = await AsyncStorage.getItem("userId");
      setUserId(userIdFetched);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(categoryId);

  useEffect(() => {
    fetchData(); // Fetch userId and setUserId
  }, []);

  useEffect(() => {
    // حطينا تحت الديبندينسي اليوزر اي ,  يعني  هاي اليوز ايفكت ما راح تشتغل الا لما تتحمل الصفحة  و راح يكون لسا اليوزر اي دي فاضي , و لما ايضا يصير في يوزر اي دي عشان هيك حطينا الكود تحت لمااااا يكون في يوزر اي دي
    if (userId) {
      // Now userId is updated

      // Fetch user data using the updated userId
      const fetchUserData = async () => {
        try {
          const response = await LMS_API.get(`/users/${userId}`);
          console.log(response.data);
          setUser(response.data.data.user);
        } catch (err) {
          console.log(err);
        }
      };

      fetchUserData();
    }
  }, [userId]); // Add userId as a dependency

  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 16, marginTop: 35 }}>
      {/* Render header */}
      <Header
        headerText={`${user.name} `}
        headerIcon={"bars"}
        navigation={navigation}
      />

      {/* Search Filter */}
      {/* <SearchFilter icon="search" /> */}

      {/* Categories filter */}
      <View style={{ marginTop: 22 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Categories</Text>
        {/* Categories list */}
        <CategoriesFilter onSelectCategory={handleSelectCategory} />
      </View>

      {/* Recipe List Filter */}
      <View style={{ marginTop: 22, flex: 1 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Products</Text>
        {/* Recipes list */}
        <RecipeCard navigation={navigation} categoryId={categoryId} />
      </View>
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
  },
});
export default RecipeListScreen;
