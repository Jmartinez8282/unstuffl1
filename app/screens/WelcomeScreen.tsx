import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
        <ImageBackground source={require('../../assets/images/LivingRoom.jpg')} style={styles.welcomeBackground}>
        <View style={styles.logoContainer}>
        <Text>Unstuf</Text>
        <Image 
        source={require('../../assets/images/UnStuffLogo.png')}
        style={styles.logo}
        />

        </View>

        <View style={styles.loginButton}></View>
        <View style={styles.registerButton}></View>

        </ImageBackground>
       

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',

    },
    welcomeBackground: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    loginButton: {
        width:"100%",
        height: 70,
        backgroundColor: '#fc5c65'
    },
    registerButton: {
        width:"100%",
        height: 70,
        backgroundColor: '#54a0ff'
    },
    logo: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: 5,
    },
    logoContainer: {
        position: 'absolute',
        top: 30,
        alignItems: 'center',
       
    }
})