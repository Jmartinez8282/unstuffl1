import { Platform, Text, View } from "react-native";
import React from "react";
import styles from "./styles";

interface Props {
  children: string;
}

export default function AppText({ children }: Props) {
  return <Text style={styles.text}>{children}</Text>;
}

