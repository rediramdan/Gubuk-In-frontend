import React from 'react';
import {View} from 'react-native';
import PDFView from 'react-native-view-pdf';

export default class ShowPdf extends React.Component {
  render() {

    return (
      <View style={{ flex: 1 }}>
        <PDFView
          style={{ flex: 1 }}
          onError={(error) => console.log('onError', error)}
          onLoad={() => console.log('PDF rendered from url')}
          resource="http://www.pdf995.com/samples/pdf.pdf"
          resourceType="url"
        />
      </View>
    );
  }
}