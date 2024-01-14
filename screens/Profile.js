import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
const Profile = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/Sally.png")}
        style={styles.profileImage}
      />
      <Text style={styles.name}>Sally Robins</Text>
      <View style={styles.citybox}>
        <FontAwesome name="location-arrow" size={16} color="black" />
        <Text style={styles.city}>New York City</Text>
      </View>

      <View style={styles.infoBox}>
        <View style={styles.innerBox}>
          <View style={styles.innb}>
            <Text style={styles.email}>sally@gmail.com</Text>
            <Text style={styles.age}>32</Text>
          </View>
          <View style={styles.innb}>
            <Text style={styles.email1}>EMAIL</Text>
            <Text style={styles.age1}>AGE</Text>
          </View>
        </View>
      </View>

      <Text style={styles.subHeading}>General Statistics</Text>

      <View style={styles.fieldsContainer}>
        <View style={styles.field}>
          <Text style={styles.fieldLabel}>Places Visited</Text>
          <View style={styles.textBox}>
            <Text style={styles.fieldValue}>5</Text>
          </View>
        </View>
        <View style={styles.field}>
          <Text style={styles.fieldLabel}>Hours Travelled</Text>
          <View style={styles.textBox}>
            <Text style={styles.fieldValue}>18</Text>
          </View>
        </View>
        <View style={styles.field}>
          <Text style={styles.fieldLabel}>Surveys Completed</Text>
          <View style={styles.textBox}>
            <Text style={styles.fieldValue}>9</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Add overall layout styles here
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 5,
    borderColor: "red",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    marginBottom: 20,
    alignSelf: "center", // Center the image
    marginTop: 15,
  },
  name: {
    fontSize: 24,
    textAlign: "center",
  },
  city: {
    fontSize: 16,
    textAlign: "center",
  },
  citybox: {
    textAlign: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  infoBox: {
    // Add outer box styles here
  },
  innerBox: {
    // Add inner box styles here
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    padding: 15,
    borderBlockColor: "black",
    borderColor: "black",
    backgroundColor: "white",
    width: 340,
    borderRadius: 50,
    marginLeft: 20,
  },
  email: {
    textDecorationLine: "underline",
    fontSize: 20,
  },
  age: {
    fontSize: 20,
  },
  email1: {
    fontSize: 15,
  },
  age1: {
    fontSize: 15,
  },

  field: {
    // Add individual field styles here
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    marginBottom: 10,
  },

  innb: {
    flexDirection: "row",
    justifyContent: "center",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  subHeading: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 15,
    marginTop: 20,
    marginLeft: 25,
  },

  fieldsContainer: {
    flexDirection: "column", // Arrange fields horizontally
    justifyContent: "space-around", // Distribute fields evenly
    marginBottom: 30, // Adjust for spacing below fields
    marginLeft: 25,
  },

  field: {
    backgroundColor: "white", // Adjust background color if needed
    padding: 15,
    borderRadius: 30,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    width: 340, // Adjust field width as needed
    marginBottom: 15,
    justifyContent: "space-between",
    textAlign: "center",
    flexDirection: "row",
  },

  fieldLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },

  fieldValue: {
    fontSize: 15,
    marginRight: 6,
    textAlign: "right", // Align value to the right
  },
  textBox: {
    borderColor: "black",
    borderWidth: 1,
    width: 40,
    height: 30,
    padding: 5,
    borderRadius: 30,
  },
});

export default Profile;
