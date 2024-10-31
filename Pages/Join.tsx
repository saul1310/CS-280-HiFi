import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Ensure you import Ionicons

const Join = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerbox}>
                <TouchableOpacity onPress={() => navigation.navigate('Community')}>
                    <Ionicons name="arrow-back-outline" size={24} color="#333" />
                </TouchableOpacity>
                <Text style={styles.headertext}>Join a Group!</Text>
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
        flexDirection: 'row',  // Align items horizontally
        alignItems: 'center',   // Center items vertically
        justifyContent: 'flex-start', // Align items to the start
        paddingVertical: 10,    // Add some vertical padding
        paddingHorizontal: 15,   // Add horizontal padding
        backgroundColor: 'white', // Optional: Set background color
    },

    headertext: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 10, // Add margin to separate text from the button
        color: '#333',
    },

    Group : {


    },
});

export default Join;
