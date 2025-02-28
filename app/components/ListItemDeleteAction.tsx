import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

interface Props {
    onPress: () => void
}


export default function ListItemDeleteAction({onPress}:Props) {
  return (
    <View style={styles.container}>
    <TouchableWithoutFeedback onPress={onPress}>
        <MaterialCommunityIcons name='trash-can' size={35} color={colors.white}/>

    </TouchableWithoutFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.danger,
        width: 70,
        justifyContent:'center',
        alignItems:'center'
    }
})