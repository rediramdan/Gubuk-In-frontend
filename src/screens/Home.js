import React, {useEffect} from 'react';
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
  TabHeading,
  Title,
  CardItem,
  Item,
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
import HeaderComponent from '../components/HeaderComponent';

import {connect} from 'react-redux';

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
    top: 5,
    right: 15,
    height: 130,
    width: 205,
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

const Home = ({navigation, booksPremium}) => {
  useEffect(()=>{
    console.log(booksPremium)
  })
  return (
    <Container>
      <HeaderComponent
        navigation={navigation}
        title={'Gubuk-In'}
        icon={'bookmark-multiple'}
      />
      <Content>
        <View style={styles.banner}>
          <Text style={styles.textBanner1}>Selamat datang</Text>
          <Text style={styles.textBanner}>Redi ramdan</Text>
          <Thumbnail
            style={styles.avatarBanner}
            source={require('../images/bg.png')}
          />
          <View style={{marginTop: 25}}>
            <Item
              style={{
                backgroundColor: 'rgba(255,255,255,0.9)',
                borderRadius: 5,
                paddingHorizontal: 20,
                height: 44,
              }}
              onPress={(e) => {
                e.preventDefault();
                navigation.navigate('Search');
              }}>
              <Input
                disabled
                style={{fontSize: 15}}
                placeholder="Cari buku "
                placeholderTextColor={'rgba(0,0,0,0.4)'}
              />
            </Item>
          </View>
        </View>
        <View
          style={{
            marginTop: -15,
            backgroundColor: 'white',
            paddingTop: 15,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}>
          <Text style={{marginLeft: 23, marginBottom: 10}}>Terbaru</Text>
          <FlatList
            style={{width: width, paddingHorizontal: 15}}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={[1, 2, 3, 4]}
            renderItem={({item}) => (
              <View
                style={{
                  width: 110,
                  height: 160,
                  backgroundColor: 'rgba(0,0,0,0.3)',
                  borderRadius: 5,
                  marginRight: 15,
                }}
              />
            )}
            keyExtractor={(item) => item.toString()}
          />
        </View>
        <View>
          <Tabs
            style={{marginTop: 20}}
            tabBarUnderlineStyle={{backgroundColor: '#5E94FF'}}
            springFriction>
            <Tab
              heading="Gratis"
              tabStyle={{backgroundColor: 'white'}}
              activeTabStyle={{backgroundColor: 'white'}}
              textStyle={{color: 'black'}}
              activeTextStyle={{color: 'black'}}>
              <View style={{paddingTop: 20}}>
                {booksPremium.data.map((book) => {
                  return (
                    <TouchableOpacity onPress={() => {}}>
                      <CardItem style={styles.carditem}>
                        <Left style={styles.left}>
                          <Thumbnail
                            square
                            style={styles.thumb}
                            source={{
                              uri: 'http://3.92.162.78:8080/image/'+book.image,
                            }}
                          />
                          <Body>
                            <Text numberOfLines={2}>
                              {book.title}
                            </Text>
                            <Text note numberOfLines={1}>
                              Rp. {book.price}
                            </Text>
                            <Text note>Ilmu pengetahuan</Text>
                            <View style={{alignItems: 'flex-start'}}>
                              <Rating
                                readonly={true}
                                ratingCount={5}
                                startingValue={0}
                                showRating={false}
                                imageSize={16}
                                style={{paddingVertical: 10}}
                              />
                              <Text style={{color: 'rgba(0,0,0,0.4)', fontSize: 12, marginTop:-8}}>0 / 5</Text>
                            </View>
                          </Body>
                        </Left>
                      </CardItem>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </Tab>
            <Tab
              heading="Premium"
              tabStyle={{backgroundColor: 'white'}}
              activeTabStyle={{backgroundColor: 'white'}}
              textStyle={{color: 'black'}}
              activeTextStyle={{color: 'black'}}>
              <View style={{paddingTop: 20}}>
                <TouchableOpacity onPress={() => {}}>
                  <CardItem style={styles.carditem}>
                    <Left style={styles.left}>
                      <Thumbnail
                        square
                        style={styles.thumb}
                        source={{
                          uri: 'https://placeimg.com/140/140/any',
                        }}
                      />
                      <Body>
                        <Text numberOfLines={2}>
                          Ilmu Pengetahuan Alam kelas XII SMA
                        </Text>
                        <Text note numberOfLines={1}>
                          Redi ramdan
                        </Text>
                        <Text note>Ilmu pengetahuan</Text>
                        <View style={{alignItems: 'flex-start'}}>
                          <Rating
                            readonly={true}
                            ratingCount={5}
                            startingValue={3.5}
                            showRating={false}
                            imageSize={20}
                            style={{paddingVertical: 10}}
                          />
                        </View>
                      </Body>
                    </Left>
                  </CardItem>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}}>
                  <CardItem style={styles.carditem}>
                    <Left style={styles.left}>
                      <Thumbnail
                        square
                        style={styles.thumb}
                        source={{
                          uri: 'https://placeimg.com/140/140/any',
                        }}
                      />
                      <Body>
                        <Text numberOfLines={2}>
                          Ilmu Pengetahuan Alam kelas XII SMA
                        </Text>
                        <Text note numberOfLines={1}>
                          Redi ramdan
                        </Text>
                        <Text note>Ilmu pengetahuan</Text>
                        <View style={{alignItems: 'flex-start'}}>
                          <Rating
                            readonly={true}
                            ratingCount={5}
                            startingValue={3.5}
                            showRating={false}
                            imageSize={20}
                            style={{paddingVertical: 10}}
                          />
                        </View>
                      </Body>
                    </Left>
                  </CardItem>
                </TouchableOpacity>
              </View>
            </Tab>
          </Tabs>
        </View>
      </Content>
    </Container>
  );
};

const mapStateToProps = ({book}) => {
  const {booksPremium} = book;
  return {
    booksPremium,
  };
};

export default connect(mapStateToProps)(Home);
