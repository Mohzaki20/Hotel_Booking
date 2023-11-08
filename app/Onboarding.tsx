import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Onboarding = () => {
  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <Image
          source={require("../assets/Vector1.png")}
          style={{ borderRadius: 30 }}
        />
      </View>
      <Text style={styles.title}>Travel with no worry</Text>
      <Text style={styles.description}>
        You can now experience the next level travel experience for hotel
        bookings.
      </Text>
      <View style={{width:"100%",marginTop:80,alignItems:"center"}}>
        <Link href="/Login" asChild>
        <TouchableOpacity style={styles.btn}>
          <Text style={{ fontSize: 18, fontWeight: "700", color: "#fff" }}>
            Next
          </Text>
        </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
  },
  img: {
    marginTop: 30,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginTop: 40,
    color: "#3E3E3E",
    marginHorizontal:10
  },
  description: {
    color: "#3E3E3ECC",
    marginTop: 30,
    lineHeight: 25,
    marginHorizontal:10
  },
  btn: {
    backgroundColor: "#00A76E",
    width: 165,
    height: 57,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
});
