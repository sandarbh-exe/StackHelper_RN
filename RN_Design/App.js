/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, View, ScrollView} from 'react-native';
import Header from './components/header'
import SearchBox from './components/searchBox';
import CustomPicker from './components/customPicker'
import Card from './components/card'

export default class App extends Component {

  constructor(){
    super();
    this.state = {
      sort: 'relevance',
      order: 'desc',
      query: '',
      isEditable: true,
      posts: [],
    }
  }

  sortList = ['relevance', 'votes', 'activity', 'creation'];
  orderList = ['desc','asc'];
  sortKey = 0x41D;
  orderKey = 0x3E9;

  moment = require('moment');

  onChangeText = (text)=>(
    this.setState({query: text})
  );

  search = () => {
    this.setState({isEditable: false});

    return fetch(`https://api.stackexchange.com/2.2/search/advanced?order=${this.state.order}&sort=${this.state.sort}&q=${this.state.query}&site=stackoverflow&filter=!9Z(-wwK0y`)
        .then(response => {
          this.setState({isEditable: true})
          if(response.ok)
            return response
          console.log('Network Error.')
        })
        .then(response => response.json())
        .then(result => this.setState({posts: result.items}))
        .then(() => console.log(this.state.posts))
        .catch((error) => console.log(error));
  };

  onPickerChange = (label) => (
    (this.sortList.indexOf(label) != -1) ? this.setState({sort: label}) : this.setState({order: label})
  );

  getCreationDate = (val) => {
    var date = this.moment(val,'X');
    date.utcOffset(0);
    var formattedDate = date.format("MMM DD YY HH mm").split(' ');
    console.log(formattedDate);

    return (`asked ${formattedDate[0]} ${formattedDate[1]}'${formattedDate[2]} at ${formattedDate[3]}:${formattedDate[4]}`);
  }

  getViewCount = (val) => {
    return `${val} views`
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title = "StackHelper"/>
        <SearchBox onChangeText = {this.onChangeText} value = {this.state.query} onClick = {this.search} isEditable = {this.state.isEditable} />

        <View style = {styles.filtersStyle}>
            <CustomPicker title = 'Sort by:' ukey = {this.sortKey} items = {this.sortList} style = {styles.picker1} selectedValue = {this.state.sort} onPickerChange = {this.onPickerChange} />
            <CustomPicker title = 'Order:' ukey = {this.orderKey} items = {this.orderList} style = {styles.picker2} selectedValue = {this.state.order} onPickerChange = {this.onPickerChange} />
        </View>
        <ScrollView>
        {this.state.posts.map(
          (post) => (
            <Card questionTitle = {post.title} questionBody = {post.body}
              voteCount = {`Votes : ${post.score}`} answerCount = {`Answers : ${post.answer_count}`}
              viewCount = {this.getViewCount(post.view_count)} creationDate = {this.getCreationDate(post.creation_date)}></Card>
          )
        )}
          
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    flexDirection: 'column'
  },
  filtersStyle: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  picker1: {
        flex: 1.3,
        marginRight: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    picker2: {
        flex: 1,
        marginRight: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
