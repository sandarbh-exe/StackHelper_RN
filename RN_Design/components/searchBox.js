import React from 'react';
import {StyleSheet, TextInput, View,Button,Image,TouchableHighlight} from 'react-native';

const imagePath = require('../Icons/search_icon.png');

const SearchBox = () => (

    
    <View style = {styles.searchStyle}>
        <TextInput style = {styles.inputStyle} placeholder = 'Search...' placeholderTextColor = '#BEC4C6' numberOfLines = {1}>
            
        </TextInput>

        <TouchableHighlight style = {styles.buttonStyle}>
            <Image source = {imagePath} style={{width: 10, height: 10}}></Image>
        </TouchableHighlight>
        
    </View>
);

const styles = StyleSheet.create({
    inputStyle: {
        flex: 3,
        color: 'red',
        fontSize : 20,
        padding: 5,
        textAlign: 'left',
        borderWidth: 1,
        marginRight: 5,
        borderRadius: 5,
        borderColor: '#EDF9FF',
        backgroundColor: '#DEE5E8'
    },
    buttonStyle: {
        flex: 1,
        borderRadius: 5,
        margin: 2,
        backgroundColor: '#448AFF',
    },
    searchStyle: {
        height: 50,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
    }
});

export default SearchBox;