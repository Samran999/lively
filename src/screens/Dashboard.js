import React from 'react'
import Background from '../components/Background'
import ImageContainer from '../components/ImageContainer'
import { View, FlatList } from 'react-native'
import BackButton from '../components/BackButton'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import ProfileScreen from './ProfileScreen';

export default function Dashboard() {
  return (
    
        <View>
          <ImageContainer image="rol " description="Live Unboxing of Mobile Phone" />
          <ImageContainer image="rolling ball.jpg" description="Live Unboxing of Mobile Phone" />
          <ImageContainer image="rolling ball.jpg" description="Live Unboxing of Mobile Phone" />
          {/* <ImageContainer image="rolling " description="Live Unboxing of Mobile Phone" />
          <ImageContainer image="rolling ball.jpg" description="Live Unboxing of Mobile Phone" />
          <ImageContainer image="rolling ball.jpg" description="Live Unboxing of Mobile Phone" />
          <ImageContainer image="rolling " description="Live Unboxing of Mobile Phone" />
          <ImageContainer image="rolling ball.jpg" description="Live Unboxing of Mobile Phone" />
          <ImageContainer image="rolling ball.jpg" description="Live Unboxing of Mobile Phone" /> */}
          
        </View>
        
  )
}






