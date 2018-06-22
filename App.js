import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RNCamera } from 'react-native-camera';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qrcode: ''
    };
  }

  onBarCodeRead = e => this.setState({ qrcode: e.data });

  render() {
    return (
      <View style={styles.container}>
        <Text>This is Homepage for QR Reader</Text>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          autoFocus={RNCamera.Constants.AutoFocus.on}
          onBarCodeRead={this.onBarCodeRead}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.auto}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={
            'We need your permission to use your camera phone'
          }
        >
          <Text
            style={{
              backgroundColor: 'white'
            }}
          >
            {this.state.qrcode}
          </Text>
        </RNCamera>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
});
