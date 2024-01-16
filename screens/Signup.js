import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

const Signup = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");

  const submitSignup = async () => {
    const apiUrl = "https://api.apptask.thekaspertech.com/api/users/register";

    // Validate form inputs
    if (!name || !email || !password || !age) {
      console.error("Please fill out all fields");
      return;
    }

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          age,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        console.log("Signup successful:", result);

        navigation.navigate("Profile");
      } else {
        console.error("Signup failed:", result);
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };
  const goToLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/signlogin.png")}
        style={styles.profilePicture}
      />
      <View style={styles.cover}>
        <View style={styles.bar}>
          <MaterialIcons name="horizontal-rule" size={45} color="lightgrey" />
        </View>
        <View style={styles.innerBox}>
          <Text style={styles.heading}>Signup</Text>
          <View style={styles.profilePictureContainer}>
            <View style={styles.pictureOptions}>
              <Image
                source={require("../assets/profileImageSign.png")}
                style={styles.profilePicture1}
              />
              <View>
                <Text style={styles.pictureText}>Profile Picture</Text>
                <View style={styles.pictureOptions2}>
                  <TouchableOpacity style={styles.pictureOptionText}>
                    <Text>Take Picture</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.pictureOptionText}>
                    <Text>Upload</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.formContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Name"
              placeholderTextColor="black"
              value={name}
              onChangeText={(text) => setName(text)}
            />

            <TextInput
              style={styles.textInput}
              placeholder="Email"
              placeholderTextColor="black"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />

            <TextInput
              style={styles.textInput}
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor="black"
              value={password}
              onChangeText={(text) => setPassword(text)}
            />

            <TextInput
              style={styles.textInput}
              placeholder="Age"
              keyboardType="numeric"
              placeholderTextColor="black"
              value={age}
              onChangeText={(text) => setAge(text)}
            />
          </View>
          <View>
            <TouchableOpacity onPress={submitSignup} style={styles.button}>
              <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // Adjust flex direction, justifyContent, alignItems as needed
    flex: 1,
    backgroundColor: "#fff", // Assuming white background from image
    padding: 20, // Adjust padding as needed
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  profilePictureContainer: {
    // Adjust layout as needed
    alignItems: "center",
  },
  profilePicture: {
    width: "130%",
    height: 360,
    marginLeft: -22,
    marginTop: -20,
  },
  pictureOptions: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginLeft: -80,
    marginTop: 10,
  },
  pictureOptionText: {
    marginLeft: 10,
    padding: 13,
    fontSize: 12,
    backgroundColor: "#E9EAE9",
    borderRadius: 15,
    shadowColor: "grey",
    shadowOpacity: 0.4,
    marginTop: 10,
    shadowOffset: { width: 1, height: 1 },
    width: 110,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    // Adjust layout as needed
    marginTop: 30,
  },
  formLabel: {
    fontSize: 16,
    marginBottom: 10,
  },

  cover: {
    marginTop: -41,
    width: "114%",
    marginLeft: -23,
    flex: 1,
    borderRadius: 50,
    backgroundColor: "white",
  },
  bar: {
    alignItems: "center",
  },
  innerBox: {
    marginLeft: 20,
  },
  profilePicture1: {
    alignItems: "flex-start",

    borderRadius: 50,
  },
  pictureOptions2: {
    flexDirection: "row",
  },
  pictureText: {
    marginLeft: 10,
    fontSize: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
    borderRadius: 30,
    width: 360,
  },
  button: {
    backgroundColor: "#DD8716", // Hex code specified for button color
    padding: 15, // Adjust as needed
    borderRadius: 20, // Adjust as needed
    marginRight: 20,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16, // Adjust as needed
    color: "#fff", // Assuming white text from image
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Signup;
