import React from 'react';
import {View, Text} from 'react-native';
import {Spinner} from 'native-base';
import PDFView from 'react-native-view-pdf';

export default class ShowPdf extends React.Component {
  state = {
    isloading: true,
  };
  render() {
    const {isLoading} = this.state;
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <PDFView
          style={{flex: 1}}
          onError={(error) => console.log('onError', error)}
          onLoad={() => {
            this.setState({isLoading: false});
          }}
          resource="http://www.pdf995.com/samples/pdf.pdf"
          resourceType="url"
        />
        {isLoading === false ? null : (
          <View style={{alignItems: 'center', marginBottom:100}}>
            <Spinner color="#5E94FF" />
            <Text style={{color: 'rgba(0,0,0,0.5)', marginTop: -20}}>Memuat dokumen</Text>
          </View>
        )}
      </View>
    );
  }
}
