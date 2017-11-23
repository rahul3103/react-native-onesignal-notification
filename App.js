import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import OneSignal from 'react-native-onesignal';

class App extends Component {

  componentWillMount() {
    OneSignal.addEventListener('ids', this.onIds);
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onIds(device) {
    console.log('Device info: ', device);
  }

  render() {
    console.log(DeviceInfo.getUniqueID());
    console.log(DeviceInfo.getManufacturer());

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to the OneSignal Example!
        </Text>
        <Text style={styles.instructions}>
          Using {Platform.OS}? Cool.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App;
