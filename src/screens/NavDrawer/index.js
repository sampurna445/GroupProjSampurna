import 'react-native-gesture-handler';
import React from 'react';
import {TouchableOpacity} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';

import {
  HeartIcon,
  Square3Stack3DIcon,
  InboxStackIcon,
  ArrowRightCircleIcon,
  UsersIcon,
  SwatchIcon,
  CameraIcon,
} from 'react-native-heroicons/solid';

import UrduScreen from '../UrduScreen';
import HomeScreen from '../HomeScreen';
import FrenchScreen from '../FrenchScreen';
import UserProfileEdit from '../UserProfileEdit';
import Auth from '../../services/auth';
import UserMyPlaces from '../UserMyPlaces';

/**
 * https://reactnavigation.org/docs/drawer-navigator
 * 
 * @returns yarn add @react-navigation/native
yarn add react-native-screens react-native-safe-area-context
npx pod-install ios
yarn add @react-navigation/native-stack

yarn add @react-navigation/drawer
yarn add react-native-gesture-handler react-native-reanimated
import 'react-native-gesture-handler';  -> in first line
import HomeScreen from '../HomeScreen/index';

 */

const Drawer = createDrawerNavigator();

function NavDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="UrduScreen"
      screenOptions={{
        drawerLabelStyle: {
          color: 'black', // Change this to your default color
          fontWeight: 'bold', // Add additional styles if needed
        },
        drawerActiveTintColor: 'green', // Change this to your desired active color
        drawerInactiveTintColor: 'black', // Change this to your desired inactive color
      }}>
      <Drawer.Screen
        name="UserProfileEdit"
        component={UserProfileEdit}
        options={{
          drawerIcon: ({focused, size}) => (
            <ArrowRightCircleIcon size={40} strokeWidth={4.5} color={'black'} />
          ),
          headerRight: () => {
            return (
              <TouchableOpacity
                onPress={() => Auth.signOut()}
                style={{marginRight: 16}}>
                <ArrowRightCircleIcon
                  size={40}
                  strokeWidth={4.5}
                  color={'black'}
                />
              </TouchableOpacity>
            );
          },
        }}
      />
      <Drawer.Screen
        name="UserMyPlaces"
        component={UserMyPlaces}
        options={{
          drawerIcon: ({focused, size}) => (
            <ArrowRightCircleIcon size={40} strokeWidth={4.5} color={'black'} />
          ),
          headerRight: () => {
            return (
              <TouchableOpacity
                onPress={() => Auth.signOut()}
                style={{marginRight: 16}}>
                <ArrowRightCircleIcon
                  size={40}
                  strokeWidth={4.5}
                  color={'black'}
                />
              </TouchableOpacity>
            );
          },
        }}
      />
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          drawerIcon: ({focused, size}) => (
            <ArrowRightCircleIcon size={40} strokeWidth={4.5} color={'black'} />
          ),
          headerRight: () => {
            return (
              <TouchableOpacity
                onPress={() => Auth.signOut()}
                style={{marginRight: 16}}>
                <ArrowRightCircleIcon
                  size={40}
                  strokeWidth={4.5}
                  color={'black'}
                />
              </TouchableOpacity>
            );
          },
        }}
      />
      <Drawer.Screen
        name="UrduScreen"
        component={UrduScreen}
        options={{
          drawerIcon: ({focused, size}) => (
            <ArrowRightCircleIcon size={40} strokeWidth={4.5} color={'black'} />
          ),
          headerRight: () => {
            return (
              <TouchableOpacity
                onPress={() => Auth.signOut()}
                style={{marginRight: 16}}>
                <ArrowRightCircleIcon
                  size={40}
                  strokeWidth={4.5}
                  color={'black'}
                />
              </TouchableOpacity>
            );
          },
        }}
      />
      <Drawer.Screen
        name="FrenchScreen"
        component={FrenchScreen}
        options={{
          drawerIcon: ({focused, size}) => (
            <ArrowRightCircleIcon size={40} strokeWidth={4.5} color={'black'} />
          ),
          headerRight: () => {
            return (
              <TouchableOpacity
                onPress={() => Auth.signOut()}
                style={{marginRight: 16}}>
                <ArrowRightCircleIcon
                  size={40}
                  strokeWidth={4.5}
                  color={'black'}
                />
              </TouchableOpacity>
            );
          },
        }}
      />
    </Drawer.Navigator>
  );
}

export default NavDrawer;
