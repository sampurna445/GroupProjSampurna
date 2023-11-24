import React from 'react';
import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {NavDrawer, MyPlaces} from '../screens';

const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NavDrawer"
        component={NavDrawer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyPlaces"
        component={MyPlaces}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
