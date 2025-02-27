import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from '../components/AppText/AppText'
import colors from '../config/colors'
import ListItem from '../components/ListItem'

export default function ListingDetailsScreen() {
  return (
    <View >
        <Image style={styles.image} source={require('../../assets/images/jeanJacket.jpg')} />
        <View style={styles.detailsContainer}>
            <AppText style={styles.title}>Blue jean jacket for sale</AppText>
            <AppText style={styles.price}>$100</AppText>
            <View style={styles.userContainer}>
            <ListItem
                image={require('../../assets/images/me.jpeg')}
                title="Jose Martinez"
                subTitle="5 Listings"
            />

            </View>
        </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    userContainer:{
        marginVertical: 40,
    },
   
    image: {
        width: '100%',
        height: 400,
        
    },
    price: {
        color: colors.secondary,
        fontWeight: 600,
        fontSize: 26,
        marginVertical: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 700,
    },
    detailsContainer: {
        padding: 20,
    },
})