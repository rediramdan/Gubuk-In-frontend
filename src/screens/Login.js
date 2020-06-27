import React from 'react';
import {Container, Content, Text, Item, Input, Button, Icon, Spinner} from 'native-base';
import {View, Dimensions, TouchableOpacity, ToastAndroid} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import {addAuthCreator} from '../redux/actions/authAction';
import {postLogin} from '../utils/http';

const {width, height} = Dimensions.get('window');
class Login extends React.Component {
  state = {
    passwordSecure: true,
    email: '',
    password: '',
    emailError: false,
    passwordError: false,
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
    const {email, password, emailError, passwordError} = this.state;
    if (!emailError && !passwordError) {
      this.setLoading(true);
      await postLogin({email, password})
        .then(async (response) => {
          this.setLoading(false);
          const {token, refreshToken, email} = response.data.data;
          const user = response.data.data;
          await AsyncStorage.setItem('_user', JSON.stringify(user));
          this.props.addAuth({token, email, refreshToken, user})
          this.props.navigation.navigate('Home');
        })
        .catch((e) => {
          this.setLoading(false);
          ToastAndroid.showWithGravity(
            "Email atau password salah",
            ToastAndroid.SHORT,
            ToastAndroid.TOP
          );
          console.log('ERROR', e);
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
                Login
              </Text>
            </View>
            <View style={{paddingHorizontal: 20}}>
              <Item
                style={{
                  backgroundColor: emailError
                    ? 'rgba(255,0,0,0.1)'
                    : 'rgba(255,255,255,0.5)',
                  borderRadius: 12,
                  paddingHorizontal: 10,
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
                  <Text>Login</Text>
                </Button>
              )}
              <Text
                style={{
                  justifyContent: 'center',
                  color: 'rgba(0,0,0,0.4)',
                  textAlign: 'center',
                  marginTop: 20,
                }}>
                Belum punya akun ?
              </Text>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('Register');
                }}>
                <Text
                  style={{
                    justifyContent: 'center',
                    color: 'rgba(0,0,0,0.4)',
                    textAlign: 'center',
                    fontSize: 14,
                    textDecorationLine: 'underline',
                  }}>
                  Register
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addAuth: (body) => {
      dispatch(addAuthCreator(body));
    },
  };
};

export default connect(null, mapDispatchToProps)(Login);
