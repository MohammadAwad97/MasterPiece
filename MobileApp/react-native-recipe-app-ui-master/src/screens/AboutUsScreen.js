import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const AboutUsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* <Image source={require("./path_to_your_logo.png")} style={styles.logo} /> */}
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.description}>
        At [Investment Glory], we're on a mission to simplify your grocery
        shopping experience. We understand the value of your time and the
        importance of saving money. Our app brings together a wide variety of
        products from numerous stores, allowing you to effortlessly compare
        prices and find the best deals. We believe in empowering our users to
        make informed choices, ensuring you get the products you need at the
        most competitive prices. With [App Name], you can shop smart, save time,
        and enjoy the convenience of having all your grocery needs in one place.
        We're here to make your life easier, one grocery item at a time.
      </Text>
      {/* <Text style={styles.description}>
        Our mission is to [describe your mission or purpose].
      </Text>
      <Text style={styles.description}>
        Meet our team of talented individuals who work hard to make this app a
        reality:
      </Text> */}

      {/* Display Team Members */}
      <View style={styles.teamMember}>
        <Image
          //   source={require("./path_to_team_member_image.png")}
          style={styles.teamMemberImage}
        />
        <Text style={styles.teamMemberName}>Mohammad Awad</Text>
        <Text style={styles.teamMemberRole}>Founder & CEO</Text>
      </View>

      {/* Add more team members as needed */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    alignItems: "center",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
    color: "#333",
  },
  teamMember: {
    alignItems: "center",
    marginTop: 20,
  },
  teamMemberImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  teamMemberName: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 8,
  },
  teamMemberRole: {
    fontSize: 16,
    color: "#777",
    marginTop: 4,
  },
});

export default AboutUsScreen;
