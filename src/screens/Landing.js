import React, {Component} from 'react';
import {View, ScrollView, Text, StyleSheet, Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { AsyncStorage } from "react-native";
import {
  Container,
  Content,
  Button,
  Footer,
  FooterTab,
  Icon,
  Card,
  CardItem,
  Thumbnail,
  Right,
  Left,
  Badge,
  Header,
  Body,
  Title
} from "native-base"

import image1 from '../images/gubuk1.png';
import image2 from '../images/gubuk3a.png';
import image3 from '../images/gubuk2.png';


const styles = StyleSheet.create({
     text: {
    fontSize: 16,
    textAlign: 'center'
  },
  content: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center'
    },
   textTitle: {
    fontSize: 25,
    marginBottom: 30,
    color: '#fff'
   },
   textSubTitle: {
    marginTop: 20,
    color: '#fff'
   }
});

const slides = [
  {
    key: '1',
    title: 'Mobile Payment',
    text: 'Nikmati transaksi pembayaran online',
    image:  image1,
    backgroundColor: '#5E94FF',
  },
  {
    key: '2',
    title: 'Temukan Banyak Buku',
    text: 'Pencarian dengan banyak buku lebih mudah',
    image: image2,
    backgroundColor: '#5E94FF',
  },
  {
    key: '3',
    title: 'Mari kita mulai',
    text: 'Apakah Anda siap maka mari kita lakukan',
    image: image3,
    backgroundColor: '#5E94FF',
  }
];


console.disableYellowBox = true;

export default class Landing extends Component {
 

   constructor(props){
    super(props);
      this.state = {
      showRealApp: false
    }
  }


  _renderItem = ({ item }) => {
    return (
     <Container style={{backgroundColor: item.backgroundColor}}>
        <Content contentContainerStyle={styles.content}>
          <Text style={styles.textTitle}>{item.title}</Text>
         <Image source={item.image} style={{width: 200, height: 215}}/>
          <Text style={styles.textSubTitle}> {item.text}</Text>
        </Content>
      </Container>
    );
  }
  _onDone = () => {
 
    this.setState({ showRealApp: true });
    this.props.navigation.navigate('Home');
  }
  render() {
      return <AppIntroSlider renderItem={this._renderItem} data={slides} onDone={this._onDone}  showSkipButton/>;       
  }
}
































