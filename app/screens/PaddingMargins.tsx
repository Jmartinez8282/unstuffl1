import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PaddingMargins() {
  return (
    <View style={styles.container}>
    <View style={styles.blueBox}>

      <View style={styles.goldBox}></View>
    </View>
    <View style={styles.redBox}></View>
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
        padding: 25,
        paddingHorizontal: 20,
        paddingLeft: 30,
        
        
       
       
        
    },
    goldBox: {
        width: 50,
        height: 50,
        backgroundColor: 'gold',
        
    },
    redBox: {
      backgroundColor: 'tomato',
      width: 100,
      height: 100,
      margin: 20,
      
    }
})