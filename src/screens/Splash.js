import React, {useEffect} from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import {
  Container,
  Content,
  Spinner
} from "native-base"
import Cover from '../images/bg.png'



const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
   },
    content: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center'
    },
   textTitle: {
    fontSize: 35,
    color: '#2469EF'
   },
   textSubTitle: {
    color: '#2469EF'
   }
});

const Splash = ({navigation}) => {
	useEffect(() => {
		setTimeout(() => {
			navigation.replace('Landing');
		}, 3000);
	})
	return (
		<Container style={styles.container}>
		    <Content contentContainerStyle={styles.content}>
		    	<Image style={{width: 300, height: 200, backgroundColor: 'white'}} source={require('../images/splash.png')}/>
		    	<Text style={styles.textTitle}>Gubuk-In</Text>
		    	<Spinner  color='blue' />
		    </Content>
		  </Container>
	)
}


export default Splash;