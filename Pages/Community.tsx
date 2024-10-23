// Pages/Community.tsx
import React from 'react';
import { View, Text } from 'react-native';
import Navbar from '../components/NavBar';

const Community = () => {
  return (
    <View>
       <Navbar navigation={navigation} /> 
      <Text>Welcome to the Community page!</Text>
    </View>
  );
};

export default Community;
