import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

// Get the screen dimensions
const { width, height } = Dimensions.get('window');

const Navbar = () => {
    return (
        <View style={styles.navbar}>
            <View style={styles.navbar_items}>
                <Text style={styles.navbarText}>Item 1</Text>
                <Text style={styles.navbarText}>Item 2</Text>
                <Text style={styles.navbarText}>Item 3</Text>
                {/* Add more items as needed */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        position: 'absolute', // Keep it fixed in place
        top: 0,
        left: 0,
        width: width,  // Set width to screen width
        height: 80, // Set height to screen height
        backgroundColor: 'white',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        shadowColor: '#000', // Optional shadow effect
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5, // For Android shadow
    },
    navbar_items: {
        flex: 1, // Allow the items container to grow and fill the navbar
        flexDirection: 'row', // Stack items vertically
        justifyContent: 'center', // Center items vertically
        alignItems: 'center',
    },
    navbarText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
        padding:50,
    },
});

export default Navbar;
