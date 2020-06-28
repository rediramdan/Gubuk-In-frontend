import React from 'react';
import {Container, Content, Text, Item, Input, Button, Icon} from 'native-base';
import {View, Dimensions, TouchableOpacity, ToastAndroid} from 'react-native';
const {width, height} = Dimensions.get('window');
import {postForgot} from '../utils/http';

class Forgot extends React.Component {
  state = {
    email: '',
    emailError: false,
    emailMessage: '',
    isLoading: false,
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
    const {email, emailError} = this.state;
    if (!emailError) {
      this.setLoading(true);
      await postForgot({email})
        .then(async (response) => {
          this.setLoading(false);
          console.log('forgot', response.data.status);
         // const {email} = response.data.data;
          this.props.navigation.navigate('Login');
        })
        .catch((error) => {
          this.setLoading(false);
          ToastAndroid.showWithGravity(
            "Email salah",
            ToastAndroid.SHORT,
            ToastAndroid.TOP
          );
          console.log('ERROR', {error});
        });
    }
  };

  render() {
    const {
      email,
      emailError,
      isLoading,
    } = this.state;
    return (
      <Container>
        <Content style={{backgroundColor: '#5E94FF'}}>
          <View style={{height: height - 25, justifyContent: 'center'}}>
            <View style={{alignItems: 'center', paddingBottom: 30}}>
              <Text style={{color: 'white', fontSize: 26, fontWeight: 'bold',}}>
                 Forgot?
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
             
              <Button
                style={{
                  justifyContent: 'center',
                  marginTop: 20,
                  backgroundColor: '#2469EF',
                  borderRadius: 12,
                }}
               onPress={()=>{this.onSubmit()}}
                >
                <Text>Forgot</Text>
              </Button>
             
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}
export default Forgot;
