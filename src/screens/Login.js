import React from 'react';
import {Container, Content, Text, Item, Input, Button, Icon} from 'native-base';
import {View, Dimensions, TouchableOpacity} from 'react-native';
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
              <Text style={{color: 'white', fontSize: 26, fontWeight: 'bold'}}>
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
              <Button
                style={{
                  justifyContent: 'center',
                  marginTop: 20,
                  backgroundColor: '#2469EF',
                  borderRadius: 12,
                }}>
                <Text>Login</Text>
              </Button>
              <Text
                style={{
                  justifyContent: 'center',
                  color: 'rgba(0,0,0,0.4)',
                  textAlign: 'center',
                  marginTop: 20,
                }}>
                Belum punya akun ?
              </Text>
              <TouchableOpacity onPress={()=>{
                  this.props.navigation.navigate('Register')
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
export default Login;
