import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
// import { SplashScreen } from "expo-splash-screen";

const SplashComponent = () => {
  // useEffect(() => {
  //   SplashScreen.hideAsync();
  // }, []);
  return (
    <View style={styles.container}>
      <View style={styles.topWave}>
        <Image source={require("../Images/TopWave.png")} />
      </View>
      <View style={styles.bottomWave}>
        <Image source={require("../Images/bottomWave.png")} />
      </View>
      <View style={styles.logo}>
        <Image source={require("../Images/Group.png")} width={78} />
      </View>
    </View>
  );
};

export default SplashComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#00A76E",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    backgroundColor: "#fff",
    width: 78,
    height: 78,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  topWave: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  bottomWave: {
    position: "absolute",
    bottom: 0,
    left: 0,
  },
});
