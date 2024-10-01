import { View, Text, StyleSheet, Image, Alert } from 'react-native'
import React, { FC, useEffect } from 'react'
import { Colors } from '@utils/Constants'
// import Logo from '@assets/images/amreetam.png'
import Logo from '@assets/images/splash_logo.jpeg'
import { screenHeight, screenWidth } from '@utils/Scalling'

import GeoLocation from '@react-native-community/geolocation'
import Geolocation from '@react-native-community/geolocation'


GeoLocation.setRNConfiguration({
  skipPermissionRequests:false,
  authorizationLevel:'always',
  enableBackgroundLocationUpdates:true,
  locationProvider:'auto'
})


const SplashScreen: FC = () => {


    // useEffect(()=>{
    //   const fetchUserLocation = async () =>{
    //     try {
    //       Geolocation.requestAuthorization()

    //     } catch (error) {
    //       Alert.alert("Sorry we need location service to give you better shopping experience ")
          
    //     }
    //     const timeoutId = setTimeout(fetchUserLocation,1000)
    //     return
    //   }})

    


  return (
    <View style={styles.container}>
  <Image source={Logo} style={styles.logoImage}/>  
    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    backgroundColor:Colors.primary,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  logoImage:{
    height:screenHeight * 0.7 ,
    width : screenWidth * 0.7,
    resizeMode:'contain'

  }
})

export default SplashScreen