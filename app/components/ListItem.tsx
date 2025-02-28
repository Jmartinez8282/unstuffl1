import {
  ImageSourcePropType,
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import React, { ReactNode } from "react";
import AppText from "./AppText/AppText";
import colors from "../config/colors";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";

interface Props {
  title: string;
  subTitle: string;
  image: ImageSourcePropType;
  onPress: () => void;
  renderRightActions:() => React.ReactNode
}

export default function ListItem({ title, subTitle, image, onPress,renderRightActions }: Props) {
  return (
    <GestureHandlerRootView>
      <Swipeable 
        renderRightActions={renderRightActions}
        
      >
        <TouchableHighlight onPress={onPress} underlayColor={colors.medium}>
          <View style={styles.container}>
            <Image style={styles.image} source={image} />
            <View>
              <AppText style={styles.title}>{title}</AppText>
              <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 20,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  subTitle: {
    color: colors.grey,
  },
  title: {
    fontWeight: "500",
  },
});
