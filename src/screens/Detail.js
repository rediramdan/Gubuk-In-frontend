import React from 'react';
import {Container, Content, Text, Thumbnail} from 'native-base';
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Rating} from 'react-native-ratings';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';

const Detail = ({navigation, route}) => {
  const {book} = route.params;
  return (
    <Container>
      <Content>
        <View style={{height: 200, backgroundColor: 'black'}}>
          <ImageBackground
            style={[StyleSheet.absoluteFill, {opacity: 0.6}]}
            source={{
              //   uri: 'https://placeimg.com/140/140/any',
              uri: 'http://3.92.162.78:8080/image/' + book.image,
            }}
          />
          <TouchableOpacity
            style={{
              position: 'absolute',
              top: 0,
              zIndex: 2,
              left: 0,
              paddingVertical: 10,
              paddingHorizontal: 10,
            }}
            onPress={() => {
              navigation.goBack();
            }}>
            <IconM size={24} color="white" name="arrow-left" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            marginTop: -15,
            paddingHorizontal: 20,
            height: 400,
          }}>
          <Thumbnail
            square
            style={{
              width: 106,
              height: 142,
              borderRadius: 5,
              position: 'absolute',
              top: -70,
              right: 30,
            }}
            source={{
              //   uri: 'https://placeimg.com/140/140/any',
              uri: 'http://3.92.162.78:8080/image/' + book.image,
            }}
          />
          <TouchableOpacity
            style={{
              position: 'absolute',
              top: 26,
              zIndex: 2,
              right: 10,
              paddingVertical: 10,
              paddingHorizontal: 20,
            }}
            onPress={() => {
              navigation.goBack();
            }}>
            <View
              style={{
                backgroundColor: 'rgba(0,0,0,0.5)',
                paddingHorizontal: 15,
                paddingVertical: 8,
                borderRadius: 5,
                flexDirection: 'row',
              }}>
              <IconM
                name="book-plus"
                color="white"
                size={18}
                style={{marginLeft: -4, marginRight: 4}}
              />
              <Text style={{color: 'white', fontSize: 14}}>Beli Buku</Text>
            </View>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
              marginTop: -40,
            }}>
            {book.title}
          </Text>
          <Text style={{color: 'rgba(0,0,0,0.4)', marginTop: 20, fontSize: 17}}>
            {book.category}
          </Text>
          <Text style={{color: 'rgba(0,0,0,0.4)', fontSize: 12}}>
           {book.author}
          </Text>
          <Text style={{marginTop: 5}} note>
            Rp. {book.price}
          </Text>
          <View style={{alignItems: 'flex-start', flexDirection: 'row'}}>
            <Rating
              readonly={true}
              ratingCount={5}
              startingValue={book.rating}
              showRating={false}
              imageSize={16}
              style={{paddingVertical: 5}}
            />
            <Text style={{marginLeft: 4, marginTop: 5}} note>
              {book.rating}/5
            </Text>
          </View>
          <Text note style={{marginTop: 10}}>
            Deskripsi buku
          </Text>
          <Text style={{color: 'rgba(0,0,0,0.3)', marginTop: 5, fontSize: 14}}>
            {book.description} NativeBase is a free and open source UI component
            library for React Native to build native mobile apps for iOS and
            Android platforms. NativeBase also supports web from version 2.4.1.
          </Text>
        </View>
      </Content>
    </Container>
  );
};

export default Detail;
