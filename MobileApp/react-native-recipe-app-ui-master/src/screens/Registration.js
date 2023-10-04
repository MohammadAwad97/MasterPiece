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
import React, { useState, useReducer } from "react";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LMS_API } from "../../api/url";

//Function Reducer:
const reducer = (state, action) => {
  switch (action.type) {
    case "update_name":
      return { ...state, name: action.payload };

    case "update_email":
      return { ...state, email: action.payload };

    case "update_password":
      return { ...state, password: action.payload };

    case "update_passwordConfirm":
      return { ...state, passwordConfirm: action.payload };

    default:
      return state;
  }
};

const Registration = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const { name, email, password, passwordConfirm } = state;
  console.log(passwordConfirm);

  const handleSubmit = async () => {
    console.log("Hiiiiiiiii");
    try {
      const response = await LMS_API.post(`/users`, state);
      // const response = await axios.post(
      //   `http://192.168.1.19:3000/api/v1/users`,
      //   state
      // );
      console.log(response.data.data.user._id);
      await AsyncStorage.setItem("userId", response.data.data.user._id);

      navigation.navigate("RecipeList");
    } catch (err) {
      console.log(err.message);
    }
  };

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
            Create Account
          </Text>
          <Text style={{ fontSize: 16, color: "black" }}>
            Connect with friends today
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
            User name
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
                dispatch({ type: "update_name", payload: text })
              }
              width
              placeholder="Enter your username"
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
              justifyContent: "space-between",
              flexDirection: "row",
              paddingLeft: 10,
            }}
          >
            <TextInput
              onChangeText={(text) =>
                dispatch({ type: "update_email", payload: text })
              }
              placeholder="Enter your email"
              placeholderTextColor="black"
              style={{
                width: "80%",
              }}
            />
          </View>
        </View>
        {/*  */}
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
        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 400,
              marginVertical: 8,
            }}
          >
            Confirm Password
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
                dispatch({ type: "update_passwordConfirm", payload: text })
              }
              keyboardType="numeric"
              placeholder="Enter your password again"
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
        <TouchableOpacity>
          <Button
            onPress={handleSubmit}
            title="Sign Up"
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
            Or sign up with
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
            Already have an account?
          </Text>
          <Pressable onPress={() => navigation.navigate("LogIn")}>
            <Text
              style={{
                fontSize: 16,
                color: "orange",
                fontWeight: "bold",
                marginLeft: 6,
              }}
            >
              Login
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Registration;
