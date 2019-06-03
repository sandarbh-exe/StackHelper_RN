import React, {Component} from 'react';
import {StyleSheet, Text, View, Picker} from 'react-native';
import { connect } from 'react-redux';
import {updateOrder,updateSort} from '../actions'

let type = '';

class CustomPicker extends Component{
    
    constructor(props){
        super(props);
    }

    key = Math.random()*10;

    onPickerChange = (changedValue) => {
        switch(this.props.type){
            case 'sort' : this.props.updateSort(changedValue);break;
            case 'order' : this.props.updateOrder(changedValue);break;
        }
    }
    
    render(){
        type = this.props.type;
        console.log(this.props);
        
        return (
            <View style = {this.props.style}>
        
                <Text style = {styles.textStyle}>{this.props.title}</Text>
                <Picker style = {styles.pickerStyle} itemStyle = {styles.itemStyle} selectedValue = {this.props.selectedValue} onValueChange = {this.onPickerChange.bind(this)} >

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

const mapStateToProps = state => { 
    var value;
    switch(type){
        case 'sort' : value = state.filters.sort;break;
        case 'order' : value = state.filters.order;break;
    }
    console.log(state);
    
    return {selectedValue: value}
}

export default connect(mapStateToProps,{ updateOrder,updateSort })(CustomPicker)