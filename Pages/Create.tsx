import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput ,Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Create = ({ navigation }) => {
    const [clanName, setClanName] = useState("");
    const [clanDescription, setClanDescription] = useState("");

    return (
        <View style={styles.container}>
            <View style={styles.headerbox}>
                <TouchableOpacity onPress={() => navigation.navigate('Community')}>
                    <Ionicons name="arrow-back-outline" size={24} color="#333" />
                </TouchableOpacity>
                <Text style={styles.headertext}>Create A Group</Text>
            </View>

            <View style={styles.small_spaccer}></View>

            <View style={styles.fieldContainer}>
                <View style={styles.Field_row}>
                    <Text style={styles.labelText}>Choose a Group Name</Text>
                    <View style={styles.Text_Input_Box}>
                        <TextInput
                            placeholder="Group Name"
                            value={clanName}
                            onChangeText={setClanName}
                        />
                    </View>
                </View>

                <View style={styles.Field_row}>
                    <Text style={styles.labelText}>Select an Icon</Text>
                    <Text style={styles.iconPlaceholder}>Icon</Text> {/* Placeholder for icon selection */}
                </View>
                <View style={styles.Field_row}>
                    <Text style={styles.labelText}>Enter a Description</Text>
                    <Text style={styles.iconPlaceholder}>Description</Text> {/* Placeholder for icon selection */}
                </View>

                <View style={styles.Field_row}>
                    <Text style={styles.labelText}>Privacy </Text>
                
                    <Text style={styles.iconPlaceholder}>Open</Text> 
                    <Text style={styles.iconPlaceholder}>Closed</Text>
                    <Text style={styles.iconPlaceholder}>Private</Text>{/* Placeholder for icon selection */}
                </View>

                <View style={styles.Field_row}>
                    <Text style={styles.labelText}>Group Type</Text>
                
                    <Text style={styles.iconPlaceholder}>Casual</Text> 
                    <Text style={styles.iconPlaceholder}>Events</Text>
                    <Text style={styles.iconPlaceholder}>Compettive</Text>{/* Placeholder for icon selection */}
                </View>

                <View style = {styles.Field_row}>
                    <Text style = {styles.iconPlaceholder_green}>Create Group</Text>
                </View>

            </View>

         
       
      


            
            <Text style={styles.footerText}>The create page</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F4E8',
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

    fieldContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '80%', // Adjust width to control spacing
        marginHorizontal: 20,
    },

    Field_row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },

    labelText: {
        width: 120, // Fixed width to align labels consistently
        fontSize: 16,
    },

    Text_Input_Box: {
        width: 200,
        height: 30,
        justifyContent: 'center',
        backgroundColor: '#92b54a',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        paddingHorizontal: 10,
    },

    iconPlaceholder: {
        width: 200, // Same width as Text_Input_Box to align with input box
        height: 30,
        textAlign: 'center',
        lineHeight: 30,
        backgroundColor: '#d3d3d3',
        borderRadius: 15,
        color: '#555',
    },
    iconPlaceholder_green : {
        width: 200, // Same width as Text_Input_Box to align with input box
        height: 30,
        textAlign: 'center',
        lineHeight: 30,
        backgroundColor: '#92b54a',
        borderRadius: 15,
        color: '#555',

    },

    small_spaccer: {
        height: 20,
    },

    footerText: {
        textAlign: 'center',
        paddingVertical: 20,
        color: '#333',
    },

});

export default Create;
