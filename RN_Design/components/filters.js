import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import CustomPicker from './customPicker'

export default class Filters extends Component{

    constructor(){
        super();
        this.state = {
            sortList: ['relevance', 'votes', 'activity', 'creation'],
            orderList: ['desc','asc'],
        }
    }
    render(){
        return(

            <View style = {styles.filtersStyle}>
                <CustomPicker title = 'Sort by:' items = {this.state.sortList} style = {styles.picker1} selectedValue = {this.props.value} changeValue = {this.props.changeValue} />
                <CustomPicker title = 'Order:' items = {this.state.orderList} style = {styles.picker2} selectedValue = {this.props.value} changeValue = {this.props.changeValue} />
            </View>
        );
    }
} 

const styles = StyleSheet.create({
    filtersStyle: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
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

//console.log(Dimensions.get('window'));
