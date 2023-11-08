import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Config";
import { Link, router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Sign = () => {
  const [showPass, setShowPass] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with:", user.email);
        if (user) {
          if (
            !email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) ||
            email.length === 0
          ) {
            setErrorMsg("Email should be Formatted");
          }
          if (password.length < 20 || password.length === 0) {
            setErrorMsg("Password should be more than 6 characters");
          }
          async function storeUsername(userName) {
            try {
              await AsyncStorage.setItem("username", userName);
              console.log("Username stored successfully!");
            } catch (error) {
              console.log("Error storing username:", error);
            }
          }
          storeUsername(userName);
          router.replace("/Home");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require("../assets/hopin.png")} />
      </View>
      <View style={styles.tabs}>
        <Link href="/Login" asChild>
          <Pressable style={styles.tab}>
            <Text style={{ fontSize: 20, fontWeight: "700", color: "#A9A9A9" }}>
              Log In
            </Text>
          </Pressable>
        </Link>
        <View
          style={[
            styles.tab,
            { borderBottomColor: "#00A76E", borderBottomWidth: 3 },
          ]}
        >
          <Text style={{ fontSize: 20, fontWeight: "700" }}>Sign Up</Text>
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <View style={styles.input}>
          <Text style={{ fontSize: 16, fontWeight: "600", color: "#3E3E3E" }}>
            Username
          </Text>
          <TextInput
            style={styles.userName}
            placeholder="Create your username"
            placeholderTextColor="#A9A9A9CC"
            onChangeText={(e) => setUserName(e)}
          />
        </View>
        <View style={styles.input}>
          <Text style={{ fontSize: 16, fontWeight: "600", color: "#3E3E3E" }}>
            E-mail
          </Text>
          <TextInput
            style={styles.userName}
            placeholder="Enter your e-mail"
            placeholderTextColor="#A9A9A9CC"
            onChangeText={(e) => setEmail(e)}
            value={email}
          />
        </View>
        <View style={styles.input}>
          <Text style={{ fontSize: 16, fontWeight: "600", color: "#3E3E3E" }}>
            Password{" "}
          </Text>
          <View>
            <TextInput
              style={styles.userName}
              secureTextEntry={showPass}
              placeholder="*******"
              placeholderTextColor="#A9A9A9CC"
              onChangeText={(e) => setPassword(e)}
              value={password}
            />
            <TouchableOpacity
              style={styles.eye}
              onPress={() => setShowPass(!showPass)}
            >
              <Image source={require("../Features/Login/Images/eye-off.png")} />
            </TouchableOpacity>
          </View>
          <Text style={{ color: "red", marginHorizontal: 10 }}>{errorMsg}</Text>
        </View>
        <TouchableOpacity style={styles.btn} onPress={handleSignUp}>
          <Text style={{ fontSize: 18, fontWeight: "700", color: "#fff" }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Sign;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#fafafa",
    alignItems: "center",
  },
  logo: {
    width: "100%",
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  tabs: {
    flexDirection: "row-reverse",
    width: "100%",
    alignItems: "center",
    height: 66,
  },
  tab: {
    backgroundColor: "#fff",
    width: "50%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    padding: 20,
    fontSize: 14,
    fontWeight: "400",
  },
  userName: {
    width: 325,
    height: 55,
    backgroundColor: "white",
    borderRadius: 27.5,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  btn: {
    width: 325,
    height: 57,
    backgroundColor: "#00A76E",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 27.5,
    marginTop: 50,
  },
  eye: {
    position: "absolute",
    top: 25,
    left: 20,
  },
});
