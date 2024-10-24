import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Navbar from '../components/NavBar';
import { auth } from '../firebaseConfig'; // Adjust the import path if needed
import { onAuthStateChanged } from 'firebase/auth';

const Home = ({ navigation }) => {
    const [email, setEmail] = useState<string | null>(null);
    
    const Spacer = ({ height }: { height: number }) => {
        return <View style={{ height }} />;
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setEmail(user.email);
            } else {
                setEmail(null); // User is signed out
            }
        });

        // Clean up the subscription
        return () => unsubscribe();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.greetingtext}>
                Logged in as {email ? email : 'Guest'}
            </Text>
            <Navbar navigation={navigation} /> 
            <Spacer height={20} />
            <View style={styles.imageContainer}>
                <Image 
                    source={require('../assets/homeimage.jpg')}
                    style={styles.image}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center', // Center items horizontally
        backgroundColor:'#F8F4E8',
    },
    text: {
        fontSize: 24,
    },
    greetingtext: {
        fontSize: 30,
        marginTop: 100,
    },
    imageContainer: {
        width: '90%',              // Set to 90% of the screen width
        height: 300,               // Set the height as needed
        overflow: 'hidden',        // Hide overflow if needed
        marginBottom: 20, 
        marginTop: 20,            // Add space below the image container
        alignItems: 'center',      // Center the image inside the container
    },
    image: {
        width: '100%',             // Stretch image to full width of container
        height: '100%',            // Stretch image to full height of container
        resizeMode: 'cover',       
    },
});

export default Home;
