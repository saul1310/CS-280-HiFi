import React from "react";
import {View, Text,TouchableOpacity,StyleSheet} from 'react-native'

import { NativeViewGestureHandler } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/MaterialIcons'; // or other icon sets like FontAwesome
const Create = () => {
    return (
        <View style = {styles.container}>
            <View style = {styles.headerbox}>
                <Text style = {styles.headertext}>Create A Group</Text>

            </View>
            <View style = {styles.GroupContainer}>
                <View style = {styles.Text_Input_Box}>
                    hey
                </View>


            </View>






            The create page
           
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
    headerbox : {
        width : '100%',
        flexDirection :'row',
        alignItems : 'center',
        justifyContent : 'flex-start',
        paddingVertical : 10,
        paddingHorizontal :15,
        backgroundColor : '#92b54a',


    },

    headertext : {
        fontSize : 30,
        fontWeight: 'bold',
        marginLeft : 10,
        color : 'white',



    },


    GroupContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },

    Text_Input_Box : {
        width : '100%',
        height: 30,
        alignItems : 'center',
        backgroundColor :'#92b54a',
        borderRadius : 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,


    }

    






});

export default Create;