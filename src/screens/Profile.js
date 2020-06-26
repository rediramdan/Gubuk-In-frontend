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
  List,
  ListItem,
} from 'native-base';
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import {FlatList} from 'react-native-gesture-handler';
import {Rating, AirbnbRating} from 'react-native-ratings';
import HeaderComponent from '../components/HeaderComponent'

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

const Profile = ({navigation}) => {
  return (
    <Container>
      <HeaderComponent navigation={navigation} title={'Profil'} back={true} />
      <Content>
        <View style={{paddingTop: 20}}>
          <View style={{alignItems: 'center'}}>
            <Thumbnail
              style={{
                width: 90,
                height: 90,
                borderRadius: 45,
                marginBottom: 10,
              }}
              source={{
                uri: 'https://placeimg.com/140/140/any',
              }}
            />
            <Text style={{color: 'rgba(0,0,0,0.5)'}}>Redi Ramdan</Text>
          </View>
          <View>
            <List>
              <ListItem itemHeader style={{marginBottom: -25, marginTop: 20}}>
                <Text>DETAIL</Text>
              </ListItem>
              <ListItem>
                <Text>rediramdan@gmail.com</Text>
              </ListItem>
              <ListItem>
                <Left>
                  <Text>Ubah profil</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem>
                <Left>
                  <Text>Ubah password</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem itemHeader style={{marginBottom: -25, marginTop: 20}}>
                <Text>LAINNYA</Text>
              </ListItem>
              <ListItem>
                <Left>
                  <Text>Upload buku</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem>
                <Left>
                  <Text>Keluar</Text>
                </Left>
                <Right>
                  <TouchableOpacity
                    onPress={() => {
                      Alert.alert(
                        'Konfirmasi',
                        'Apakah kamu ingin keluar ?',
                        [
                          {
                            text: 'Batal',
                            onPress: () => {},
                            style: 'cancel',
                          },
                          {
                            text: 'Iya',
                            onPress: () => {
                              navigation.navigate('Login');
                            },
                          },
                        ],
                        {cancelable: false},
                      );
                    }}>
                    <Icon
                      name="arrow-forward"
                      style={{width: 50, textAlign: 'right'}}
                    />
                  </TouchableOpacity>
                </Right>
              </ListItem>
            </List>
          </View>
        </View>
      </Content>
    </Container>
  );
};

export default Profile;
