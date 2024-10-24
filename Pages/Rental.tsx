// Pages/Community.tsx
import React from 'react';
import { View, Text } from 'react-native';
import Navbar from '../components/NavBar';

const Rental = () => {
  return (
    <View>
       <Navbar navigation={navigation} /> {/* Pass navigation prop here */}
      <Text>Welcome to the Leaderboard page!</Text>
    </View>
  );
};

export default Rental;
