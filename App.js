import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen, Dashboard} from './src/screens';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Login" component={LoginScreen} />
    //     <Stack.Screen name="Dashboard" component={Dashboard} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <View>
      <Text>Text</Text>
    </View>
  );
};

export default App;
