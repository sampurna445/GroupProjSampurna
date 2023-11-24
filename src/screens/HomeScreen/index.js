import { Text, TouchableOpacity, SafeAreaView} from 'react-native';
import React, {useContext} from 'react';

import Auth from '../../services/auth';
import { LocaleHelper } from '../../helpers';
import { UserContext } from '../../navigation';


export default function HomeScreen() {
  const userName = useContext(UserContext);

  return (
    <SafeAreaView>
      <Text>Home Screen</Text>
      <TouchableOpacity
        onPress={() => {
          Auth.signOut();
          console.log('signed out');
        }}>
        <Text>Sign Out</Text>
        <Text> User Name :{userName.displayName}</Text>
        <Text> User Id :{userName.uid}</Text>
      </TouchableOpacity>

      <Text>{LocaleHelper.t('howru')}</Text>
    </SafeAreaView>
  );
}
