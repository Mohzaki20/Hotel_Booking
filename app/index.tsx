import { StyleSheet, Text, View } from "react-native";
import React from "react";
import "expo-router/entry";
import SplashComponent from "../Features/Splash/Components/SplashComponent";
import Onboarding from "./Onboarding";
import Login from "./Login";
import Sign from "./SignUp";
import Home from "./Home";
import Details from "./RoomDetails/[Details]";
const index = () => {
  return (
    <View style={styles.container}>
      <Onboarding />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});
