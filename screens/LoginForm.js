import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  AsyncStorage,
  Text,
} from "react-native";
import axios from "axios";

export default function LoginForm({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginHandler(event) {
    event.preventDefault();
    try {
      if (email === "" || password === "") {
        alert("Tolong masukan email dan password");
      } else {
        let { data } = await axios({
          method: "POST",
          url: "http://bta70.omindtech.id/api/tentor/login",
          data: {
            email,
            password,
          },
        });
        await AsyncStorage.setItem("user_token", data.data.token_access);
        await navigation.navigate("Profile");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setEmail("");
      setPassword("");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.inputStyle}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.inputStyle}
        />
        <View style={styles.submitBtn}>
          <Button title="Login" onPress={(event) => loginHandler(event)} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d9e4dd",
    alignItems: "center",
    justifyContent: "center",
  },
  inputStyle: {
    width: 200,
    backgroundColor: "#f1f1f1",
    marginBottom: 10,
    textAlign: "center",
    borderRadius: 7,
    height: 30,
  },
  submitBtn: {
    width: 200,
  },
  subContainer: {
    backgroundColor: "#769fcd",
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 300,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 27,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "white",
    marginBottom: 10,
  },
});
