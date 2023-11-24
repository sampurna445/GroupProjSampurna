// import React, {useState} from 'react';
// import {View, TextInput, Button, Alert} from 'react-native';
// import auth from '@react-native-firebase/auth';
// import {useForm} from 'react-hook-form';
// import {yupResolver} from '@hookform/resolvers/yup';
// import {InputControl} from '../../components';
// import {LogHelper} from '../../helpers';

// import * as yup from 'yup';

// const schema = yup.object().shape({
//   email: yup
//     .string()
//     .required('Email is required')
//     .email('Invalid email')
//     .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Invalid email'),
//   password: yup
//     .string()
//     .required('Password is required')
//     .matches(
//       /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
//       'password must contain only letters ,numbers and a special Char',
//     ),
// });

// const LoginScreen = ({navigation}) => {
//   const {
//     control,
//     handleSubmit,
//     formState: {errors},
//   } = useForm({
//     mode: 'all',
//     resolver: yupResolver(schema),
//     defaultValues: {
//       email: '',
//       password: '',
//     },
//   });
//   // const handleLogin = async () => {
//   //   try {
//   //     await auth().signInWithEmailAndPassword(email, password);
//   //     navigation.navigate('Dashboard');
//   //   } catch (error) {
//   //     Alert.alert('Error', error.message);
//   //   }
//   // };

//   const handleRegister = () => {
//     navigation.navigate('SignUp', {navigation});
//   };

//   return (
//     <View>
//       <InputControl
//         control={control}
//         name={'email'}
//         placeholder={'Enter Email'}
//         error={errors?.email}
//       />
//       <InputControl
//         control={control}
//         name={'password'}
//         placeholder={'Enter Password'}
//         error={errors?.password}
//       />
//       <Button
//         title={'Login'}
//         onPress={handleSubmit(async formData => {
//           console.log(formData.password);
//           console.log(formData.email);

//           LogHelper.localServerLogging(
//             'form submit',
//             'form submit is clicked',
//             formData,
//           );

//           try {
//             await auth().signInWithEmailAndPassword(
//               formData.email,
//               formData.password,
//             );
//             navigation.navigate('Dashboard');
//           } catch (error) {
//             console.log('Error:  ', error.message);
//             Alert.alert('Error', error.message);
//           }
//           return;
//         })}
//       />
//       <Button title="Register" onPress={handleRegister} />
//     </View>
//   );
// };

// export default LoginScreen;

import {
  View,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  Text,
  SafeAreaView,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Auth from '../../services/auth';
import appColors from '../../constants/appColors';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import {InputControl} from '../../components';
import * as yup from 'yup';
/***
 * yarn add react-hook-form
 * yarn add yup
 * yarn add @hookform/resolvers
 */

export default function LoginScreen({navigation}) {
  const schema = yup.object().shape({
    email: yup
      .string()
      .required('Email is required')
      .email('Invalid email')
      .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Invalid email'),

    password: yup
      .string()
      .required('Last Name is required')
      .matches(
        // /^[a-zA-Z\s]+$/,
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
        'password must contain only letters and numbers',
      ),
  });

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    mode: 'all',
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Login</Text>
        {/* <Image
          source={require('../../assets/images/login.png')} // Replace 'path_to_your_image' with the actual image path
          style={styles.image}
        /> */}
      </View>
      <View style={styles.inputContainer}>
        <InputControl
          control={control}
          name={'email'}
          placeholder={'Enter email'}
          error={errors?.email}
        />
        <InputControl
          control={control}
          name={'password'}
          placeholder={'Enter password'}
          error={errors?.password}
        />
      </View>

      <Button
        title={'Submit'}
        onPress={handleSubmit(formData => {
          console.log(formData);
          Auth.signIn(formData.email, formData.password);
        })}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 44,
    color: appColors.color1,
    fontWeight: 'bold',
    marginRight: 20,
  },
  bodyText: {
    fontSize: 16,
    color: appColors.color2,
    fontWeight: 'medium',
    marginBottom: 20,
  },
  image: {
    width: 100, // Set the width of the image
    height: 100, // Set the height of the image
    marginLeft: 10, // Adjust the margin as needed
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonContainer: {
    width: '80%',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonSpacing: {
    height: 20, // Adjust the height to create more space
  },
  button: {
    backgroundColor: appColors.color1,
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonOutline: {
    backgroundColor: '#ffffff',
    borderColor: appColors.color2,
    borderWidth: 2,
    borderRadius: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: appColors.color2,
    fontWeight: '700',
    fontSize: 24,
    padding: 10,
  },
});
