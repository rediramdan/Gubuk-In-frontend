import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Container, Content, Spinner} from 'native-base';
import {connect} from 'react-redux';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import {getAllBooks} from '../utils/http';
import {addBooksCreator} from '../redux/actions/bookAction';
import {addAuthCreator, removeAuthCreator} from '../redux/actions/authAction';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  content: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  textTitle: {
    fontSize: 26,
    fontFamily: 'Comfortaa-Bold',
    color: '#5E94FF',
  },
  textSubTitle: {
    color: '#5E94FF',
  },
});

const Splash = ({navigation, addBooks, addAuth, removeAuth}) => {
  useEffect( async () => {
    const email = await AsyncStorage.getItem('_email');
    const user = await AsyncStorage.getItem('_user');
    await getAllBooks().then((response) => {
      addBooks(response.data);
      if(email !== null){
        if(email === 'verified'){
          if(user !== null){
            const userVal = JSON.parse(user);
            const {token, email, refreshToken} = userVal
            addAuth({token, email, refreshToken, user:userVal})
            navigation.navigate('Home');
          }else{
            navigation.navigate('Login');
          }
        }else{
          navigation.navigate('Verify');
        }
      }else{
        navigation.navigate('Landing');
      }
    }).catch((e)=>{
      console.log(e);
    });
  });

  return (
    <Container style={styles.container}>
      <Content contentContainerStyle={styles.content}>
        <Text style={styles.textTitle}>Gubuk-In</Text>
        <Spinner color="#5E94FF" />
      </Content>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBooks: (body) => {
      dispatch(addBooksCreator(body));
    },
    addAuth: (body) => {
      dispatch(addAuthCreator(body));
    },
    removeAuth: (body) => {
      dispatch(removeAuthCreator());
    },
  };
};

export default connect(null, mapDispatchToProps)(Splash);
