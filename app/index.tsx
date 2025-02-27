import { Text, View } from "react-native";
import WelcomeScreen from "./screens/WelcomeScreen";
import ViewImageScreen from "./screens/ViewImageScreen";
import Borders from "./screens/Borders";
import Shadows from "./screens/Shadows";
import PaddingMargins from "./screens/PaddingMargins";
import AppText from "./components/AppText/AppText";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import AppButton from "./components/AppButton";
import Card from "./components/Card";
import ListingDetailsScreen from "./screens/ListingDetailsScreen";
import MessagesScreen from "./screens/MessagesScreen";

export default function Index() {
  return (
    <MessagesScreen/>
    // <ListingDetailsScreen/>
    // <View style={{backgroundColor: "#f8f4f4", padding: 20, paddingTop: 100}}>
    //   <Card
    //     title="Blue jean jacket for sale"
    //     subTitle="$100"
    //     image={require("../assets/images/jeanJacket.jpg")}
    //   />
    // </View>
      /* <AppText>Welcome Back to React Native</AppText>
      <MaterialCommunityIcons name="email-outline" size={50} color
      ="dodgerblue"/>
<MaterialCommunityIcons name="window-close" size={24} color="red" /> */
    /* <AppButton title="Login" onPress={() => alert("Pressed")}/> */
 
    // <PaddingMargins/>
    // <Shadows/>
    // <Borders/>
    // <ViewImageScreen/>
  //  <WelcomeScreen/>
  );
}
