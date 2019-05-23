import React, {Component} from 'react';
import {StyleSheet, Text, View, Picker} from 'react-native';

export default class CustomPicker extends Component{
    constructor(props){
        super(props);
        this.state = {
            style: this.props.style,
            title: this.props.title,
            itemList: this.props.items,
            key: 1,
        }
    }

    render(){
        return (
            <View style = {this.state.style}>
        
                <Text style = {styles.textStyle}>{this.state.title}</Text>
                <Picker style = {styles.pickerStyle} itemStyle = {styles.itemStyle} selectedValue = {this.props.selectedValue} onValueChange = {this.props.changeValue} >

                    {this.state.itemList.map((item) => <Picker.Item key = {this.state.key+1} label = {item} value = {item} />)}

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

//console.log(Dimensions.get('window'));