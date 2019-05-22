import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = (prop) => (
    <View style = {styles.headerStyle}>
        <Text style = {styles.textStyle}>{prop.title}</Text>
    </View>
);

const styles = StyleSheet.create({
    textStyle: {
        fontSize : 30,
        padding: 10,
        color: 'white',
        textAlign: 'left',
        fontWeight: 'bold',
        fontFamily: 'Comic Sans'
    },
    headerStyle: {
        backgroundColor: '#26a69a',
        paddingLeft: 10,
    }
});

export default Header;