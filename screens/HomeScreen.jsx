import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const LocoScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Text style={styles.subheading}>
        Track your location in real-time with Loco.
      </Text>
      <Image
        source={require("../assets/Image.png")}
        style={styles.screenshot}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Signup")}
      >
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.link}
        onPress={() => navigation.navigate("Login")}
      >
        <View style={styles.row}>
          <Text style={styles.linkText}>Already have an account?</Text>
          <Text style={styles.login}> Log in</Text>
        </View>
      </TouchableOpacity>
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
  logo: {
    width: 340, // Adjust as needed
    height: 80, // Adjust as needed
    marginBottom: 20,
    marginTop: 50, // Adjust as needed
  },
  screenshot: {
    width: "100%", // Assuming full-width from image
    height: 250, // Adjust as needed
    marginBottom: 20, // Adjust as needed
  },
  heading: {
    fontSize: 30, // Adjust as needed
    fontWeight: "bold",
    marginBottom: 10, // Adjust as needed
  },
  subheading: {
    fontSize: 18, // Adjust as needed
    marginBottom: 30, // Adjust as needed
    textAlign: "center",
  },
  button: {
    backgroundColor: "#DD8716", // Hex code specified for button color
    padding: 15, // Adjust as needed
    borderRadius: 20, // Adjust as needed
  },
  buttonText: {
    fontSize: 16, // Adjust as needed
    color: "#fff", // Assuming white text from image
    fontWeight: "bold",
    textAlign: "center",
  },
  link: {
    marginTop: 10, // Adjust as needed
  },
  linkText: {
    fontSize: 14, // Adjust as needed
    color: "#888",
    textAlign: "center", // Adjust as needed
  },
  login: {
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    textAlign: "center", // Adjust as needed
    justifyContent: "center",
  },
});

export default LocoScreen;
