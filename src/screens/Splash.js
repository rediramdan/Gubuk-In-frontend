import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Container, Content, Spinner} from 'native-base';
import {connect} from 'react-redux';

import {getAllBooks} from '../utils/http';
import {addBooksCreator} from '../redux/actions/bookAction';

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
    fontWeight: 'bold',
    color: '#5E94FF',
  },
  textSubTitle: {
    color: '#5E94FF',
  },
});

const Splash = ({navigation, addBooks}) => {
  useEffect(() => {
    getAllBooks().then((response) => { 
      addBooks(response.data);
      navigation.navigate('Landing');
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

const mapDispatchToProps = dispatch => {
  return {
    addBooks: body => {
      dispatch(addBooksCreator(body));
    },
  };
};

export default connect(null,mapDispatchToProps)(Splash);
