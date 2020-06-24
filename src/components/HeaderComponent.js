import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Header, Left, Body, Title, Right, Thumbnail} from 'native-base';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons'
const styles = StyleSheet.create({
  brand: {
    marginLeft: -25,
  },
  cPrimary: {
    color: '#2CA8FF',
  },
  header: {
    backgroundColor: '#2469EF',
  },
});
const HeaderComponent = ({navigation, title, icon}) => {
  return (
    <Header style={styles.header} androidStatusBarColor={'#2469EF'}>
      <Left style={{paddingLeft: 15}}>
        <IconM name={icon} size={24} color={'white'} />
      </Left>
      <Body>
        <Title style={styles.brand}>{title}</Title>
      </Body>
      <Right>
        <TouchableOpacity
          style={{marginRight: 10}}
          onPress={() => {
            navigation.navigate('Profile');
          }}>
          <Thumbnail
            style={{width: 35, height: 35}}
            source={{
              uri: 'https://placeimg.com/140/140/any',
            }}
          />
        </TouchableOpacity>
      </Right>
    </Header>
  );
};

export default HeaderComponent;
