import React, {Component} from 'react';
import {StyleSheet, Text, View, Picker} from 'react-native';

export default class CustomPicker extends Component{
    
    constructor(props){
        super(props);
    }
    key = this.props.ukey;

    render(){
        return (
            <View style = {this.props.style}>
        
                <Text style = {styles.textStyle}>{this.props.title}</Text>
                <Picker style = {styles.pickerStyle} itemStyle = {styles.itemStyle} selectedValue = {this.props.selectedValue} onValueChange = {this.props.onPickerChange} >

                    {this.props.items.map((item) => <Picker.Item key = {this.key++} label = {item} value = {item} />)}

                </Picker>
        
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textStyle: {
        flex: 1,
        color: '#424242',
        fontSize : 15,
        textAlign: 'left',
        fontWeight: 'bold',
    },
    pickerStyle: {
        flex: 2,
        marginRight: 2,
    },
    itemStyle: {
        flex: 1,
        color: '#424242',
        fontSize : 10,
        textAlign: 'left',
    },
});