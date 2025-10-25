import { Image, View } from 'react-native';
import React, { useEffect } from 'react';
import styles from './styles';
import Images from '@common/images';
import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase } from '@react-navigation/native';
import screenNames from '@navigation/screenNames';
import AsyncStorage from '@react-native-async-storage/async-storage';

type ISplashScreenProps = {
  navigation: StackNavigationProp<ParamListBase>;
};

const SplashScreen: React.FC<ISplashScreenProps> = ({ navigation }) => {
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        setTimeout(() => {
          if (storedUser) {
            navigation.reset({
              index: 0,
              routes: [{ name: screenNames.BottomTabs }],
            });
          } else {
            navigation.reset({
              index: 0,
              routes: [{ name: screenNames.Auth }],
            });
          }
        }, 1000);
      } catch (error) {
        console.error('Error checking login status:', error);
        navigation.navigate(screenNames.Auth);
      }
    };

    checkLoginStatus();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          source={Images.splashLogo}
          style={styles.splashImg}
          resizeMode={'contain'}
        />
      </View>
    </View>
  );
};

export default SplashScreen;
