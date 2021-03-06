import React from 'react';
import {Container, Content, Text, Item, Input, Button, Icon, Spinner} from 'native-base';
import {View, Dimensions, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {postRegister} from '../utils/http';
const {width, height} = Dimensions.get('window');
class Register extends React.Component {
  state = {
    passwordSecure: true,
    email: '',
    password: '',
    emailError: false,
    passwordError: false,
    nameError: false,
    name: '',
    nameMessage: '',
    emailMessage: '',
    passwordMessage: '',
    isLoading: false,
  };

  onChangeSecure = () => {
    this.setState({
      passwordSecure: !this.state.passwordSecure,
    });
  };

  setLoading = (val) => {
    this.setState({
      isLoading: val,
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
      if (name === 'email') {
        if (
          !val.match(
            /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
          )
        ) {
          this.setState({
            [error]: true,
            [message]: 'Emal tidak valid',
          });
        }
      }
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

  onSubmit = async () => {
    const {
      name,
      email,
      password,
      emailError,
      nameError,
      passwordError,
    } = this.state;
    if (!nameError && !emailError && !passwordError) {
      this.setLoading(true);
      await postRegister({name, email, password}).then(async (res) => {
        await AsyncStorage.setItem('_email', email);
        this.setLoading(false);
        this.props.navigation.navigate('Verify');
      });
    }
  };

  render() {
    const {
      email,
      emailError,
      password,
      passwordError,
      passwordSecure,
      emailMessage,
      name,
      nameError,
      nameMessage,
      isLoading,
      passwordMessage,
    } = this.state;
    return (
      <Container>
        <Content style={{backgroundColor: '#5E94FF'}}>
          <View style={{height: height - 25, justifyContent: 'center'}}>
            <View style={{alignItems: 'center'}}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 26,
                  fontFamily: 'Comfortaa-Bold',
                }}>
                Gubuk-In
              </Text>
              <Text style={{color: 'white', fontSize: 18, marginBottom: 20}}>
                Register
              </Text>
            </View>
            <View style={{paddingHorizontal: 20}}>
              <Item
                style={{
                  backgroundColor: nameError
                    ? 'rgba(255,0,0,0.1)'
                    : 'rgba(255,255,255,0.5)',
                  borderRadius: 12,
                  paddingHorizontal: 10,
                }}>
                <Input
                  onChangeText={(e) => {
                    this.onChange(e, 'name');
                  }}
                  value={name}
                  placeholder="Nama"
                  style={{color: 'rgba(0,0,0,0.6)'}}
                  placeholderTextColor={'rgba(0,0,0,0.3)'}
                />
              </Item>
              {nameError ? (
                <Text
                  note
                  style={{
                    marginLeft: 15,
                    color: 'rgba(255,0,0,0.7)',
                    fontSize: 12,
                  }}>
                  {nameMessage}
                </Text>
              ) : null}
              <Item
                style={{
                  backgroundColor: emailError
                    ? 'rgba(255,0,0,0.1)'
                    : 'rgba(255,255,255,0.5)',
                  borderRadius: 12,
                  paddingHorizontal: 10,
                  marginTop: 10,
                }}>
                <Input
                  onChangeText={(e) => {
                    this.onChange(e, 'email');
                  }}
                  value={email}
                  placeholder="Email"
                  style={{color: 'rgba(0,0,0,0.6)'}}
                  placeholderTextColor={'rgba(0,0,0,0.3)'}
                />
              </Item>
              {emailError ? (
                <Text
                  note
                  style={{
                    marginLeft: 15,
                    color: 'rgba(255,0,0,0.7)',
                    fontSize: 12,
                  }}>
                  {emailMessage}
                </Text>
              ) : null}
              <Item
                style={{
                  backgroundColor: passwordError
                    ? 'rgba(255,0,0,0.1)'
                    : 'rgba(255,255,255,0.5)',
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
              {isLoading ? (
                <Spinner color="white" />
              ) : (
                <Button
                  style={{
                    justifyContent: 'center',
                    marginTop: 20,
                    backgroundColor: '#2469EF',
                    borderRadius: 12,
                  }}
                  onPress={()=>{this.onSubmit()}}>
                  <Text>Register</Text>
                </Button>
              )}
              <Text
                style={{
                  justifyContent: 'center',
                  color: 'rgba(0,0,0,0.4)',
                  textAlign: 'center',
                  marginTop: 20,
                }}>
                Sudah punya akun ?
              </Text>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('Login');
                }}>
                <Text
                  style={{
                    justifyContent: 'center',
                    color: 'rgba(0,0,0,0.4)',
                    textAlign: 'center',
                    fontSize: 14,
                    textDecorationLine: 'underline',
                  }}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}
export default Register;
