import { FlatList, ImageSourcePropType, StatusBar,View} from "react-native";
import React, { useState } from "react";
import ListItem from "../components/ListItem";

import Constants from "expo-constants";
import Screen from "../components/Screen";
import colors from "../config/colors";
import ListItemSeperator from "../components/ListItemSeperator";
import Reanimated,{SharedValue}from 'react-native-reanimated'
import ListItemDeleteAction from "../components/ListItemDeleteAction";

type Message = {
    id: number,
    title:string,
    description: string;
    image: ImageSourcePropType
}


const initialMessages:Message[] = [
  {
    id: 1,
    title: "Title number one",
    description: "Description one",
    image: require("../../assets/images/me.jpeg"),
  },
  {
    id: 2,
    title: "Title number two",
    description: "Description number 2",
    image: require("../../assets/images/me.jpeg"),
  },
  {
    id: 3,
    title: "Title number three",
    description: "Description number three",
    image: require("../../assets/images/me.jpeg"),
  },
];

export default function MessagesScreen() {
    const [messages, setMessages] = useState<Message[]>(initialMessages)
    const [refreshing, setRefreshing] = useState(false)
   const handleDelete = (message:Message) => {
    setMessages(messages.filter((m) => m.id !== message.id))
   }

 

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(messages) => messages.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message Selected",item)}
            renderRightActions={() =><ListItemDeleteAction onPress={() => handleDelete(item) }/>}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() => setMessages([
            {
                id: 3,
                title: "Title number three",
                description: "Description number three",
                image: require("../../assets/images/me.jpeg"),
              }
        ])}

      />
    </Screen>
  );
}
