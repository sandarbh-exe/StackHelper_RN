import React, {Component} from 'react';
import {StyleSheet, Text, View, Linking, TouchableOpacity} from 'react-native';

import User from './userDetails'

export default class Card extends Component{

    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <View style = {styles.cardStyle}>
                <View style = {styles.titleStyle}>
                    <Text style = {styles.titleText}
                        numberOfLines = {2}
                        ellipsizeMode = 'tail'>{this.props.questionTitle}</Text>
                </View>
                <Text style = {styles.bodyText}
                    numberOfLines = {2}
                    ellipsizeMode = 'tail'>{this.props.questionBody}</Text>
                    
                <View style = {styles.countStyle}>
                    <Text style = {styles.counts}>{this.props.voteCount}</Text>
                    <Text style = {styles.counts}>{this.props.answerCount}</Text>
                        
                </View>
                
                <View style = {styles.bottomStyle}>
                    <Text style = {styles.tagsTitle}> tags: </Text>
                    <View style = {styles.tagStyle}>
                        {this.props.tags.map(
                            (tag,index) => (
                                <Text key = {index} style = {styles.tags}>{tag}</Text>
                            )
                        )}
                    </View>

                    <TouchableOpacity style = {{flex: 1, justifyContent: 'flex-end'}}
                        activeOpacity = {0.6}
                        onPress = {() => (link = this.props.user.link) ? Linking.openURL(link).catch((err) => console.log(err)) : console.log('[Toast] User does not exist!') }>

                        <User username = {this.props.user.display_name} reputation = {this.props.user.reputation} avatar = {this.props.user.profile_image} />
                    </TouchableOpacity>
                    
                        
                </View>

                <View style = {styles.divider}></View>
                <View style = {styles.footer}>

                    <Text style = {[styles.footerText,{textAlign: 'left'}]}>{this.props.viewCount}</Text>
                    <Text style = {[styles.footerText,{textAlign: 'right'}]}>{this.props.creationDate}</Text>
                        
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({

    cardStyle: {
        margin: 3,
        backgroundColor: '#E5E5E5',
        borderRadius: 5,
    },
    titleStyle: {
        backgroundColor: '#2CA974',
        justifyContent: 'center',
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        paddingTop: 5,
        paddingBottom: 5,
    },
    titleText: {
        fontSize : 20,
        paddingLeft: 6,
        color: 'white',
        textAlign: 'left',
        fontWeight: 'bold',
        fontFamily: 'sens-serif-medium',
    },
    bodyText: {
        fontSize : 18,
        color: '#4B4F4B',
        textAlign: 'left',
        fontFamily: 'sens-serif-medium',
        padding: 6,
    },
    countStyle: {
        flexDirection: 'row',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    counts: {
        flex: 1,
        fontSize : 23,
        color: '#4B4F4B',
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'sens-serif-medium',
        opacity: 0.6,
    },
    bottomStyle: {
        flexDirection: 'row',
        margin: 10,
    },
    tagStyle: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginRight: 5,
        alignItems: 'flex-start'
    },
    tags: {
        fontSize : 15,
        marginLeft: 2,
        marginBottom: 2,
        padding: 2,
        color: '#085394',
        textAlign: 'left',
        fontWeight: 'bold',
        fontFamily: 'sens-serif-medium',
        backgroundColor: '#9fc5f8',
    },
    tagsTitle: {
        fontSize : 15,
        color: '#4B4F4B',
        textAlign: 'left',
        fontWeight: 'bold',
        fontFamily: 'sens-serif-medium',
    },
    divider: {
        backgroundColor: '#CCC',
        height: 1.5,
        flex: 1,
        marginTop: 5,
        opacity: 0.6,
    },
    footer: {
        flexDirection: 'row',
        margin: 5,
    },
    footerText: {
        flex: 1,
        fontSize : 15,
        marginLeft: 2,
        marginBottom: 2,
        color: '#999',
        fontFamily: 'sens-serif-medium',
    },
});