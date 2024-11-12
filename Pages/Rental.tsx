import React, { useState } from 'react';
import { StyleSheet, View, Text, Modal, Button, TouchableOpacity, ScrollView, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const MapPage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [reserveModalVisible, setReserveModalVisible] = useState(false);
  const [qrModalVisible, setQrModalVisible] = useState(false);

  // Function to toggle modals
  const toggleModal = () => setModalVisible(!modalVisible);
  const toggleReserveModal = () => setReserveModalVisible(!reserveModalVisible);
  const toggleQrModal = () => setQrModalVisible(!qrModalVisible);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerbox}>
                <TouchableOpacity onPress={() => navigation.navigate('Community')}>
                    <Ionicons name="arrow-back-outline" size={24} color="#333" />
                </TouchableOpacity>
                <Text style={styles.headertext}>Rent a Bike</Text>
      </View>

      {/* Map iframe */}
      <View style={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d4281.0131682752935!2d-123.03317272335525!3d44.935224278185586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1swillamette%20university!5e0!3m2!1sen!2sus&markers=color:red%7Clabel:S%7C44.933,-123.035"
          width="100%"
          height="300"
          style={{ borderRadius: 10 }}
          allowFullScreen
          loading="lazy"
        />
      </View>

      {/* Title and Description */}
      <View style={styles.textBox}>
        <Text style={styles.title}>Bike Pick Up</Text>
        <Text style={styles.description}>
          Find an available bike on the map and start riding!
        </Text>
      </View>

      {/* Button to trigger modal for safety info */}
      <TouchableOpacity onPress={toggleModal} style={styles.button}>
        <Text style={styles.buttonText}>Safety Info</Text>
      </TouchableOpacity>

      {/* Button to trigger modal for reserving a bike */}
      <TouchableOpacity onPress={toggleReserveModal} style={styles.reserveButton}>
        <Text style={styles.buttonText}>Reserve a Bike</Text>
      </TouchableOpacity>

      {/* Button to trigger QR code scanner modal */}
      <TouchableOpacity onPress={toggleQrModal} style={styles.qrButton}>
        <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/QR_Code_Logo.svg/1200px-QR_Code_Logo.svg.png' }} style={styles.qrIcon} />
        <Text style={styles.buttonText}>QR Code Scanner</Text>
      </TouchableOpacity>

      {/* Safety Info Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Safety Info</Text>
          <ScrollView>
            <Text style={styles.modalText}>
              <Text style={styles.bold}> <Text style={styles.bold}>Bike Rental Safety Guidelines</Text>{"\n"}
             

              <Text style={styles.bold}>1. Wear a Helmet</Text>{"\n"}
              Always wear a helmet, even if you’re just riding for a short distance. A helmet significantly reduces the risk of injury in case of an accident.
              We provide helmets with each rental. If you have your own, make sure it's properly fitted.{"\n\n"}

              <Text style={styles.bold}>2. Inspect the Bike Before Riding</Text>{"\n"}
              Check the tires: Ensure they are properly inflated and free from punctures.{"\n"}
              Check the brakes: Test the brakes to make sure they are functioning properly.{"\n"}
              Adjust the seat: Make sure the seat is at the correct height for comfort and safety.{"\n"}
              Check the lights: If you're riding at night or in low-light conditions, make sure the bike has working front and rear lights.{"\n\n"}

              <Text style={styles.bold}>3. Follow Traffic Rules</Text>{"\n"}
              Obey all local traffic laws and regulations. Ride in the direction of traffic, stop at red lights and stop signs, and use bike lanes wherever possible.{"\n"}
              Yield to pedestrians and give audible signals (such as a bell or horn) when overtaking or passing others.{"\n\n"}

              <Text style={styles.bold}>4. Ride at a Safe Speed</Text>{"\n"}
              Ride at a speed that is comfortable for your skill level and the conditions around you.{"\n"}
              Avoid high speeds on unfamiliar or crowded routes, and adjust your speed when riding on wet or uneven terrain.{"\n\n"}

              <Text style={styles.bold}>5. Avoid Distractions</Text>{"\n"}
              Keep both hands on the handlebars at all times.{"\n"}
              Avoid using your phone or listening to music with headphones while riding. Stay alert to your surroundings.{"\n\n"}
</Text>{"\n"}
              {/* Safety info content */}
            </Text>
          </ScrollView>
          <Button title="Close" onPress={toggleModal} />
        </View>
      </Modal>

      {/* Reserve Bike Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={reserveModalVisible}
        onRequestClose={toggleReserveModal}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Reserve a Bike</Text>
          <ScrollView>
            <Text style={styles.modalText}>
              <Text style={styles.bold}>When would you like to reserve your bike?</Text>{"\n"}
              {/* Add form input elements for time, location, and duration */}
              {/* Example text input for date and time */}
              <Text>Enter Date and Time:</Text>
              <Text>Enter Duration:</Text>
              {/* Add input components here */}
            </Text>
          </ScrollView>
          <Button title="Close" onPress={toggleReserveModal} />
        </View>
      </Modal>

      {/* QR Code Scanner Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={qrModalVisible}
        onRequestClose={toggleQrModal}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>QR Code Scanner</Text>
          <ScrollView>
            <Text style={styles.modalText}>Scan a QR code to check in or reserve a bike.</Text>
            {/* Add QR Code Scanner component here */}
          </ScrollView>
          <Button title="Close" onPress={toggleQrModal} />
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  mapContainer: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden', // To clip the corners of the iframe
    borderWidth: 2,
    borderColor: '#ccc', // Border color around the iframe
  },
  textBox: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3, // Adds shadow on Android for depth
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#555',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  reserveButton: {
    backgroundColor: '#C0C0C0',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  qrButton: {
    backgroundColor: '#000',
    flexDirection: 'row',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  qrIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  buttonText: {
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
  bold: {
    fontWeight: 'bold',
  },
  headerbox: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#C0C0C0',
},

headertext: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 10,
    color: 'white',
},

});

export default MapPage;
