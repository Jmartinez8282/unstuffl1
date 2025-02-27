import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import AppText from "./AppText/AppText";
import colors from "../config/colors";

interface Props {
  title: string;
  subTitle: string;
  image: ImageSourcePropType;
}

export default function Card({ title, subTitle, image }: Props) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title} >{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    subTitle:{
        color: colors.secondary,
        fontWeight:800,
    },
    title: {
        marginBottom: 7,
    },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 350,
  },
  card: {
    borderRadius: 15,
    backgroundColor: "white",
    marginBottom: 20,
    overflow: "hidden",
  },
});
