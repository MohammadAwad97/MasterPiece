import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  FlatList,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import CategoriesFilter from "../components/CategoriesFilter";
import RecipeCard from "../components/RecipeCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import Footer from "../components/Footer";
import { colors } from "../Constant";
import { FontAwesome } from "@expo/vector-icons";
import { LMS_API } from "../../api/url";

const MainFilterScreen = ({ navigation }) => {
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState({});
  //   const [categoryId, setCategoryId] = useState("");
  const [products, setProducts] = useState([]);
  const [term, setTerm] = useState("");

  //Now we want to make function for submit:
  const fetchDataFromSubmit = async () => {
    try {
      const response = await LMS_API.get(`/products?name=${term}`);
      // const response = await axios.get(
      //   `http://192.168.1.19:3000/api/v1/products?name=${term}`
      // );
      setProducts(response.data.products);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchFirstData = async () => {
    try {
      const response = await LMS_API.get(`/products`);
      // const response = await axios.get(
      //   `http://192.168.1.19:3000/api/v1/products`
      // );
      console.log(response.data.products);
      setProducts(response.data.products);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSelectCategory = (cateId) => {
    setCategoryId(cateId);
  };

  const fetchData = async () => {
    try {
      const userIdFetched = await AsyncStorage.getItem("userId");
      setUserId(userIdFetched);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch userId and setUserId
    fetchFirstData();
  }, []);

  useEffect(() => {
    // حطينا تحت الديبندينسي اليوزر اي ,  يعني  هاي اليوز ايفكت ما راح تشتغل الا لما تتحمل الصفحة  و راح يكون لسا اليوزر اي دي فاضي , و لما ايضا يصير في يوزر اي دي عشان هيك حطينا الكود تحت لمااااا يكون في يوزر اي دي
    if (userId) {
      // Now userId is updated

      // Fetch user data using the updated userId
      const fetchUserData = async () => {
        try {
          const response = await LMS_API.get(`/users/${userId}`);
          // const response = await axios.get(
          //   `http://192.168.1.19:3000/api/v1/users/${userId}`
          // );
          // console.log(response.data);
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
        headerText={`Hi, ${user.name}`}
        headerIcon={"bars"}
        navigation={navigation}
      />

      {/* Search Filter */}
      <SearchFilter
        icon="search"
        term={term}
        setTerm={setTerm}
        onSubmit={fetchDataFromSubmit}
      />

      <View>
        <TouchableOpacity onPress={() => navigation.navigate("RecipeList")}>
          <Text style={{ color: colors.COLOR_PRIMARY }}>
            Click to see all categoris
          </Text>
        </TouchableOpacity>
      </View>

      {/* Recipe List Filter */}
      <View style={{ marginTop: 22, flex: 1 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Products</Text>
        {/* Recipes list */}
        {/* <RecipeCard navigation={navigation} /> */}
        <FlatList
          keyExtractor={(item) => item._id}
          data={products}
          //   numColumns={2}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => console.log("it's product")}
              style={{
                flex: 1,
                margin: 8,
                backgroundColor: colors.COLOR_LIGHT,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 7,
                borderRadius: 16,
                marginVertical: 16,
                alignItems: "center",
                paddingHorizontal: 8,
                paddingVertical: 26,
              }}
            >
              <Image
                source={{ uri: item.imgUrl }}
                style={{
                  width: 150,
                  height: 150,
                  resizeMode: "center",
                  borderRadius: 9,
                }}
              />
              <Text>{item.name}</Text>
              <View style={{ flexDirection: "row", marginTop: 8 }}>
                <Text>{item.price}</Text>
                <Text> | </Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ marginRight: 4 }}>{item.rating}</Text>
                  <FontAwesome
                    name="star"
                    size={16}
                    color={colors.COLOR_PRIMARY}
                  />
                </View>
              </View>
            </Pressable>
          )}
          //   style={{
          //     backgroundColor: colors.COLOR_LIGHT,
          //     shadowColor: "#000",
          //     shadowOffset: { width: 0, height: 4 },
          //     shadowOpacity: 0.1,
          //     shadowRadius: 7,
          //     borderRadius: 16,
          //     marginVertical: 16,
          //     alignItems: "center",
          //     paddingHorizontal: 8,
          //     paddingVertical: 26,
          //   }}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: "space-between",
          }}
          showsVerticalScrollIndicator={false}
        />
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
export default MainFilterScreen;
