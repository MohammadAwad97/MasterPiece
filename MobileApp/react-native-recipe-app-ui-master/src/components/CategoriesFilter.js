import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { colors } from "../Constant";
import axios from "axios";

const CategoriesFilter = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  const pages = ["All products", "Categories"];

  const handleClickToGet_CateId = (_id) => {
    onSelectCategory(_id);
    setActiveCategory(_id);
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        `http://192.168.1.19:3000/api/v1/categories`
      );
      setCategories(response.data.categories);
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect:
  useEffect(() => {
    fetchCategories();
  }, []);

  // console.log(categories);

  const renderItem = ({ item, index }) => (
    <TouchableOpacity onPress={() => handleClickToGet_CateId(item._id)}>
      <View
        style={{
          backgroundColor:
            item._id === activeCategory
              ? colors.COLOR_PRIMARY
              : colors.COLOR_LIGHT,
          // index === 0 ? colors.COLOR_PRIMARY : colors.COLOR_LIGHT,
          marginRight: 36,
          borderRadius: 8,
          paddingHorizontal: 16,
          paddingVertical: 10,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 7,
          marginVertical: 16,
        }}
      >
        <Text
          style={{
            // color: index === 0 && colors.COLOR_LIGHT,
            fontSize: 18,
          }}
        >
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      {categories.length > 0 ? (
        <FlatList
          data={categories}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      ) : (
        <Text>Loading Categories....</Text>
      )}
    </View>
  );
};

export default CategoriesFilter;

const styles = StyleSheet.create({});
