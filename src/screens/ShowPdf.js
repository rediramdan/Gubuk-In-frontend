/* @flow */
/* eslint-disable react/prop-types, no-console */
import React, { Fragment  } from 'react';
import {
  Alert,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import PDFView from 'react-native-view-pdf';
import Spinner from 'react-native-loading-spinner-overlay';
import DropdownAlert from 'react-native-dropdownalert';

import styles from '../config/styles';
import resources from '../config/resources';
import type { Resource } from '../config/resources';
import Button from '../config/Button';

type StateType = {
  activeButton?: 'assets' | 'url' | 'base64',
  resource?: Resource,
  spinner: boolean,
  canReload?: boolean,
};

const HorisontalLine = () => (<View style={styles.horizontalLine}/>);

type PdfContentType = {
  resource?: Resource,
  onRef?: Function,
  onLoad? : Function,
  onError?: Function,
  onPageChanged?: Function,
  onScrolled?: Function,
};

const PdfContent = (props: PdfContentType) => {
  if (props.resource) {
    return (
      <PDFView
        fadeInDuration={250.0}
        style={styles.pdfView}
        ref={props.onRef}
        {...props.resource}
        onLoad={props.onLoad}
        onError={props.onError}
        onScrolled={props.onScrolled}
        onPageChanged={props.onPageChanged}
      />
    );
  }

  return (
    <View style={styles.noContent}>
      <Text style={styles.noContentText}>
        No resources
        {'\n'}
        Press one of the buttons above
      </Text>
      
    </View>
  );
};

export default class ShowPdf extends React.Component<*, StateType> {
  _dropdownRef: ?DropdownAlert;

  _pdfRef: ?PDFView;

  _renderStarted: number;


  constructor(props: *) {
    super(props);
    this.state = { resource: undefined, spinner: false };
    this._renderStarted = 0;
  }


  setUrl = () => {
    this.setState({
      activeButton: 'url',
      resource: resources.url,
      spinner: true,
    });
  }


  


  setBase64 = () => {
    this.setState({
      activeButton: 'base64',
      resource: resources.base64,
      spinner: true,
    });
  }


  setFileAssets = () => {
    this.setState({
      activeButton: 'assets',
      resource: resources.fileAssets,
      spinner: true,
    });
  }




  handleLoad = () => {
    this.setState({ spinner: false, canReload: true });
    if (this._dropdownRef) {
      this._dropdownRef.alertWithType(
        'success',
        'Document loaded',
        `Loading time: ${((new Date()).getTime() - this._renderStarted)}`,
      );
    }
  }


  handleError = (error: Error) => {
    this.setState({ spinner: false, canReload: true });
    if (this._dropdownRef) {
      this._dropdownRef.alertWithType(
        'error',
        'Document loading failed',
        `error message: ${error.message}`,
      );
    }
  }


  handlePageChanged = (page: number, pageCount: number) => {
    console.log(`page ${page + 1} out of ${pageCount}`);
  }

  handleOnScrolled = (offset: number) => {
    console.log(`offset is: ${offset}`);
  }


  reloadPDF = async () => {
    const pdfRef = this._pdfRef;

    if (!pdfRef) {
      return;
    }

    this.setState({ spinner: true });
    try {
      await pdfRef.reload();
    } catch (err) {
      this.setState({ spinner: false });
      if (this._dropdownRef) {
        this._dropdownRef.alertWithType(
          'error',
          'Document reload failed',
          `error message: ${err.message}`,
        );
      }
    }
  }


  onRef = (ref: ?PDFView) => {
    this._pdfRef = ref;
  }


  render() {
    const { state } = this;
    const { activeButton } = state;
    this._renderStarted = (new Date()).getTime();

    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <View style={styles.tabs}>
            <Button active={activeButton === 'url'} onPress={this.setUrl} title="Url" />
            <Button active={activeButton === 'base64'} onPress={this.setBase64} title="Base64" />
            <Button active={activeButton === 'assets'} onPress={this.setFileAssets} title="Assets" />
          </View>
          <PdfContent
            resource={state.resource}
            onLoad={this.handleLoad}
            onError={this.handleError}
            onRef={this.onRef}
            onPageChanged={this.handlePageChanged}
            onScrolled={this.handleOnScrolled}
          />
       
         
          {state.canReload && (
            <View style={styles.floatButtons}>
              <Button
                onPress={this.reloadPDF}
                title="Reload PDF"
                style={styles.reloadButton}
              />
            </View>
          )}
          <Spinner
            visible={this.state.spinner}
            textContent="Loading..."
            textStyle={styles.spinnerTextStyle}
          />
          <DropdownAlert ref={(ref) => {
            this._dropdownRef = ref;
          }}
          />
        </SafeAreaView>
      </Fragment>
    );
  }
}
