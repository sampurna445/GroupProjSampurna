import React, {useState} from 'react';
import {View, TextInput, Button, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {InputControl} from '../../components';
import {LogHelper} from '../../helpers';

import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email')
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Invalid email'),
  password: yup
    .string()
    .required('Password is required')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
      'password must contain only letters ,numbers and a special Char',
    ),
});

const LoginScreen = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    mode: 'all',
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  // const handleLogin = async () => {
  //   try {
  //     await auth().signInWithEmailAndPassword(email, password);
  //     navigation.navigate('Dashboard');
  //   } catch (error) {
  //     Alert.alert('Error', error.message);
  //   }
  // };

  const handleRegister = () => {
    navigation.navigate('SignUp', {navigation});
  };

  return (
    <View>
      <InputControl
        control={control}
        name={'email'}
        placeholder={'Enter Email'}
        error={errors?.email}
      />
      <InputControl
        control={control}
        name={'password'}
        placeholder={'Enter Password'}
        error={errors?.password}
      />
      <Button
        title={'Login'}
        onPress={handleSubmit(async formData => {
          console.log(formData.password);
          console.log(formData.email);

          LogHelper.localServerLogging(
            'form submit',
            'form submit is clicked',
            formData,
          );

          try {
            await auth().signInWithEmailAndPassword(
              formData.email,
              formData.password,
            );
            navigation.navigate('Dashboard');
          } catch (error) {
            console.log('Error:  ', error.message);
            Alert.alert('Error', error.message);
          }
          return;
        })}
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

export default LoginScreen;
