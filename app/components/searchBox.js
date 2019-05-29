import React, {Component} from 'react';
import {StyleSheet, TextInput, View,Image,TouchableOpacity} from 'react-native';

export default class SearchBox extends Component{

    constructor(props){
        super();
    }

    imagePath = require('../icons/search_icon.png');

    render(){
        return(

            <View style = {styles.searchStyle}>
        
                <TextInput style = {styles.inputStyle} placeholder = 'Search...' placeholderTextColor = '#BEC4C6' numberOfLines = {1}
                        value = {this.props.value}
                        onChangeText = {this.props.onChangeText}
                        autoCapitalize = 'none'
                        autoCorrect = {false}
                        blurOnSubmit = {true}
                        editable = {this.props.isEditable} />
        
                <TouchableOpacity style = {styles.buttonStyle}
                        activeOpacity = {0.8}
                        onPress = {this.props.onClick}>
                        
                    <Image source = {this.imagePath} 
                            style={styles.imageStyle}
                            resizeMode = 'contain'
                            resizeMethod = 'scale' />
                </TouchableOpacity>
            </View>
        );
    }
} 

const styles = StyleSheet.create({
    inputStyle: {
        flex: 3,
        color: '#1C1C1C',
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
        alignItems: 'center' ,
        justifyContent: 'center',
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
    },
    imageStyle: {
        height: 45,
        width: 45,
    }
});