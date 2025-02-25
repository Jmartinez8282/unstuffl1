import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function AppText() {
  return (
    <View style={styles.container}>
    <Text style={styles.customText}>welcome to react native! MOre text to this screen so we can see and test out line hight and line space</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    customText: {
      fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
      fontSize: 20,
      fontStyle: 'italic',
      fontWeight: 900,
      color: 'dogerblue',
      textTransform: 'capitalize',
   
      textAlign: 'justify',
      lineHeight: 20,
      letterSpacing: 1,
      textShadowColor: 'grey',
      textShadowOffset: {width: 2, height: 2},
      textShadowRadius: 5,
    }
})