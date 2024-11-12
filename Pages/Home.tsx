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

            {/* Image Container */}
            <View style={styles.imageContainer}>
                <Image 
                    source={require('../assets/homeimage.jpg')}
                    style={styles.image}
                />
            </View>
            <Spacer height={20} />

            {/* Project Title */}
            <Text style={styles.projectTitle}>Willamette EBike Project</Text>
            <Spacer height={20} />

            {/* Introductory Information */}
            <Text style={styles.introText}>
                Welcome to the Willamette EBike Project! Our mission is to promote sustainable, eco-friendly transportation options for all students on campus. With our convenient e-bike rental services, you'll be able to get around campus efficiently and reduce your carbon footprint.
            </Text>
            <Spacer height={10} />
            <Text style={styles.introText}>
                Whether you’re commuting to class, running errands, or exploring the city, our e-bikes are designed to make your journey smoother and more enjoyable. Join us in revolutionizing transportation at Willamette University!
            </Text>
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
    greetingtext: {
        fontSize: 30,
        marginTop: 100,
    },
    imageContainer: {
        width: '50%',
        height: 300,
        overflow: 'hidden',
        marginBottom: 20,
        marginTop: 20,
        alignItems: 'center',
        borderRadius: 40,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    projectTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#333',
    },
    introText: {
        fontSize: 16,
        textAlign: 'center',
        color: '#555',
        marginHorizontal: 20,
        marginBottom: 10,
    },
});

export default Home;
