import React from 'react';
import {View, TextInput, Dimensions, StyleSheet} from 'react-native';
import {Text, Button, Container, Content} from 'native-base';
const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  inputVer: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: 10,
    color: 'rgba(0,0,0,0.5)',
    paddingLeft: -7,
    fontSize: 24,
    fontWeight: 'bold',
    borderRadius: 10,
    marginHorizontal: 5,
    borderWidth: 0,
    textAlign: 'center',
  },
});
export default class Verify extends React.Component {
  constructor(props) {
    super(props);
    this.first = React.createRef();
    this.one = React.createRef();
    this.two = React.createRef();
    this.three = React.createRef();
    this.four = React.createRef();
    this.five = React.createRef();
    this.six = React.createRef();
  }

  setIsAutofocus = (focus) => {
    this.setState({
      isAutofocus: focus,
    });
  };

  render() {
    return (
      <Container>
        <Content
          style={{
            flex: 1,
            backgroundColor: '#5E94FF',
          }}>
          <View
            style={{
              minHeight: height,
              backgroundColor: '#5E94FF',
              justifyContent: 'center',
            }}>
            <View style={{minHeight: 200}}>
              <View
                style={{
                  alignItems: 'center',
                }}>
                <Text
                  style={{color: 'white', fontSize: 22, fontWeight: 'bold'}}>
                  Masukan kode verifikasi
                </Text>
                <Text style={{color: 'rgba(255,255,255,0.6)', fontSize: 12}}>
                  Check email kamu untuk dapatkan kode verifikasi
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginVertical: 40,
                }}>
                <TextInput
                  style={styles.inputVer}
				  autoFocus={true}
				  ref={this.first}
                  onKeyPress={(e) => {
                    if(e.nativeEvent.key === 'Backspace'){
						this.first.current.focus();
					}else{
						this.one.current.focus();
					}
                  }}
                  maxLength={1}
                  keyboardType="number-pad"
                />
                <TextInput
                  style={styles.inputVer}
                  ref={this.one}
                  onKeyPress={(e) => {
					if(e.nativeEvent.key === 'Backspace'){
						this.first.current.focus();
					}else{
						this.two.current.focus();
					}
                  }}
                  maxLength={1}
                  keyboardType="number-pad"
                />
                <TextInput
                  style={styles.inputVer}
                  ref={this.two}
                  onKeyPress={(e) => {
                    if(e.nativeEvent.key === 'Backspace'){
						this.one.current.focus();
					}else{
						this.three.current.focus();
					}
                  }}
                  maxLength={1}
                  keyboardType="number-pad"
                />
                <TextInput
                  style={styles.inputVer}
                  ref={this.three}
                  onKeyPress={(e) => {
                    if(e.nativeEvent.key === 'Backspace'){
						this.two.current.focus();
					}else{
						this.four.current.focus();
					}
                  }}
                  maxLength={1}
                  keyboardType="number-pad"
                />
                <TextInput
                  style={styles.inputVer}
                  ref={this.four}
                  onKeyPress={(e) => {
                    if(e.nativeEvent.key === 'Backspace'){
						this.three.current.focus();
					}else{
						this.five.current.focus();
					}
                  }}
                  maxLength={1}
                  keyboardType="number-pad"
                />
                <TextInput
				  style={styles.inputVer}
				  ref={this.five}
                  onKeyPress={(e) => {
                    if(e.nativeEvent.key === 'Backspace'){
						this.four.current.focus();
					}
                  }}
                  maxLength={1}
                  keyboardType="number-pad"
                />
              </View>
              <Button
                style={{
                  justifyContent: 'center',
                  backgroundColor: '#2469EF',
                  borderRadius: 12,
                  width: 300,
                  marginLeft: 30,
                }}>
                <Text>Verifikasi</Text>
              </Button>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}
