import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Join = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerbox}>
                <TouchableOpacity onPress={() => navigation.navigate('Community')}>
                    <Ionicons name="arrow-back-outline" size={24} color="#333" />
                </TouchableOpacity>
                <Text style={styles.headertext}>Join a Group!</Text>
            </View>

            <View style={styles.GroupContainer}>
                <View style={styles.Group}>
                   
                    <Text>Group Details Here</Text>
                </View>
            </View>
        </View>
    );
};

// Styles for Join component
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F8F4E8',
    },

    headerbox: {
        width: '100%',
        flexDirection: 'row', 
        alignItems: 'center',   
        justifyContent: 'flex-start', 
        paddingVertical: 10,   
        paddingHorizontal: 15,   
        backgroundColor: 'white', 
    },

    headertext: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 10, 
        color: '#333',
    },

    GroupContainer: {
        flex: 1,            
        flexDirection: 'column',
        alignItems: 'center', 
        width: '100%',       
    },

    Group: {
        width: '100%',         
        height: 60,       
        backgroundColor: '#01b1fe',
        borderRadius: 10,    
        marginVertical: 10, 
        padding: 10,        
        shadowColor: '#000',  
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.3,   
        shadowRadius: 4,    
    
    },
});

export default Join;
