// Pages/Community.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Navbar from '../components/NavBar';

const Community = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Navbar navigation={navigation} />
      <Text style={styles.text}>Welcome to the Community page!</Text>
      <View style = {styles.largeButton}>
      
      <View style={styles.Groups}>
        
        </View> {/* Added red box */}
      <View style={styles.Groups}>
        
        </View> {/* Added red box */}
    
      </View>
      <View style = {styles.largeButton}>
        <View style = {styles.Events}>
          
        </View>

        <View style = {styles.Events}>
          
        </View>

        <View style = {styles.Events}>
          
        </View>

      </View>
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
  largeButton:{
    display : 'flex',
    flexDirection: 'row',
    padding:40,
 




  },


  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  Groups: {
    width: 300, // Box width
    height: 300, // Box height
    backgroundColor: '#f5bf14', // Red background
    borderRadius:40,
    marginRight:20,
  },
  Events: {

    width: 200, // Box width
    height: 200, // Box height
    backgroundColor: '#01b1fe', // Red background
    borderRadius:40,
    marginRight:20,

  },
});

export default Community;
