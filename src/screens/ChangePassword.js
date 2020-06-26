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

class ChangeProfile extends React.Component {

  state = {
    passwordSecure: true,
    passwordSecureRepeat: true,
    passwordRepeat: '',
    password: '',
    passwordErrorRepeat: false,
    passwordError: false,
    passwordMessageRepeat: '',
    passwordMessage: '',
    isLoading: false,
  };

   onChangeSecure = () => {
    this.setState({
      passwordSecure: !this.state.passwordSecure,
    });
  };

  onChangeSecureRepeat = () => {
    this.setState({
      passwordSecureRepeat: !this.state.passwordSecureRepeat,
    });
  };


  onChange = (val, name) => {
    const key = name;
    const error = key + 'Error';
    const message = key + 'Message';
    if (val !== '') {
      this.setState({
        [error]: false,
      });
    } else {
      this.setState({
        [error]: true,
        [message]: 'Ini wajib diisi',
      });
    }
    this.setState({
      [key]: val,
    });
  };

  render(){

    const {
      password,
      passwordRepeat,
      passwordError,
      passwordErrorRepeat,
      passwordSecure,
      passwordSecureRepeat,
      isLoading,
      passwordMessage,
      passwordMessageRepeat,
    } = this.state;

     return (
    <Container>
       <Header style={styles.header} androidStatusBarColor={'#2469EF'}>
        <Left style={{paddingLeft: 10}}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Profile');
            }}>
            <IconM name="arrow-left" size={21} color={'white'} />
          </TouchableOpacity>
        </Left>
        <Body>
          <Title style={styles.brand}>Ubah Password</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <View style={{paddingTop: 20}}>
          
          <View style={{marginTop: 80}}>
             <View style={{paddingHorizontal: 20,}}>
             
              


              <Item
                style={{
                  backgroundColor: passwordError
                    ? '#FFC7C7'
                    : '#E4E4E4',
                  borderRadius: 12,
                  paddingHorizontal: 10,
                  marginTop: 10,
                }}>
                <Input
                  secureTextEntry={passwordSecure}
                  onChangeText={(e) => {
                    this.onChange(e, 'password');
                  }}
                  value={password}
                  placeholder="Kata Sandi"
                  style={{color: 'rgba(0,0,0,0.6)'}}
                  placeholderTextColor={'rgba(0,0,0,0.3)'}
                />
                <Icon
                  name={passwordSecure ? 'eye-off' : 'eye'}
                  onPress={this.onChangeSecure}
                />
              </Item>
              {passwordError ? (
                <Text
                  note
                  style={{
                    marginLeft: 15,
                    color: 'rgba(255,0,0,0.7)',
                    fontSize: 12,
                  }}>
                  {passwordMessage}
                </Text>
              ) : null}


              <Item
                style={{
                  backgroundColor: passwordErrorRepeat
                    ? '#FFC7C7'
                    : '#E4E4E4',
                  borderRadius: 12,
                  paddingHorizontal: 10,
                  marginTop: 10,
                }}>
                <Input
                  secureTextEntry={passwordSecureRepeat}
                  onChangeText={(e) => {
                    this.onChange(e, 'passwordRepeat');
                  }}
                  value={passwordRepeat}
                  placeholder="Ulangi Kata Sandi"
                  style={{color: 'rgba(0,0,0,0.6)'}}
                  placeholderTextColor={'rgba(0,0,0,0.3)'}
                />
                <Icon
                  name={passwordSecureRepeat ? 'eye-off' : 'eye'}
                  onPress={this.onChangeSecureRepeat}
                />
              </Item>
              {passwordErrorRepeat ? (
                <Text
                  note
                  style={{
                    marginLeft: 15,
                    color: 'rgba(255,0,0,0.7)',
                    fontSize: 12,
                  }}>
                  {passwordMessageRepeat}
                </Text>
              ) : null}
             
              <Button
                style={{
                  justifyContent: 'center',
                  marginTop: 20,
                  backgroundColor: '#2469EF',
                  borderRadius: 12,
                }}>
                <Text>Ubah</Text>
              </Button>
             
            </View>
          </View>
        </View>
      </Content>
    </Container>
  );
  }
}
 


export default ChangeProfile;
