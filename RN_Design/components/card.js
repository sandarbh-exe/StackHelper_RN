import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Card extends Component{

    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <View style = {styles.cardStyle}>
                <View style = {styles.titleStyle}>
                    <Text style = {styles.titleText}
                        numberOfLines = {1}
                        ellipsizeMode = 'tail'> {this.props.questionTitle} </Text>
                </View>
                <Text style = {styles.bodyText}
                    numberOfLines = {2}
                    ellipsizeMode = 'tail'> {this.props.questionBody} </Text>
                    
                <View style = {styles.countStyle}>
                    <Text style = {styles.counts}> {this.props.voteCount} </Text>

                    <Text style = {styles.counts}> {this.props.answerCount} </Text>
                        
                </View>
                
                <View style = {styles.bottomStyle}>
                    <View style = {styles.tagStyle}>
                        <Text style = {styles.tags}
                            numberOfLines = {1}
                            ellipsizeMode = 'tail'> tags: </Text>
                    </View>

                    {/*<User style = {styles.counts}> {this.props.answerCount} </User>*/}
                        
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({

    cardStyle: {
        margin: 10,
        backgroundColor: '#E7EFBD',
        borderRadius: 5,
    },
    titleStyle: {
        backgroundColor: '#26a69a',
        justifyContent: 'center',
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        paddingTop: 5,
        paddingBottom: 5,
    },
    titleText: {
        fontSize : 20,
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
    },
    bottomStyle: {
        flexDirection: 'row',
    },
    tagStyle: {
        flexDirection: 'row',
    },
    tags: {
        fontSize : 15,
        color: '#4B4F4B',
        textAlign: 'left',
        fontWeight: 'bold',
        fontFamily: 'sens-serif-medium',
    },
});