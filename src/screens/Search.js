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
} from 'native-base';
import {StyleSheet, View, Dimensions, TouchableOpacity} from 'react-native';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import {FlatList} from 'react-native-gesture-handler';
import {Rating, AirbnbRating} from 'react-native-ratings';

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

const Search = ({navigation}) => {
  return (
    <Container>
      <Header style={styles.header} androidStatusBarColor={'#2469EF'}>
        <Left>
            <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                 <IconM name="arrow-left" size={24} color={'white'} />
            </TouchableOpacity>
        </Left>
        <Body style={{marginLeft:-80}}>
          <Item
            style={{
              backgroundColor: 'rgba(255,255,255,0.9)',
              borderRadius: 5,
              paddingHorizontal: 20,
              height: 40,
              width: '100%',
            }}>
            <Input
              autoFocus
              onTouchStart={(e) => {
                e.preventDefault();
                navigation.navigate('Search');
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

export default Search;