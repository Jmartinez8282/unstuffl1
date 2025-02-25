import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Shadows() {
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
        shadowColor: 'grey',
        shadowOffset: {width: 10, height: 10},
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 20
       
        
    }
})