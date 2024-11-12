import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Event3 = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.headerbox}>
                <TouchableOpacity onPress={() => navigation.navigate('Community')}>
                    <Ionicons name="arrow-back-outline" size={24} color="#333" />
                </TouchableOpacity>
                <Text style={styles.headertext}>Back to Community Page</Text>
            </View>
      {/* Image container */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/eventimage.jpg')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      {/* Event Title */}
      <Text style={styles.title}>Exciting Event at Willamette University!</Text>

      {/* Event Description */}
      <Text style={styles.description}>
        Join us for an unforgettable event filled with fun activities, great food, and amazing people. This event is perfect for anyone looking to enjoy a day full of excitement, learning, and community building. Don't miss out on the fun!
      </Text>

      {/* Event Date and Time */}
      <View style={styles.eventDetails}>
        <Text style={styles.detailsTitle}>Date & Time:</Text>
        <Text style={styles.detailsText}>Saturday, November 30th, 2024, 2:00 PM</Text>
      </View>

      {/* Event Location */}
      <View style={styles.eventDetails}>
        <Text style={styles.detailsTitle}>Location:</Text>
        <Text style={styles.detailsText}>Willamette University Campus - Ford Hall</Text>
      </View>

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpText}>Sign Up Now!</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    height: 250,
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
    lineHeight: 24,
  },
  eventDetails: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  detailsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  detailsText: {
    fontSize: 16,
    color: '#555',
  },
  signUpButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignItems: 'center',
  },
  signUpText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  headerbox: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#92b54a',
},

headertext: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 10,
    color: 'white',
},
});

export default Event3;
