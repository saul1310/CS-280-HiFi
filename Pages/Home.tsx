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
            <Spacer height={40} />

            {/* Container for two text blocks */}
            <View style={styles.textRow}>
                <View style={styles.leftTextBlock}>
                    <Text>Okay, I pull up, hop out at the after party
You and all your friends, yeah, they love to get naughty
Sippin' on that Henn', I know you love that Bacardi (Sonny Digital)
1942, I take you back in that 'Rari
Okay, I pull up, hop out at the after party
You and all your friends, yeah, they love to get naughty
Sippin' on that Henn', I know you love that Bacardi
1942, I take you back in that 'Rari
Switchin' lanes and I'm seein' lights, you know I watch the curb
Smokin' weed, you know I'm gettin' high, you know it calm my nerves
Trappin' hard, pumpin' non-stop, the bag I had to earn
You can try, but you might fail again, you know you never learn</Text>
                </View>

                <View style={styles.rightTextBlock}>
                    <Text>Okay, I pull up, hop out at the after party
You and all your friends, yeah, they love to get naughty
Sippin' on that Henn', I know you love that Bacardi (Sonny Digital)
1942, I take you back in that 'Rari
Okay, I pull up, hop out at the after party
You and all your friends, yeah, they love to get naughty
Sippin' on that Henn', I know you love that Bacardi
1942, I take you back in that 'Rari
Switchin' lanes and I'm seein' lights, you know I watch the curb
Smokin' weed, you know I'm gettin' high, you know it calm my nerves
Trappin' hard, pumpin' non-stop, the bag I had to earn
You can try, but you might fail again, you know you never learn</Text>
                </View>
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
    greetingtext: {
        fontSize: 30,
        marginTop: 100,
    },
    imageContainer: {
        width: '90%',             
        height: 300,               
        overflow: 'hidden',       
        marginBottom: 20, 
        marginTop: 20,            
        alignItems: 'center',    
    },
    image: {
        width: '100%',             
        height: '100%',         
        resizeMode: 'cover',       
    },

    textRow: {
        flexDirection: 'row',     
        justifyContent: 'space-between', 
        width: '90%',              
        marginTop: 20,
    },
    leftTextBlock: {
        width: '45%',            
        // backgroundColor: '#f0f0f0', 
        padding: 10,               
    },
    rightTextBlock: {
        width: '45%',             
        // backgroundColor: '#f0f0f0', 
        padding: 10,              
    },
});

export default Home;
