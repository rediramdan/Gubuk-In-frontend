import React from 'react';
import {Body, CardItem, Left, Thumbnail, Text} from 'native-base';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import {Rating} from 'react-native-ratings';

const styles = StyleSheet.create({
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
  wrapperRating: {
    alignItems: 'flex-start',
  },
  textRating: {
    color: 'rgba(0,0,0,0.4)',
    fontSize: 12,
    marginTop: -8,
  },
  rating: {
    paddingVertical: 10,
  },
});

const BookItem = ({book, navigation}) => {
  return (
    <TouchableOpacity onPress={() => {navigation.navigate('Detail', {book})}}>
      <CardItem style={styles.carditem}>
        <Left style={styles.left}>
          <Thumbnail
            square
            style={styles.thumb}
            source={{
              uri: 'http://3.92.162.78:8080/image/' + book.image,
            }}
          />
          <Body>
            <Text numberOfLines={2}>{book.title}</Text>
            <Text note numberOfLines={1}>
              Rp. {book.price}
            </Text>
          <Text note>{book.category}</Text>
            <View style={styles.wrapperRating}>
              <Rating
                readonly={true}
                ratingCount={5}
                startingValue={book.rating}
                showRating={false}
                imageSize={16}
                style={styles.rating}
              />
              <Text style={styles.textRating}>{book.rating}/5</Text>
            </View>
          </Body>
        </Left>
      </CardItem>
    </TouchableOpacity>
  );
};

export default BookItem;
