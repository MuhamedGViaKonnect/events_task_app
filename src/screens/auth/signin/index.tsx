import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import screenNames from '@navigation/screenNames';
import axios from 'axios';
import Colors from '@common/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

const isRequired = (str: string) => str?.trim().length <= 0;

const isValidEmail = (email: string) => {
  const regExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  return regExp.test(email);
};

const SigninScreen = () => {
  const navigation = useNavigation<any>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {},
  );

  const validateField = (field: 'email' | 'password', value: string) => {
    if (field === 'email') {
      if (isRequired(value)) {
        setErrors(prev => ({ ...prev, email: 'Email is required' }));
      } else if (!isValidEmail(value)) {
        setErrors(prev => ({ ...prev, email: 'Invalid email address' }));
      } else {
        setErrors(prev => ({ ...prev, email: undefined }));
      }
    }

    if (field === 'password') {
      if (isRequired(value)) {
        setErrors(prev => ({ ...prev, password: 'Password is required' }));
      } else if (value.length < 6) {
        setErrors(prev => ({
          ...prev,
          password: 'Password must be at least 6 characters',
        }));
      } else {
        setErrors(prev => ({ ...prev, password: undefined }));
      }
    }
  };

  const handleLogin = async () => {
  setErrors({});
  if (
    isRequired(email) ||
    !isValidEmail(email) ||
    isRequired(password) ||
    password.length < 6
  ) {
    validateField('email', email);
    validateField('password', password);
    return;
  }

  setLoading(true);

  try {
    const response = await axios.post(
      'https://e7gezly-1054846845303.us-central1.run.app/api/v1/auth/login',
      {
        email,
        password,
      },
    );

    if (response?.data?.responseCode === 200) {
      const userData = response.data.data;

 
      await AsyncStorage.setItem('token', userData.token);
      await AsyncStorage.setItem('refreshToken', userData.refreshToken);
      await AsyncStorage.setItem('userData', JSON.stringify(userData));

      Alert.alert('Login Successful', `Welcome, ${userData.username}!`);
      navigation.navigate(screenNames.BottomTabs);
    } else {
      Alert.alert('Login Failed', response.data.responseMessage);
    }
  } catch (error: any) {
    console.log('Login Error:', error?.response?.data || error?.message);

    // Error from server
    if (error?.response?.data?.responseMessage) {
      Alert.alert('Error', error.response.data.responseMessage);
    } else {
      Alert.alert('Error', 'Something went wrong.');
    }
  } finally {
    setLoading(false);
  }
};


  const isFormValid =
    !isRequired(email) &&
    isValidEmail(email) &&
    !isRequired(password) &&
    password.length >= 6;

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.innerContainer}>
        <Text style={styles.headerTxt}>Welcome</Text>
        <Text style={styles.subHeaderTxt}>Login to your account</Text>

        <View style={{ width: '100%', marginBottom: 16 }}>
          <TextInput
            style={[
              styles.input,
              errors.email && { borderColor: 'red', borderWidth: 1 },
            ]}
            placeholder="Email"
            placeholderTextColor={Colors.gray_999}
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={text => {
              setEmail(text);
              validateField('email', text);
            }}
          />
          {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
        </View>
        <View style={{ width: '100%', marginBottom: 16 }}>
          <TextInput
            style={[
              styles.input,
              errors.password && { borderColor: 'red', borderWidth: 1 },
            ]}
            placeholder="Password"
            placeholderTextColor={Colors.gray_999}
            secureTextEntry
            value={password}
            onChangeText={text => {
              setPassword(text);
              validateField('password', text);
            }}
          />
          {errors.password && (
            <Text style={styles.errorText}>{errors.password}</Text>
          )}
        </View>
        <TouchableOpacity
          style={[styles.button, { opacity: isFormValid ? 1 : 0.6 }]}
          disabled={!isFormValid}
          onPress={handleLogin}
        >
          {!loading ? (
            <Text style={styles.buttonTxt}>Login</Text>
          ) : (
            <ActivityIndicator color={Colors.white} />
          )}
        </TouchableOpacity>

      
      </View>
    </KeyboardAvoidingView>
  );
};

export default SigninScreen;