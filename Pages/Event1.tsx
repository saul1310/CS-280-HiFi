import React from "react";
import {View, Text,TouchableOpacity,StyleSheet} from 'react-native'

const Event1 = () => {
    return (
        <View style = {styles.container}>
            This is even 1
        </View>


    );
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#F8F4E8',


    }






});

export default Event1;