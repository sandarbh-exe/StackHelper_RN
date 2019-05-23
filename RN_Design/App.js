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
import Filters from './components/filters'

export default class App extends Component {

  constructor(){
    super();
    this.state = {
      sort: 'relevance',
      order: 'desc',
      query: '',
    }
  }

  onChangeText = (text)=>(
    this.setState({query: text})
  );

  search = () => (        
    fetch(`https://api.stackexchange.com/2.2/search/advanced?order=${this.state.order}&sort=${this.state.sort}&site=stackoverflow`)
        .then(result => console.log(this.state.query)
        )
  );
  render() {
    return (
      <View style={styles.container}>
        <Header title = "StackHelper"/>
        <SearchBox onChangeText = {this.onChangeText} text = {this.state.query} onClick = {this.search} />
        <Filters orderValue = {this.state.order} sortValue = {this.state.sort} />
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
