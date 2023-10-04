import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { colors } from "../Constant";
import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const RecipeCard = ({ categoryId }) => {
  const navigation = useNavigation();
  const [cate, setCate] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCate = async () => {
    try {
      setIsLoading(true); // Show loading indicator
      const response = await axios.get(
        `http://192.168.1.19:3000/api/v1/products/cate/${
          categoryId || "65074164a2ceca5db2a4d403"
        }`
      );
      setCate(response.data.data.cateProducts);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false); // Hide loading indicator
    }
  };

  useEffect(() => {
    // Fetch products when the component mounts without a categoryId
    fetchCate();
  }, []);

  useEffect(() => {
    if (categoryId) {
      setCate([]); // Clear existing products
      fetchCate(); // Fetch new products
    }
  }, [categoryId]);

  return (
    <View>
      {isLoading ? ( // Show loading indicator
        <ActivityIndicator size="large" color={colors.COLOR_PRIMARY} />
      ) : cate.length > 0 ? (
        <FlatList
          keyExtractor={(item) => item._id}
          data={cate}
          renderItem={({ item }) => (
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
          )}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: "space-between",
          }}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <Text>Loading products.... </Text>
      )}
    </View>
  );
};

export default RecipeCard;

const styles = StyleSheet.create({});

/////////////////

/* 

import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { colors } from "../Constant";
import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";

const RecipeCard = ({ categoryId }) => {
  const [cate, setCate] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCate = async () => {
    try {
      setIsLoading(true); // Show loading indicator
      const response = await axios.get(
        `http://192.168.1.19:3000/api/v1/products/cate/${
          categoryId || "65074164a2ceca5db2a4d403"
        }`
      );
      setCate(response.data.data.cateProducts);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false); // Hide loading indicator
    }
  };

  useEffect(() => {
    // Fetch products when the component mounts without a categoryId
    fetchCate();
  }, []);

  useEffect(() => {
    if (categoryId) {
      setCate([]); // Clear existing products
      fetchCate(); // Fetch new products
    }
  }, [categoryId]);

  return (
    <View>
      {isLoading ? ( // Show loading indicator
        <ActivityIndicator size="large" color={colors.COLOR_PRIMARY} />
      ) : cate.length > 0 ? (
        <FlatList
          keyExtractor={(item) => item._id}
          data={cate}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => console.log(item._id)}
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
          )}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: "space-between",
          }}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <Text>Loading products.... </Text>
      )}
    </View>
  );
};

export default RecipeCard;

const styles = StyleSheet.create({});
*/

//////////////////

// import {
//   FlatList,
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   Pressable,
// } from "react-native";
// import React, { useEffect, useState } from "react";
// import { colors, recipeList } from "../Constant";
// import { FontAwesome } from "@expo/vector-icons";
// import { useNavigation } from "@react-navigation/native";
// import axios from "axios";

// const RecipeCard = ({ categoryId }) => {
//   const [cate, setCate] = useState([]);
//   const [cateId, setCateId] = useState("65074164a2ceca5db2a4d403");

//   const fetchCate = async () => {
//     try {
//       const response = await axios.get(
//         `http://192.168.1.19:3000/api/v1/products/cate/${cateId}`
//       );
//       setCate(response.data.data.cateProducts);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     fetchCate();
//   }, []);

//   useEffect(() => {
//     if (categoryId) {
//       setCateId(categoryId);
//       fetchCate();
//     }
//   }, [categoryId]);

//   const navigation = useNavigation();
//   return (
//     <View>
//       {cate.length > 0 ? (
//         <FlatList
//           keyExtractor={(item) => item._id}
//           data={cate}
//           renderItem={({ item }) => (
//             <Pressable
//               onPress={() => console.log(item._id)}
//               style={{
//                 backgroundColor: colors.COLOR_LIGHT,
//                 shadowColor: "#000",
//                 shadowOffset: { width: 0, height: 4 },
//                 shadowOpacity: 0.1,
//                 shadowRadius: 7,
//                 borderRadius: 16,
//                 marginVertical: 16,
//                 alignItems: "center",
//                 paddingHorizontal: 8,
//                 paddingVertical: 26,
//               }}
//             >
//               <Image
//                 source={{ uri: item.imgUrl }}
//                 style={{
//                   width: 150,
//                   height: 150,
//                   resizeMode: "center",
//                   borderRadius: 9,
//                 }}
//               />
//               <Text>{item.name}</Text>
//               <View style={{ flexDirection: "row", marginTop: 8 }}>
//                 <Text>{item.price}</Text>
//                 <Text> | </Text>
//                 <View style={{ flexDirection: "row" }}>
//                   <Text style={{ marginRight: 4 }}>{item.rating}</Text>
//                   <FontAwesome
//                     name="star"
//                     size={16}
//                     color={colors.COLOR_PRIMARY}
//                   />
//                 </View>
//               </View>
//             </Pressable>
//           )}
//           numColumns={2}
//           columnWrapperStyle={{
//             justifyContent: "space-between",
//           }}
//           showsVerticalScrollIndicator={false}
//         />
//       ) : (
//         <Text>Loading products.... </Text>
//       )}
//     </View>
//   );
// };

// export default RecipeCard;

// const styles = StyleSheet.create({});
