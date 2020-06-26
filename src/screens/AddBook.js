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
import IconM from 'react-native-vector-icons/MaterialCommunityIcons'

import HeaderComponent from '../components/HeaderComponent';

class AddBook extends React.Component {
  render() {
    return (
      <Container>
        <HeaderComponent
          navigation={this.props.navigation}
          title={'Tambah Buku'}
          back={true}
        />
        <Content style={{backgroundColor: 'white'}}>
          <Form style={{paddingRight: 10, paddingTop:20}}>
            <Item stackedLabel>
              <Label>Judul Buku</Label>
              <Input />
            </Item>
            <Item stackedLabel style={{marginTop:10}}>
              <Label>Kategori</Label>
              <Input />
            </Item>
            <Item stackedLabel style={{borderBottomWidth: 0, marginTop: 10}}>
              <Label>Deskripsi</Label>
            </Item>
            <Textarea
              rowSpan={7}
              style={{
                marginTop: -28,
                marginLeft: 15,
                borderBottomWidth: 1,
                borderBottomColor: 'rgba(0,0,0,0.1)',
              }}
            />
            <Button
              style={{
                justifyContent: 'center',
                marginTop: 20,
                marginLeft:10,
                backgroundColor: '#2469EF',
                borderRadius: 12,
              }}
              onPress={()=>{
                  this.props.navigation.navigate('AddImage');
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

export default AddBook;
