import React, {Component} from 'react';
import {StyleSheet, Text, View, Picker} from 'react-native';
import { connect } from 'react-redux';

class CustomPicker extends Component{
    
    constructor(props){
        super(props);
    }
    // key = 0x41D;
    // itemList = [
    //     ['relevance', 'votes', 'activity', 'creation'],
    //     ['desc','asc']
    // ]
    
    render(){
        var items = items[this.props.itemsID];
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

const mapStateToProps = state => ({
    filters: state.filters
})

export default connect(mapStateToProps)(CustomPicker)