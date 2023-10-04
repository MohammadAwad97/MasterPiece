import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Button,
  Image,
  Pressable,
} from "react-native";
import React, { useEffect, useReducer, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import url from "../../api/url";
import { LMS_API } from "../../api/url";

//Reducer Function:
const reducer = (state, action) => {
  switch (action.type) {
    case "update_email":
      return { ...state, email: action.payload };

    case "update_password":
      return { ...state, password: action.payload };

    case "default":
      return state;
  }
};

const Login = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [state, dispatch] = useReducer(reducer, { email: "", password: "" });

  const { email, password } = state;

  const checkIfUser = async () => {
    try {
      const userId = await AsyncStorage.getItem("userId");
      if (!userId) {
        console.log("No userId");
      } else if (userId) {
        console.log(userId);
      }
    } catch (err) {}
  };

  //submit:
  const handleSubmit = async () => {
    try {
      const response = await LMS_API.post(`/users/login`, state);
      // const response = await axios.post(
      //   `http://192.168.1.19:3000/api/v1/users/login`,
      //   state
      // );
      await AsyncStorage.setItem("userId", response.data.data.user._id);
      navigation.navigate("MainFilterScreen");
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    checkIfUser();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1, marginHorizontal: 22, marginTop: 22 }}>
        <View style={{ marginVertical: 22 }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              marginVertical: 12,
              color: "black",
            }}
          >
            Hey Welcome Back !
          </Text>
          <Text style={{ fontSize: 16, color: "black" }}>
            Hello again you have been missed!
          </Text>
        </View>
        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 400,
              marginVertical: 8,
            }}
          >
            Email address
          </Text>
          <View
            style={{
              width: "100%",
              height: 48,
              borderColor: "black",
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "start",
              justifyContent: "center",
              paddingLeft: 10,
            }}
          >
            <TextInput
              onChangeText={(text) =>
                dispatch({ type: "update_email", payload: text })
              }
              width
              placeholder="Enter your email"
              keyboardType="email-address"
              placeholderTextColor="black"
            />
          </View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 400,
              marginVertical: 8,
            }}
          >
            Password
          </Text>
          <View
            style={{
              width: "100%",
              height: 48,
              borderColor: "black",
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "start",
              justifyContent: "center",
              justifyContent: "space-between",
              flexDirection: "row",
              paddingLeft: 10,
              marginBottom: 30,
            }}
          >
            <TextInput
              onChangeText={(text) =>
                dispatch({ type: "update_password", payload: text })
              }
              keyboardType="numeric"
              placeholder="Enter your password"
              placeholderTextColor="black"
              secureTextEntry={isPasswordShown}
              style={{
                width: "80%",
              }}
            />

            <TouchableOpacity
              onPress={() => setIsPasswordShown(!isPasswordShown)}
              style={{ position: "absolute", right: 12, top: 10 }}
            >
              {isPasswordShown === true ? (
                <Ionicons name="eye-off" size={24} color="black" />
              ) : (
                <Ionicons name="eye" size={24} color="black" />
              )}
            </TouchableOpacity>
          </View>
        </View>

        {/* Button */}
        <TouchableOpacity>
          <Button
            onPress={handleSubmit}
            title="Login"
            filled
            backgroundColor="#006662"
            style={{
              marginTop: 29,
              marginBottom: 4,
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 20,
          }}
        >
          <View style={{ flex: 1, height: 1, backgroundColor: "gray" }} />
          <Text style={{ fontSize: 14, marginHorizontal: 6 }}>
            Or login with
          </Text>
          <View style={{ flex: 1, height: 1, backgroundColor: "gray" }} />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        />
        {/* <TouchableOpacity
          onPress={() => console.log("pressed")}
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            height: 40,
            borderWidth: 1,
            borderColor: "grey",
            marginRight: 4,
            borderRadius: 10,
          }}
        >
          <Image
            style={{ height: 36, width: 36, marginRight: 8 }}
            resizeMode="contain"
            source={
              "../../assets/images/blue-social-media-logo_197792-1759.avif"
            }
          />
        </TouchableOpacity> */}

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 22,
          }}
        >
          <Text style={{ fontSize: 16, color: "black" }}>
            Don't have an account?
          </Text>
          <Pressable onPress={() => navigation.navigate("Registration")}>
            <Text
              style={{
                fontSize: 16,
                color: "orange",
                fontWeight: "bold",
                marginLeft: 6,
              }}
            >
              SignUp
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
