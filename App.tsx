import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Community from './Pages/Community'; // Example for another screen
import Home from './Pages/Home';
import Leaderboard from './Pages/Leaderboard';
import Rental from './Pages/Rental';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} 
        options = {{headerShown:false}}
        />
        <Stack.Screen name="Community" component={Community}
          options = {{headerShown:false}}
        
        />
        

        <Stack.Screen name = "Leaderboard" component = {Leaderboard}
          options = {{headerShown:false}}
        
        />

        <Stack.Screen name = "Rental" component = {Rental}
          options = {{headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
