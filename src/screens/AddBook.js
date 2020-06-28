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
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons'
import HeaderComponent from '../components/HeaderComponent';
import ImagePicker from 'react-native-image-picker'
import DocumentPicker from 'react-native-document-picker';
import {postBooksAll} from '../utils/http';


class AddBook extends React.Component {

   state = {
     titleError: false,
     title: '',
     titleMessage: '',
     categoryError: false,
     category: '',
     categoryMessage: '',
     descriptionError: false,
     description: '',
     descriptionMessage: '',
     authorError: false,
     author: '',
     authorMessage: '',
     priceError: false,
     price: '',
     priceMessage: '',
     id_user: 1,
     imageUpload: '',
     singleFile: '',
     isLoading: false,
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


   setLoading = (val) => {
    this.setState({
      isLoading: val,
    });
  };


  changeImage = async () => {
        const options = {
            quality: 0.7, allowsEditing: true, mediaType: 'photo', noData: true,
            storageOptions: {
                skipBackup: true, waitUntilSaved: true, path: 'images', cameraRoll: true
            }
    }
        ImagePicker.showImagePicker(options, response => {
            if (response.error) {
                console.log(error);
            } else if(!response.didCancel){
               console.log('response', response.uri);
                this.setState({
                    imageUpload: response.uri,
                })
            }
        })
   }


    async selectOneFile() {
    //Opening Document Picker for selection of one file
    try {
      const res = await DocumentPicker.pick({
        //type: [DocumentPicker.types.allFiles],
        //There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        type: [DocumentPicker.types.pdf],
      });
      //Printing the log realted to the file
      console.log('res : ' + JSON.stringify(res));
      console.log('URI : ' + res.uri);
      console.log('Type : ' + res.type);
      console.log('File Name : ' + res.name);
      console.log('File Size : ' + res.size);
      //Setting the state to show single file attributes
      this.setState({ singleFile: res.uri });
    } catch (err) {
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
        alert('Canceled from single doc picker');
      } else {
        //For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  }


  onSubmit = async () => {
     const {
      singleFile,
      id_user,
      title,
      author,
      price,
      category,
      description, 
      id_userError,
      titleError,
      authorError,
      priceError,
      categoryError,
      descriptionError,
      imageUpload,
    } = this.state;
    if (!titleError && !id_userError &&  !authorError && !priceError  && !categoryError && !descriptionError) {
      this.setLoading(true);
      await postBooksAll({title, description, category, author, price, id_user, imageUpload, singleFile}).then(async (res) => {

        console.log('resiko', res);
        this.setLoading(false);
        this.props.navigation.navigate('BukuSaya');

      }).catch(error => {
         console.log(error.response.data.message)
           if(error.response.data.message === "TokenExpiredError" || error.response.data.message === "JsonWebTokenError"){
                this.props.navigation.navigate('BukuSaya');
            }
      });
    }
  };


  render() {
     const {
      id_user,
      singleFile,
      title,
      titleError,
      titleMessage,
      author,
      authorError,
      authorMessage,
      price,
      priceError,
      priceMessage,
      category,
      categoryError,
      categoryMessage,
      description,
      descriptionError,
      descriptionMessage,
      imageUpload,
      isLoading,
    } = this.state;

    console.log('file', {singleFile});
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
              <Input
                  onChangeText={(e) => {
                    this.onChange(e, 'title');
                  }}
                  value={title}
                  style={{color: 'rgba(0,0,0,0.6)'}}
                  placeholderTextColor={'rgba(0,0,0,0.3)'}
                />
             
            </Item>
            {titleError ? (
                <Text
                  note
                  style={{
                    marginLeft: 15,
                    color: 'rgba(255,0,0,0.7)',
                    fontSize: 12,
                  }}>
                  {titleMessage}
                </Text>
              ) : null}
            <Item stackedLabel style={{marginTop:10}}>
              <Label>Kategori</Label>
               <Input
                  onChangeText={(e) => {
                    this.onChange(e, 'category');
                  }}
                  value={category}
                  style={{color: 'rgba(0,0,0,0.6)'}}
                  placeholderTextColor={'rgba(0,0,0,0.3)'}
                />
            </Item>
            <Item stackedLabel>
              <Label>Author</Label>
              <Input
                  onChangeText={(e) => {
                    this.onChange(e, 'author');
                  }}
                  value={author}
                  style={{color: 'rgba(0,0,0,0.6)'}}
                  placeholderTextColor={'rgba(0,0,0,0.3)'}
                />
            </Item>
            {authorError ? (
                <Text
                  note
                  style={{
                    marginLeft: 15,
                    color: 'rgba(255,0,0,0.7)',
                    fontSize: 12,
                  }}>
                  {authorMessage}
                </Text>
              ) : null}

            <Item stackedLabel>
              <Label>Price</Label>
              <Input
                  onChangeText={(e) => {
                    this.onChange(e, 'price');
                  }}
                  value={price}
                  style={{color: 'rgba(0,0,0,0.6)'}}
                  placeholderTextColor={'rgba(0,0,0,0.3)'}
                />
            </Item>
            {priceError ? (
                <Text
                  note
                  style={{
                    marginLeft: 15,
                    color: 'rgba(255,0,0,0.7)',
                    fontSize: 12,
                  }}>
                  {priceMessage}
                </Text>
              ) : null}
          
            <Item stackedLabel style={{borderBottomWidth: 0, marginTop: 10}}>
              <Label>Upload</Label>
            </Item>
            <TouchableOpacity onPress={this.changeImage}>
                <View style={{alignItems: 'center', marginBottom:20}}>
                    <IconM name="image-plus" size={70} color={'rgba(0,0,0,0.2)'} />
                    <Text style={{color: 'rgba(0,0,0,0.2)'}}>Upload cover buku</Text>
                </View>
             </TouchableOpacity>

            <Item stackedLabel style={{borderBottomWidth: 0, marginTop: 10}}>
              <Label>Upload File</Label>
            </Item>
            <TouchableOpacity onPress={this.selectOneFile.bind(this)}>
                <View style={{alignItems: 'center', marginBottom:20}}>
                    <IconM name="file-plus" size={70} color={'rgba(0,0,0,0.2)'} />
                    <Text style={{color: 'rgba(0,0,0,0.2)'}}>Upload File Ebook</Text>
                </View>
             </TouchableOpacity>

           
            <Item stackedLabel style={{borderBottomWidth: 0, marginTop: 10}}>
              <Label>Deskripsi</Label>
            </Item>
            <Textarea
              rowSpan={7}
               onChangeText={(e) => {
                    this.onChange(e, 'description');
                  }}
              value={description}
              style={{
                marginTop: -28,
                marginLeft: 15,
                borderBottomWidth: 1,
                borderBottomColor: 'rgba(0,0,0,0.1)',
              }}
            />
            {descriptionError ? (
                <Text
                  note
                  style={{
                    marginLeft: 15,
                    color: 'rgba(255,0,0,0.7)',
                    fontSize: 12,
                  }}>
                  {descriptionMessage}
                </Text>
              ) : null}

            <Button
              style={{
                justifyContent: 'center',
                marginTop: 20,
                marginLeft:10,
                marginBottom: 20,
                backgroundColor: '#2469EF',
                borderRadius: 12,
              }}
               onPress={()=>{this.onSubmit()}}
            >
              <Text>Tambah</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default AddBook;


const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  textStyle: {
    backgroundColor: '#fff',
    fontSize: 15,
    marginTop: 16,
    color: 'black',
  },
  buttonStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#DDDDDD',
    padding: 5,
  },
  imageIconStyle: {
    height: 20,
    width: 20,
    resizeMode: 'stretch',
  },
})
