import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Modal, TouchableOpacity, ScrollView } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  // Function to toggle modal visibility
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('User registered:', user);
      })
      .catch((error) => {
        setError(error.message);
        toggleModal(); // Show the modal when there's an error
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerbox}>
        <TouchableOpacity onPress={() => navigation.navigate('Community')}>
          <Ionicons name="arrow-back-outline" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headertext}>Return to Home page</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Sign Up" onPress={handleSignUp} />
      
     

      {/* Modal for sign-up error message */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Error</Text>
          <Text style={styles.modalText}>{error}</Text>
          <Button title="Close" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  reserveButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  reserveButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  modalView: {
    backgroundColor: '#fff',
    padding: 20,
    marginTop: '20%',
    marginLeft: '10%',
    marginRight: '10%',
    borderRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 15,
  },
  headerbox: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: 'white',
  },
  headertext: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#333',
  },
});

export default Signup;
