import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'

interface Props {
    children:React.ReactNode
}

export default function Screen({children}:Props) {
    console.log(Constants.statusBarHeight)
  return (
    <View  style={styles.screen}>
     {children}
    </View>
  )
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight
    }
})