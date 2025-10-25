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
    setErrors({}); // مسح الأخطاء السابقة
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
      const response = await axios.get(
        'https://68f7c4eaf7fb897c66170bcc.mockapi.io/users',
      );
      const users = response.data;

      const user = users.find(
        (u: { email: string; password: string }) =>
          u.email === email && u.password === password,
      );

      if (user) {
        await AsyncStorage.setItem('user', JSON.stringify(user));
        Alert.alert('Login Successful', `Welcome, ${user.name || user.email}!`);
        navigation.navigate(screenNames.BottomTabs);
      } else {
        Alert.alert('Login Failed', 'Email or password is incorrect.');
      }
    } catch (err) {
      console.error(err);
      Alert.alert('Error', 'Something went wrong. Please try again.');
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

        <View style={styles.footerContainer}>
          <Text style={styles.footerTxt}>Don’t have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(screenNames.Singup)}
          >
            <Text style={styles.signupTxt}> Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SigninScreen;
