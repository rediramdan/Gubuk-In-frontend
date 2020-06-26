import React from 'react';
import {
  Container,
  Content,
  Form,
  Textarea,
  Item,
  Icon,
  Label,
  Input,
  Button,
  Text,
} from 'native-base';
import {View} from 'react-native';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons'

import HeaderComponent from '../components/HeaderComponent';

class AddImage extends React.Component {
  render() {
    return (
      <Container>
        <HeaderComponent
          navigation={this.props.navigation}
          title={'Add Book'}
          back={true}
        />
        <Content style={{backgroundColor: 'white'}}>
          <Form style={{paddingRight: 10, paddingTop:20, height: '100%', justifyContent: 'center'}}>
            <View style={{alignItems: 'center', marginBottom:20}}>
                <IconM name="image-plus" size={70} color={'rgba(0,0,0,0.2)'} />
                <Text style={{color: 'rgba(0,0,0,0.2)'}}>Upload cover buku</Text>
            </View>
            <Button
              style={{
                justifyContent: 'center',
                marginTop: 20,
                marginLeft:10,
                backgroundColor: '#2469EF',
                borderRadius: 12,
              }}>
              <Text>Selanjutnya</Text>
              <IconM name="arrow-right" size={21} color={'white'} />
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default AddImage;
