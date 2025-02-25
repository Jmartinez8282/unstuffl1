import { StyleSheet, Text, View,Image } from "react-native";
import React from "react";
import colors from "../config/colors";

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
        <View style={styles.closeIcon}></View>
        <View style={styles.deleteIcon}></View>
        <Image 
        source={require('../../assets/images/oldChair.jpg')}
        style={styles.image}
        />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode:"contain"
  },
    closeIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.primary,
        position: "absolute",
        top: 20,
        left: 30,
    },
    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.secondary,
        position: "absolute",
        top: 20,
        right: 30,
    }
});
