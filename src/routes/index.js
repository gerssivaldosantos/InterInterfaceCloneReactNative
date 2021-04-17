// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/login1'
import Login2 from '../screens/login2'
import Home from '../screens/home'
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown:false
      }}
      >
        <Stack.Screen 
        name="Login"
        component={Login}
         />
         <Stack.Screen
         name="Login2"
         component={Login2}/>
         <Stack.Screen 
         name="Home"
         component={Home} />
      </Stack.Navigator>
    
    </NavigationContainer>
  );
}

export default App;