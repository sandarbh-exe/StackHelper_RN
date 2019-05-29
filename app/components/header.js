import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Header extends Component{

    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <View style = {styles.headerStyle}>
                <Text style = {styles.textStyle}>{this.props.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize : 30,
        padding: 10,
        color: 'white',
        textAlign: 'left',
        fontWeight: 'bold',
        fontFamily: 'sens-serif-medium'
    },
    headerStyle: {
        backgroundColor: '#527271',
        paddingLeft: 10,
    }
});