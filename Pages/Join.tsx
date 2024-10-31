import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Join = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerbox}>
                <TouchableOpacity onPress={() => navigation.navigate('Community')}>
                    <Ionicons name="arrow-back-outline" size={24} color="#333" />
                </TouchableOpacity>
                <Text style={styles.headertext}>Join a Group!</Text>
            </View>

            <View style={styles.GroupContainer}>
                <View style={styles.Group}>
                
                   
                    <Text style = {styles.Clan_info}>Cycle Fiends </Text>
                    <View style = {styles.Join_button}>
                        <Text style = {styles.Join_text}> Join </Text>
                        </View>
                    <Text style = {styles.Clan_altinfo}> 2/12</Text>
                </View>
                <View style={styles.Group}>
                
                   
                <Text style = {styles.Clan_info}>Pedal Pusher </Text>
                <View style = {styles.Join_button}>
                    <Text style = {styles.Join_text}> Join </Text>
                    </View>
                <Text style = {styles.Clan_altinfo}> 8/12</Text>
            </View>
            <View style={styles.Group}>
                
                   
                <Text style = {styles.Clan_info}>Cycle Tribe</Text>
                <View style = {styles.Join_button}>
                    <Text style = {styles.Join_text}> Join </Text>
                    </View>
                <Text style = {styles.Clan_altinfo}> 6/12</Text>
            </View>
            <View style={styles.Group}>
                
                   
                <Text style = {styles.Clan_info}>Trail Blazer </Text>
                <View style = {styles.Join_button}>
                    <Text style = {styles.Join_text}> Join </Text>
                    </View>
                <Text style = {styles.Clan_altinfo}> 12/12</Text>
            </View>
            <View style={styles.Group}>
                
                   
                <Text style = {styles.Clan_info}>The Spinner </Text>
                <View style = {styles.Join_button}>
                    <Text style = {styles.Join_text}> Join </Text>
                    </View>
                <Text style = {styles.Clan_altinfo}> 7/12</Text>
            </View>

            <View style={styles.Group}>
                
                   
                <Text style = {styles.Clan_info}>Road Warrrr</Text>
                <View style = {styles.Join_button}>
                    <Text style = {styles.Join_text}> Join </Text>
                    </View>
                <Text style = {styles.Clan_altinfo}> 5/12</Text>
            </View>
            <View style={styles.Group}>
                
                   
                <Text style = {styles.Clan_info}>Chain Gang </Text>
                <View style = {styles.Join_button}>
                    <Text style = {styles.Join_text}> Join </Text>
                    </View>
                <Text style = {styles.Clan_altinfo}> 6/12</Text>
            </View>
            <View style={styles.Group}>
                
                   
                <Text style = {styles.Clan_info}>Cycle Fiends </Text>
                <View style = {styles.Join_button}>
                    <Text style = {styles.Join_text}> Join </Text>
                    </View>
                <Text style = {styles.Clan_altinfo}> 2/12</Text>
            </View>
            </View>
        </View>
    );
};

// Styles for Join component
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F8F4E8',
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

    GroupContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },

    Group: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center', 
        backgroundColor: '#01b1fe',
        borderRadius: 10,
        marginVertical: 2,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },

    Clan_info: {
        flex: 2, // Takes up more space for longer names
        color: '#000',
    },

    Join_button: {
        flex: 1,
        height: 35,
        borderRadius: 25,
        backgroundColor: '#f5bf14',
        justifyContent: 'center', // Centers text vertically
        alignItems: 'center',     // Centers text horizontally
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },

    Join_text: {
        color: '#fff',
        fontWeight: 'bold',
    },

    Clan_altinfo: {
        flex: 1, // Ensures space for alt info
        color: '#000',
        textAlign: 'right', // Aligns text to the right
    },
});


export default Join;
