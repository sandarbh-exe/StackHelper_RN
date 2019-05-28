/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Linking} from 'react-native';

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
      query: 'input',
      isEditable: true,
      posts: [],
    }
  }

  sortList = ['relevance', 'votes', 'activity', 'creation'];
  orderList = ['desc','asc'];
  sortKey = 0x41D;
  orderKey = 0x3E9;
  tagsHTMLregex = /(<([^>]+)>)/ig;

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
        .catch((error) => console.log(error));
  };

  onPickerChange = (label) => (
    (this.sortList.indexOf(label) != -1) ? this.setState({sort: label}) : this.setState({order: label})
  );

  getCreationDate = (val) => {
    var date = this.moment(val,'X');
    date.utcOffset(0);
    var formattedDate = date.format("MMM DD YY HH mm").split(' ');

    return (`asked ${formattedDate[0]} ${formattedDate[1]}'${formattedDate[2]} at ${formattedDate[3]}:${formattedDate[4]}`);
  }

  valueFormatter = (val) => {
    val *= 1.0
    suffix = ''
    if(Math.abs(val) > 1000000){
      val /= 1000000
      suffix = 'M'
    }
    else if(Math.abs(val) > 1000){
      val /= 1000
      suffix = 'k'
    }
    format = val.toString();
    pos = format.indexOf('.');

    if(format.charAt(pos+1)=='0')
        format = format.substring(0,pos);

    else format = format.substring(0,format.indexOf('.')+2);

    return (format+suffix)
  }

  getBodyText = (text) => (
    text.replace(this.tagsHTMLregex,'')
  )

  onCardClick = (link) => (
    console.log(link)
    
  )

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
            <TouchableOpacity key = {post.question_id}
                        activeOpacity = {0.8}
                        onPress = {() => Linking.openURL(post.link).catch((err) => console.log(err))}>

                <Card questionTitle = {post.title} questionBody = {this.getBodyText(post.body)}
                      voteCount = {`Votes : ${post.score}`} answerCount = {`Answers : ${post.answer_count}`}
                      tags = {post.tags} user = {post.owner} formatter = {this.valueFormatter()}
                      viewCount = {`${this.valueFormatter(post.view_count)} views`} creationDate = {this.getCreationDate(post.creation_date)} />

            </TouchableOpacity>
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
