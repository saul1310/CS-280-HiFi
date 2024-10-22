// components/NavBar.tsx
import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

// Get the screen dimensions
const { width } = Dimensions.get('window');

const Navbar = ({ navigation }) => {
    return (
        <View style={styles.navbar}>
            <View style={styles.navbar_items}>
                <View style={styles.navbarText}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Community')}>
                        <Text style={styles.navbarText}>Community</Text> {/* Text inside button */}
                    </TouchableOpacity>
             
             
                </View>

                <View style={styles.navbarText}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Leaderboard')}>
                        <Text style={styles.navbarText}>Leaderboard</Text> {/* Text inside button */}
                    </TouchableOpacity>
             
             
                </View>

                <View style={styles.navbarText}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Rental')}>
                        <Text style={styles.navbarText}>Rental</Text> {/* Text inside button */}
                    </TouchableOpacity>
             
             
                </View>
                
                {/* Add more items as needed */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: width,  // Set width to screen width
        height: 80,
        backgroundColor: 'white',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5, // For Android shadow
    },
    navbar_items: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    navbarText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
        padding: 50,
    },
});

export default Navbar;
