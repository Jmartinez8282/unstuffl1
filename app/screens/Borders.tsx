import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Borders() {
  return (
    <View style={styles.container}>
    <View style={styles.blueBox}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    blueBox: {
        width: 100,
        height: 100,
        backgroundColor: 'dodgerblue',
        borderWidth: 10,
        borderColor: 'royalblue',
        borderRadius: 20,
        borderTopWidth: 20,
        borderTopLeftRadius: 50
        
    }
})