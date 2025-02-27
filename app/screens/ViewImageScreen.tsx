import { StyleSheet, Text, View,Image } from "react-native";
import React from "react";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
        <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color={colors.white} size
        ={35}/>
        </View>
        <View style={styles.deleteIcon}>
        <MaterialCommunityIcons name="trash-can-outline" color={colors.white} size
        ={35}/>
        </View>
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
       position: "absolute",
        top: 20,
        left: 30,
    },
    deleteIcon: {
        position: "absolute",
        top: 20,
        right: 30,
    }
});
