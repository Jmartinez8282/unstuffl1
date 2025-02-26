import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppButton from '../components/AppButton'
import colors from '../config/colors'

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
        <ImageBackground blurRadius={10} source={require('../../assets/images/LivingRoom.jpg')} style={styles.welcomeBackground}>
        <View style={styles.logoContainer}>
        <Image 
        source={require('../../assets/images/UnStuffLogo.png')}
        style={styles.logo}
        />
        <Text style={styles.logoText}>Unstuf your life !</Text>

        </View>

        <View style={styles.buttonContainer}>

       <AppButton title="Login" onPress={() => alert("LoggedIn")}/>
       <AppButton title="Register" onPress={() => alert("Registered")} color="secondary"/>
       
        </View>


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
    
    registerButton: {
        width:"100%",
        height: 70,
        backgroundColor: '#54a0ff'
    },
    logo: {
        width: 100,
        height: 100,
        // position: 'absolute',
        top: 5,
    },
    logoContainer: {
        position: 'absolute',
        top: 5,
        alignItems: 'center',
        
       
    },
    logoText: {
        fontSize: 28,
        fontWeight: 500,
        top: 5,
        color: colors.dark
    },
    buttonContainer: {
        padding: 20,
        width: '100%',
        
    }
})