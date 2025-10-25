import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Colors from '@common/colors';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { clearEvents } from '@store/slices/cardsSlice';

import screenNames from '@navigation/screenNames';

const ProfileScreen = () => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  const [user, setUser] = useState<any>(null);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (err) {
        console.error('Error loading user:', err);
      } finally {
        setIsLoggingOut(false);
      }
    };
    loadUser();
  }, []);

  const handleLogout = async () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Logout',
        style: 'destructive',
        onPress: async () => {
          try {
            await AsyncStorage.removeItem('user');
            dispatch(clearEvents());

            navigation.reset({
              index: 0,
              routes: [{ name: screenNames.Auth }],
            });
          } catch (error) {
            console.error('Error logging out:', error);
          }
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.headerTxt}>My Profile </Text>

        {user ? (
          <View style={{ marginTop: 20 }}>
            <Text style={styles.infoTxt}>First Name: {user.firstName}</Text>
            <Text style={styles.infoTxt}>Last Name: {user.lastName}</Text>
            <Text style={styles.infoTxt}>Email: {user.email}</Text>
          </View>
        ) : (
          <ActivityIndicator size="large" color={Colors.primary} />
        )}

        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: Colors.gray, marginTop: 30 },
          ]}
          onPress={handleLogout}
        >
          {isLoggingOut ? (
            <ActivityIndicator color={Colors.white} />
          ) : (
            <Text style={[styles.buttonTxt, { color: Colors.white }]}>
              Logout
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;
