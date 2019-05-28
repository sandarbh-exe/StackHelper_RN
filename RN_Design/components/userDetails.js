import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default class User extends Component{

    constructor(props){
        super(props);
    }
    anonymousAvatarURL = "https://www.timeshighereducation.com/sites/default/files/byline_photos/anonymous-user-gravatar_0.png";

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

    render(){
        return(
            <View style = {styles.userStyle}>
                <View style = {styles.avatarStyle}>
                    <Image source = {{uri: (avatarURL = this.props.avatar) ? avatarURL : this.anonymousAvatarURL } }
                            style = {styles.avatar} resizeMode = 'contain' resizeMethod = 'scale' />
                </View>
                    
                <View style = {styles.details}>
                    <Text style = {[styles.detailsText,{fontSize : 18}]} numberOfLines = {1} ellipsizeMode = 'tail'>{this.props.username}</Text>
                    <Text style = {[styles.detailsText,{fontWeight: 'bold'}]}>{this.valueFormatter(this.props.reputation)}</Text>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({

    userStyle: {
        height: 60,
        flexDirection: 'row',
        borderRadius: 5,
        backgroundColor: '#9fc5f8',
        paddingTop: 5,
        paddingBottom: 5,
    },
    avatarStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        height: 50,
        width: 50,
    },
    details: {
        flex: 1,
        margin: 5,
    },
    detailsText: {
        flex: 1,
        fontSize : 13,
        color: '#4B4F4B',
        textAlign: 'left',
        fontFamily: 'sens-serif-medium',
    },
});