/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Header from './components/header'
import SearchBox from './components/searchBox';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {<Header title = "StackHelper"/>}
        <SearchBox />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    flexDirection: 'column'
  }
});
