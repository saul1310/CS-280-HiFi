import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Leaderboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerbox}>
        <TouchableOpacity onPress={() => navigation.navigate('Community')}>
          <Ionicons name="arrow-back-outline" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headertext}>Season Leaderboard --- </Text>

        
        <Text style={styles.headertext}>Winners will be announced in : 29:05:58</Text>
      </View>

      <View style={styles.leaderboardContainer}>
        {/* Left Side Leaderboard */}
        <View style={styles.leaderboardHalf}>
          <Text style={styles.leaderboardTitle}>Individual Leaderboard</Text>
          <View style={styles.GroupG}>
            <Text style={styles.Clan_info}>Damien C</Text>
            <View style={styles.Join_button}>
              <Text style={styles.Join_text}>300 Miles</Text>
            </View>
          </View> 
          <View style={styles.GroupS}>
            <Text style={styles.Clan_info}>Brent Fayaiz</Text>
            <View style={styles.Join_button}>
              <Text style={styles.Join_text}>255 Miles</Text>
            </View>
          </View>
          <View style={styles.GroupB}>
            <Text style={styles.Clan_info}>Sammy Malkovich</Text>
            <View style={styles.Join_button}>
              <Text style={styles.Join_text}>250 Miles</Text>
            </View>
          <View style = {styles.Spacer}>
            
          </View>
          </View>
          <View style={styles.Group}>
            <Text style={styles.Clan_info}>Tom Smith</Text>
            <View style={styles.Join_button}>
              <Text style={styles.Join_text}>238 Miles</Text>
            </View>
          </View>
          <View style={styles.Group}>
            <Text style={styles.Clan_info}>Adrian Green</Text>
            <View style={styles.Join_button}>
              <Text style={styles.Join_text}>220 Miles</Text>
            </View>
          </View>
          <View style={styles.Group}>
            <Text style={styles.Clan_info}>Sam Crenshaw</Text>
            <View style={styles.Join_button}>
              <Text style={styles.Join_text}>219 Miles</Text>
            </View>
          </View>
          <View style={styles.Group}>
            <Text style={styles.Clan_info}>Peter Abrohamovich</Text>
            <View style={styles.Join_button}>
              <Text style={styles.Join_text}>200 Miles</Text>
            </View>
          </View>
          {/* Add more groups if needed */}
        </View>

        {/* Right Side Leaderboard */}
        <View style={styles.leaderboardHalf}>
          <Text style={styles.leaderboardTitle}>Group Leaderboard</Text>
          <View style={styles.GroupG}>
            <Text style={styles.Clan_info}>Trail Blazers</Text>
            <View style={styles.Join_button}>
              <Text style={styles.Join_text}>1000 Total Miles</Text>
            </View>
          </View>
          <View style={styles.GroupS}>
            <Text style={styles.Clan_info}>The Spinners</Text>
            <View style={styles.Join_button}>
              <Text style={styles.Join_text}>700 Total Miles</Text>
            </View>
          
          </View>

          <View style={styles.GroupB}>
            <Text style={styles.Clan_info}>Gear Heads</Text>
            <View style={styles.Join_button}>
              <Text style={styles.Join_text}>550 Total Miles</Text>
            </View>
          
          </View>
          
          <View style={styles.Group}>
            <Text style={styles.Clan_info}>Road Tribe</Text>
            <View style={styles.Join_button}>
              <Text style={styles.Join_text}>549 Total Miles</Text>
            </View>
          
          </View>
                    
          <View style={styles.Group}>
            <Text style={styles.Clan_info}>Cycle Lords</Text>
            <View style={styles.Join_button}>
              <Text style={styles.Join_text}>530 Total Miles</Text>
            </View>
          
          </View>

          

   

          {/* Add more groups if needed */}
        </View>
      </View>
    </View>
  );
};

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
  leaderboardContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
  },
  leaderboardHalf: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  leaderboardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
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
  GroupG: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFD700',
    borderRadius: 10,
    marginVertical: 2,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  GroupS: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C0C0C0',
    borderRadius: 10,
    marginVertical: 2,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  GroupB: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#CD7F32',
    borderRadius: 10,
    marginVertical: 2,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  Clan_info: {
    flex: 2,
    color: 'white',
  },
  Join_button: {
    flex: 1,
    height: 35,
    borderRadius: 25,
    backgroundColor: '#f5bf14',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  Join_text: {
    color: '#fff',
    fontWeight: 'bold',
  },
  Spacer : {
    height : 100,
  }
});

export default Leaderboard;
