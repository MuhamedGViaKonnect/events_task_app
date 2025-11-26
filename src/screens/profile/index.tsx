import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  I18nManager,
} from 'react-native';
import styles from './styles';
import RNRestart from "react-native-restart";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Colors from '@common/colors';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setLanguage } from '@store/slices/settingSlice';

import screenNames from '@navigation/screenNames';
import { useTranslation } from 'react-i18next';



const ProfileScreen = () => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';
  const [user, setUser] = useState<any>(null);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

 
const toggleLang = async () => {
    const isArLang = i18n.language === 'en' ? true : false;
    const lng = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(lng);
    dispatch(setLanguage(lng)); // save in Redux
    await I18nManager.allowRTL(isArLang);
    await I18nManager.forceRTL(isArLang);
    setTimeout(() => {
      RNRestart.Restart();
    }, 300);
  };

  useEffect(() => {
    const loadUser = async () => {
      try {
        const savedUser = await AsyncStorage.getItem('userData');
        if (savedUser) {
          setUser(JSON.parse(savedUser));
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
            await AsyncStorage.multiRemove(['token','userData']);
            // dispatch(clearEvents());

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
 const customer = user?.customerResponse;
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.headerTxt}>{t('profile.myProfile')} </Text>

        {user ? (
          <View style={{ marginTop: 20 }}>
            <Text style={[styles.infoTxt, { writingDirection: isRTL ? 'rtl' : 'ltr' }]}>
  {t('profile.name')}: {customer?.customerName}
</Text>
<Text style={[styles.infoTxt, { writingDirection: isRTL ? 'rtl' : 'ltr' }]}>
  {t('profile.email')}: {customer?.customerEmail}
</Text>
<Text style={[styles.infoTxt, { writingDirection: isRTL ? 'rtl' : 'ltr' }]}>
  {t('profile.phone')}: {customer?.customerPhone}
</Text>

          </View>
        ) : (
          <ActivityIndicator size="large" color={Colors.primary} />
        )}

         <TouchableOpacity
    style={[styles.button, { backgroundColor: Colors.primary, marginTop: 10 }]}
    onPress={toggleLang}
  >
    <Text style={[styles.buttonTxt, { color: Colors.white }]}>
      {i18n.language === 'en' ? ' تغيير الي العربية' : 'Change to english'}
    </Text>
  </TouchableOpacity>

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
              {t('profile.logout')}
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;
