import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Pressable,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchFilter from "../components/SearchFilter";
import CategoriesFilter from "../components/CategoriesFilter";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { colors } from "../Constant";
import { FontAwesome } from "@expo/vector-icons";
import { LMS_API } from "../../api/url";

const FilterStorsProducts = ({ navigation }) => {
  // Now states for input:
  const [term, setTerm] = useState("");
  const route = useRoute();
  const itemName = route.params?.itemName;
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState({});
  const [products, setProducts] = useState([]);

  //Start of function:
  const fetchDataFromSubmit = () => {
    try {
      console.log(term);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await LMS_API.get(`/products?name=${itemName}`);
      // const response = await axios.get(
      //   `http://192.168.1.19:3000/api/v1/products?name=${itemName}`
      // );
      //   console.log(response.data.products);
      setProducts(response.data.products);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(products);

  /* 
  <Pressable
              onPress={() =>
                navigation.navigate("FilterStorsProducts", {
                  itemName: item.name,
                })
              }
              style={{
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
  */

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
    fetchProducts();
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
          setUser(response.data.data.user);
        } catch (err) {
          console.log(err);
        }
      };

      fetchUserData();
    }
  }, [userId]); // Add userId as a dependency

  console.log(itemName);
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 16, marginTop: 35 }}>
      {/* Render header */}
      <Header
        headerText={`Hi, ${user.name} `}
        headerIcon={"bars"}
        navigation={navigation}
      />
      {/* Input */}
      <View
        style={{
          marginTop: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ alignSelf: "center" }}>
          This page is showing the same product in different stores
        </Text>
      </View>

      <View style={{ marginTop: 22, flex: 1 }}>
        <FlatList
          keyExtractor={(item) => item._id}
          data={products}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => console.log("Product")}
              style={{
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
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={{ marginRight: 4 }}>{item.rating}</Text>
                  <FontAwesome
                    name="star"
                    size={16}
                    color={colors.COLOR_PRIMARY}
                  />
                </View>
                <Text> | </Text>

                <Text style={{ color: "red" }}>{item.storeId.name}</Text>
              </View>
            </Pressable>
          )}
        />
      </View>
      {/* Footer */}
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
};

export default FilterStorsProducts;
