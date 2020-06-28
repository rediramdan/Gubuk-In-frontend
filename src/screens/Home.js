import React, {useEffect} from 'react';
import {
  Container,
  Content,
  Input,
  Item,
  Tabs,
  Tab,
  Text,
  Thumbnail,
} from 'native-base';
import {StyleSheet, View, Dimensions, TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Rating} from 'react-native-ratings';
import HeaderComponent from '../components/HeaderComponent';
import BookItem from '../components/BookItem';

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
    fontSize: 15,
    fontFamily: 'Comfortaa-Bold',
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

const Home = ({navigation, booksPremium, booksFree, auth}) => {
  return (
    <Container>
      <HeaderComponent navigation={navigation} title={'Gubuk-In'} icon={''} />
      <Content>
        <View style={styles.banner}>
          <Text style={styles.textBanner1}>Selamat datang</Text>
          <Text style={styles.textBanner}>{auth.user.name || "Di Gubuk-In"}</Text>
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
            style={{width: width, paddingHorizontal: 25}}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={booksPremium.data}
            renderItem={({item}) => (
              <TouchableOpacity
                style={{
                  width: 110,
                  minHeight: 160,
                  marginRight: 15,
                  alignItems: 'flex-start',
                }}
                onPress={()=>{navigation.navigate('Detail', {book: item})}}>
                <Thumbnail
                  square
                  style={{
                    width: 110,
                    height: 160,
                    borderRadius: 5,
                  }}
                  source={{
                    uri: 'http://3.92.162.78:8080/image/' + item.image,
                  }}
                />
                <View
                  style={{
                    marginTop: -40,
                    paddingBottom: 4,
                    borderBottomLeftRadius: 4,
                    borderBottomRightRadius: 4,
                    marginBottom: 10,
                    width: '100%',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                  }}>
                  <Text
                    style={{
                      marginLeft: 5,
                      color: 'rgba(0,0,0,0.7)',
                      fontSize: 15,
                      color: 'white',
                    }}
                    numberOfLines={1}>
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      marginLeft: 5,
                      color: 'rgba(0,0,0,0.7)',
                      fontSize: 11,
                      color: 'white',
                    }}>
                    {item.rating}/5
                  </Text>
                </View>
                <Rating
                  readonly={true}
                  ratingCount={5}
                  startingValue={item.rating}
                  showRating={false}
                  imageSize={16}
                  style={{marginLeft: 2}}
                  ratingBackgroundColor="#c8c7c8"
                />
              </TouchableOpacity>
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
                {booksFree.data.map((book) => {
                  return <BookItem book={book} navigation={navigation} />;
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
                {booksPremium.data.map((book) => {
                  return <BookItem book={book} navigation={navigation} />;
                })}
              </View>
            </Tab>
          </Tabs>
        </View>
      </Content>
    </Container>
  );
};

const mapStateToProps = ({book, auth}) => {
  const {booksPremium, booksFree} = book;
  return {
    booksPremium,
    booksFree,
    auth,
  };
};

export default connect(mapStateToProps)(Home);
