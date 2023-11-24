// import React from 'react';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import {NavigationContainer} from '@react-navigation/native';
// import {LoginScreen, DashboardScreen,SignUpScreen} from '../screens';

// const Drawer = createDrawerNavigator();

// const RootNavigator = () => {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Login">
//         <Drawer.Screen name="SignUp" component={SignUpScreen} />
//         <Drawer.Screen name="Login" component={LoginScreen} />
//         <Drawer.Screen name="Dashboard" component={DashboardScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// };

// export default RootNavigator;

import auth from '@react-native-firebase/auth';
import {NavigationContainer} from '@react-navigation/native';
import React, {useState, useEffect, createContext} from 'react';
import MainStack from './mainStack';
import AuthStack from './authStack';

export const UserContext = createContext();

export default RootNavigator = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChange(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChange);
    return subscriber;
  }, []);

  if (initializing) return null;

  return (
    <UserContext.Provider value={user}>
      <NavigationContainer>
        {user ? <MainStack /> : <AuthStack />}
      </NavigationContainer>
    </UserContext.Provider>
  );
};
