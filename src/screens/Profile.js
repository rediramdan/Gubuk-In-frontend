import React, {useEffect, useState} from 'react';
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

import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import {removeAuthCreator} from '../redux/actions/authAction';
import {FlatList} from 'react-native-gesture-handler';
import {Rating, AirbnbRating} from 'react-native-ratings';
import HeaderComponent from '../components/HeaderComponent';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-picker';

import {putUserImageProfile} from '../utils/http';

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

const options = {
  title: 'Pilih Poto Profil',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const onEditPic = (auth) => {
  ImagePicker.showImagePicker(options, async (response) => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    } else {

      var image_profile = new FormData();
      image_profile.append("file", {
        name: response.fileName,
        type: 'image/jpeg/jpg',
        uri: response.uri, 
      });
      const id_user = auth.user.id
      const {token} = auth
      console.log({image_profile,id_user,token})
      await putUserImageProfile({image_profile,id_user,token}).then((ress)=>{
        console.log(ress)
      }).catch((e)=>{
        console.log(e)
      })
    }
  });
}

const Profile = ({navigation, removeAuth, auth}) => {
  const [source, setSource] = useState(auth.user.image_profile);
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
                uri: source,
              }}
            />
            <TouchableOpacity style={{width:50, height:30, marginTop:-35, marginLeft:90}} onPress={()=>{
              onEditPic(auth)
            }}>
              <IconM name="square-edit-outline" size={22} color={'rgba(0,0,0,0.3)'} />
            </TouchableOpacity>
            <Text style={{color: 'rgba(0,0,0,0.8)'}}>{auth.user.name}</Text>
          </View>
          <View>
            <List>
              <ListItem itemHeader style={{marginBottom: -25, marginTop: 20}}>
                <Text>DETAIL</Text>
              </ListItem>
              <ListItem>
                <Text>{auth.user.email}</Text>
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
                            onPress: async () => {
                              await AsyncStorage.clear();
                              removeAuth();
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

const mapDispatchToProps = (dispatch) => {
  return {
    removeAuth: (body) => {
      dispatch(removeAuthCreator());
    },
  };
};

const mapStateToProps = ({auth}) => {
  return {
    auth,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
