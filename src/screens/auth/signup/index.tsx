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

// Validation helpers
const isRequired = (str: string) => str?.trim().length <= 0;
const isValidEmail = (email: string) => {
  const regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regExp.test(email);
};

const SignupScreen = () => {
  const navigation = useNavigation<any>();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
  }>({});

  // Validate each field
  const validateField = (field: string, value: string) => {
    switch (field) {
      case 'firstName':
        setErrors(prev => ({
          ...prev,
          firstName: isRequired(value) ? 'First name is required' : undefined,
        }));
        break;
      case 'lastName':
        setErrors(prev => ({
          ...prev,
          lastName: isRequired(value) ? 'Last name is required' : undefined,
        }));
        break;
      case 'email':
        setErrors(prev => {
          if (isRequired(value)) return { ...prev, email: 'Email is required' };
          if (!isValidEmail(value))
            return { ...prev, email: 'Invalid email address' };
          return { ...prev, email: undefined };
        });
        break;
      case 'password':
        setErrors(prev => {
          if (isRequired(value))
            return { ...prev, password: 'Password is required' };
          if (value.length < 6)
            return {
              ...prev,
              password: 'Password must be at least 6 characters',
            };
          return { ...prev, password: undefined };
        });
        break;
    }
  };

  const handleSignup = async () => {
    // Validate all fields before submitting
    validateField('firstName', firstName);
    validateField('lastName', lastName);
    validateField('email', email);
    validateField('password', password);

    if (
      isRequired(firstName) ||
      isRequired(lastName) ||
      isRequired(email) ||
      !isValidEmail(email) ||
      isRequired(password) ||
      password.length < 6
    ) {
      return;
    }

    setLoading(true);
    try {
      // Replace with your real API endpoint
      console.log('Submitting:', { firstName, lastName, email, password });
      const response = await axios.post(
        'https://68f7c4eaf7fb897c66170bcc.mockapi.io/users',
        {
          firstName,
          lastName,
          email,
          password,
        },
      );
      const user = response.data;
      console.log('Created user:', user);
      Alert.alert('Success', 'Account created successfully!');
      navigation.navigate(screenNames.Singin);
    } catch (err) {
      console.error(err);
      Alert.alert('Error', 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const isFormValid =
    firstName &&
    lastName &&
    email &&
    isValidEmail(email) &&
    password &&
    password.length >= 6;

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.innerContainer}>
        <Text style={styles.headerTxt}>Create Account</Text>
        <Text style={styles.subHeaderTxt}>Sign up to get started</Text>

        <View style={{ width: '100%', marginBottom: 16 }}>
          <TextInput
            style={[
              styles.input,
              errors.firstName && { borderColor: 'red', borderWidth: 1 },
            ]}
            placeholder="First Name"
            placeholderTextColor={Colors.gray_999}
            value={firstName}
            onChangeText={text => {
              setFirstName(text);
              validateField('firstName', text);
            }}
          />
          {errors.firstName && (
            <Text style={styles.errorText}>{errors.firstName}</Text>
          )}
        </View>
        <View style={{ width: '100%', marginBottom: 16 }}>
          <TextInput
            style={[
              styles.input,
              errors.lastName && { borderColor: 'red', borderWidth: 1 },
            ]}
            placeholder="Last Name"
            placeholderTextColor={Colors.gray_999}
            value={lastName}
            onChangeText={text => {
              setLastName(text);
              validateField('lastName', text);
            }}
          />
          {errors.lastName && (
            <Text style={styles.errorText}>{errors.lastName}</Text>
          )}
        </View>
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
          disabled={!isFormValid || loading}
          onPress={handleSignup}
        >
          {!loading ? (
            <Text style={styles.buttonTxt}>Sign Up</Text>
          ) : (
            <ActivityIndicator color={Colors.white} />
          )}
        </TouchableOpacity>

        <View style={styles.footerContainer}>
          <Text style={styles.footerTxt}>Already have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(screenNames.Singin)}
          >
            <Text style={styles.signupTxt}> Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignupScreen;
