import React from 'react';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Content,
  Input,
  List,
  ListItem,
  TabHeading,
  Title,
  CardItem,
  Item,
  Fab,
  Tabs,
  Tab,
  ScrollableTab,
  Text,
  Thumbnail,
} from 'native-base';
import {StyleSheet, View, Dimensions, TouchableOpacity} from 'react-native';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import {FlatList} from 'react-native-gesture-handler';
import {Rating, AirbnbRating} from 'react-native-ratings';
import * as Progress from 'react-native-progress';
import HeaderComponent from '../components/HeaderComponent';

const {width, height} = Dimensions.get('window');
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
  banner: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 25,
    backgroundColor: '#5E94FF',
    minHeight: 170,
  },
  textBanner1: {
    fontSize: 18,
    color: 'white',
  },
  textBanner: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  avatarBanner: {
    position: 'absolute',
    top: -10,
    right: 10,
    height: 135,
    width: 135,
    borderRadius: 0,
  },
  carditem: {
    paddingTop: 5,
  },
  left: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    paddingBottom: 10,
  },
  thumb: {
    width: 90,
    height: 130,
    borderRadius: 5,
    marginLeft: 20,
    marginRight: 20,
  },
});

const BukuSaya = ({navigation}) => {
  return (
    <Container>
      <HeaderComponent
        navigation={navigation}
        title={'Buku saya'}
        icon={'book'}
      />
      <Content>
        <View style={styles.banner}>
          <View style={{marginTop: 5}}>
            <Thumbnail
              style={styles.avatarBanner}
              source={require('../images/gubuk3a.png')}
            />
            <View style={{marginTop: 0}}>
              <Text style={{fontWeight: 'bold', color: 'white', fontSize: 17}}>
                Buku Terjual
              </Text>
              <Text style={{color: 'rgba(255,255,255,0.7)', fontSize: 22}}>
                25
              </Text>
            </View>
            <View style={{width: 130, marginTop: 8}}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  marginBottom: 5,
                  fontWeight: 'bold',
                }}>
                Storage
              </Text>
              <Text style={{fontSize: 10, color: 'white', marginBottom:2}}>0,9 MB / 10MB</Text>
              <Progress.Bar progress={0.5} width={140} color="white" />
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: -15,
            backgroundColor: 'white',
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}>
          <View style={{height:10}}>
              <View
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 50,
                  backgroundColor: '#2469EF',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'absolute',
                  right: 20,
                  top: -35,
                  shadowColor: 'black',
                  shadowOffset: {
                    width: 9,
                    height: 20,
                  },
                  shadowOpacity: 1,
                  shadowRadius: 0.14,
                  elevation: 12,
                }}>
                <TouchableOpacity onPress={()=>{navigation.navigate('AddBook')}}>
                <Icon name="add" style={{color: 'white'}} />
            </TouchableOpacity>
              </View>
          </View>
          <List>
            <ListItem itemHeader style={{marginBottom: -25, marginTop: 0}}>
              <Text>BUKU SAYA</Text>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail
                  style={{width: 45, borderRadius: 3}}
                  square
                  source={{uri: 'https://placeimg.com/140/140/any'}}
                />
              </Left>
              <Body>
                <Text>Buku pengetahuan</Text>
                <Text note numberOfLines={1}>
                  25 terjual
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Detail</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail
                  style={{width: 45, borderRadius: 3}}
                  square
                  source={{uri: 'https://placeimg.com/140/140/any'}}
                />
              </Left>
              <Body>
                <Text>Buku pengetahuan</Text>
                <Text note numberOfLines={1}>
                  25 terjual
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Detail</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail
                  style={{width: 45, borderRadius: 3}}
                  square
                  source={{uri: 'https://placeimg.com/140/140/any'}}
                />
              </Left>
              <Body>
                <Text>Buku pengetahuan</Text>
                <Text note numberOfLines={1}>
                  25 terjual
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Detail</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail
                  style={{width: 45, borderRadius: 3}}
                  square
                  source={{uri: 'https://placeimg.com/140/140/any'}}
                />
              </Left>
              <Body>
                <Text>Buku pengetahuan</Text>
                <Text note numberOfLines={1}>
                  25 terjual
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Detail</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail
                  style={{width: 45, borderRadius: 3}}
                  square
                  source={{uri: 'https://placeimg.com/140/140/any'}}
                />
              </Left>
              <Body>
                <Text>Buku pengetahuan</Text>
                <Text note numberOfLines={1}>
                  25 terjual
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Detail</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail
                  style={{width: 45, borderRadius: 3}}
                  square
                  source={{uri: 'https://placeimg.com/140/140/any'}}
                />
              </Left>
              <Body>
                <Text>Buku pengetahuan</Text>
                <Text note numberOfLines={1}>
                  25 terjual
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Detail</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </View>
      </Content>
    </Container>
  );
};

export default BukuSaya;
