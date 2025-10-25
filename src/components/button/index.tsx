import { Text, TouchableOpacity, ViewStyle } from 'react-native';
import React, { FC } from 'react';
import styles from './styles';

interface ButtonProps {
  title: string;
  onPress?: () => void;
  btnStyle?: ViewStyle;
}

const Button: FC<ButtonProps> = ({ title, onPress, btnStyle }) => {
  return (
    <TouchableOpacity style={[styles.container, btnStyle]} onPress={onPress}>
      <Text style={styles.btnTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
