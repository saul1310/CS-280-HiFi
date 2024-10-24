// Pages/Community.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Navbar from '../components/NavBar';

const Community = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Navbar navigation={navigation} />
      <Text style={styles.text}>Welcome to the Community page!</Text>
      <View style={styles.redBox}></View> {/* Added red box */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    backgroundColor: '#F8F4E8',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  redBox: {
    width: 150, // Box width
    height: 150, // Box height
    backgroundColor: '#0d2410', // Red background
  },
});

export default Community;
