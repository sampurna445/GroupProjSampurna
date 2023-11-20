import React from 'react';
import {View, Text, Button} from 'react-native';
import auth from '@react-native-firebase/auth';
import {LocaleHelper} from '../../helpers';
import {useNavigation} from '@react-navigation/native';

const DashboardScreen = () => {
  const navigation = useNavigation();
  const handleLogout = async () => {
    try {
      const user = auth().currentUser;

      if (user) {
        await auth().signOut();
        // navigation.replace('Login');
        navigation.navigate('Login');
      } else {
        // Handle the case where there is no user signed in
        console.warn('No user is currently signed in.');
      }
    } catch (error) {
      console.error('Logout Error:', error);
    }
  };

  return (
    <View>
      <Text>Welcome to Dashboard!</Text>
      <Text>Welcome, {auth().currentUser.email}</Text>
      <Button title="Logout" onPress={handleLogout} />
      <Text>{LocaleHelper.t('howru')}</Text>
    </View>
  );
};

export default DashboardScreen;
