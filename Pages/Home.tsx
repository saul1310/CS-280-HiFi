// Pages/Home.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Home Page</Text>
      <Button
        title="Go to Community"
        onPress={() => navigation.navigate('Community')}
      />
    </View>
  );
};

export default Home;
