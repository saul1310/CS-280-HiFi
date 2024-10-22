// Pages/Home.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';
import Navbar from '../components/NavBar';

const Home = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home page</Text>
            <Navbar navigation={navigation} /> {/* Pass navigation prop here */}
        </View>
    );
};

export default Home;
