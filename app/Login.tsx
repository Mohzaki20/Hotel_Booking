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
import { Link, router } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Config";

const Login = () => {
  const [showPass, setShowPass] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with:", user.email);
        if (user){
          router.replace("/Home")
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
        <View
          style={[
            styles.tab,
            { borderBottomColor: "#00A76E", borderBottomWidth: 3 },
          ]}
        >
          <Text style={{ fontSize: 20, fontWeight: "700" }}>Log In</Text>
        </View>
        <Link href="/SignUp" asChild>
          <Pressable style={styles.tab}>
            <Text style={{ fontSize: 20, fontWeight: "700", color: "#A9A9A9" }}>
              Sign Up
            </Text>
          </Pressable>
        </Link>
      </View>
      <View style={{ alignItems: "center" }}>
        <View style={styles.input}>
          <Text style={{ fontSize: 16, fontWeight: "600", color: "#3E3E3E" }}>
            Username or E-mail
          </Text>
          <TextInput
            style={styles.userName}
            placeholder="danielbronks123@gmail.com"
            onChangeText={e => setEmail(e)}
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
              onChangeText={e => setPassword(e)}
            />
            <TouchableOpacity
              style={styles.eye}
              onPress={() => setShowPass(!showPass)}
            >
              <Image source={require("../Features/Login/Images/eye-off.png")} />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={{ marginTop: 20 }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "400",
              color: "#3E3E3ECC",
              textAlign: "left",
            }}
          >
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => handleSignUp()}>
          <Text style={{ fontSize: 18, fontWeight: "700", color: "#fff" }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

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
