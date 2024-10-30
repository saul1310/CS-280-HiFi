import React from "react";
import {View, Text,TouchableOpacity,StyleSheet} from 'react-native'
import Navbar from "../components/NavBar";
import { NativeViewGestureHandler } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/MaterialIcons'; // or other icon sets like FontAwesome
const Create = () => {
    return (
        <View>






            The create page
            <Navbar navigation={navigation} /> 
        </View>


    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#F8F4E8',



    },

    LeftArrow : {
        justifyContent : 'center',
        

    },






});

export default Create;