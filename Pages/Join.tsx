import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Join = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton}>
                <Ionicons name="arrow-back-outline" size={24} color="#333" />
            </TouchableOpacity>
            <View style={styles.headerbox}>
                <Text style={styles.headertext}>Join a Group!</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F8F4E8',
    },

    backButton: {
        position: 'absolute',
        top: 40,       // Distance from top of the screen
        left: 20,      // Distance from left side of the screen
    },

    headerbox: {
        width: '100%',
        alignItems: 'center',   // Centers the text horizontally
        paddingTop: 40,         // Space from the top of the screen
    },

    headertext: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#333',
    },
});

export default Join;
