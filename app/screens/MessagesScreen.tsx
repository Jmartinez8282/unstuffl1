import { FlatList, StatusBar} from 'react-native'
import React from 'react'
import ListItem from '../components/ListItem'

import Constants from 'expo-constants'
import Screen from '../components/Screen'

const messages = [
    {
        id:1,
        title:'Title number one',
        description: 'Description one',
        image: require('../../assets/images/me.jpeg')
    },
    {
        id:2,
        title:'Title number two',
        description: 'Description number 2',
        image: require('../../assets/images/me.jpeg')
    },
    {
        id:3,
        title:'Title number three',
        description: 'Description number three',
        image: require('../../assets/images/me.jpeg')
    },
]

export default function MessagesScreen() {
  return (
   <Screen>

       <FlatList
          data={messages}
          keyExtractor={messages => messages.id.toString()}
          renderItem={({item}) => <ListItem
              title={item.title}
              subTitle={item.description}
              image={item.image}
          />}
       />

   </Screen>

  )
}

