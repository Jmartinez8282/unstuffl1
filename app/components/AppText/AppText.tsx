import { Platform, Text, View } from "react-native";
import React from "react";
import styles from "./styles";

interface Props {
  children: string;
  style?: object;
}

export default function AppText({ children,style }: Props) {
  return <Text style={[styles.text,style]}>{children}</Text>;
}

