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
  TabHeading,
  Title,
  CardItem,
  Item,
  Tabs,
  Tab,
  ScrollableTab,
  Text,
  Thumbnail,
  Spinner,
} from 'native-base';
import {StyleSheet, View, Dimensions, TouchableOpacity} from 'react-native';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import {FlatList} from 'react-native-gesture-handler';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {connect} from 'react-redux';
import {
  searchFreeBooksCreator,
  searchPremiumBooksCreator,
} from '../redux/actions/bookAction';

import BookItem from '../components/BookItem';

import { searchPremiumBooks, searchFreeBooks } from '../utils/http';

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


const Search = ({navigation, searchFreeBooksAction, searchPremiumBooksAction, searchResult}) => {
  const [isLoadingP, setLoadingP] = React.useState(false);
  const [isLoadingF, setLoadingF] = React.useState(false);
  const onSubmit = async (val) => {
    setLoadingP(true);
    setLoadingF(true);
    await searchFreeBooks(val).then((response) => {
      searchFreeBooksAction(response.data.data)
      setLoadingF(false)
    }).catch((e)=>{
      setLoadingF(false)
      console.log(e)
    })
    await searchPremiumBooks(val).then((response) => {
      searchPremiumBooksAction(response.data.data)
      setLoadingP(false)
    }).catch((e)=>{
      setLoadingP(false)
      console.log(e)
    })
  }
  return (
    <Container>
      <Header style={styles.header} androidStatusBarColor={'#2469EF'}>
        <Left>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <IconM name="arrow-left" size={24} color={'white'} />
          </TouchableOpacity>
        </Left>
        <Body style={{marginLeft: -80}}>
          <Item
            style={{
              backgroundColor: 'rgba(255,255,255,0.9)',
              borderRadius: 5,
              paddingHorizontal: 20,
              height: 40,
              width: '100%',
            }}>
            <Input
              autoFocus={true}
              onSubmitEditing={(e)=>{
                onSubmit(e.nativeEvent.text)
              }}
              style={{fontSize: 15}}
              placeholder="Cari buku "
              placeholderTextColor={'rgba(0,0,0,0.4)'}
            />
          </Item>
        </Body>
      </Header>
      <Content>
        <View>
          <Tabs
            tabBarUnderlineStyle={{backgroundColor: '#5E94FF'}}
            springFriction>
            <Tab
              heading="Gratis"
              tabStyle={{backgroundColor: 'white'}}
              activeTabStyle={{backgroundColor: 'white'}}
              textStyle={{color: 'black'}}
              activeTextStyle={{color: 'black'}}>
              <View style={{paddingTop: 20}}>
                {isLoadingF? <Spinner color="#5E94FF" /> : null}
                {searchResult.bookFree.map((book) => {
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
              {isLoadingP? <Spinner color="#5E94FF" /> : null}
                {searchResult.bookPremium.map((book) => {
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

const mapStateToProps = ({book}) => {
  const {searchResult} = book;
  return {
    searchResult,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchPremiumBooksAction: (body) => {
      dispatch(searchPremiumBooksCreator(body));
    },
    searchFreeBooksAction: (body) => {
      dispatch(searchFreeBooksCreator(body));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
