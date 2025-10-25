import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { EventDataType } from '../../types';
import Colors from '@common/colors';

export type CardProps = {
  data: EventDataType;
  onPress?: () => void;
  onRegister?: () => void;
  isRegistered?: boolean;
};

const formatPrice = (p?: number | string) => {
  if (p === undefined || p === null || p === '') return 'Free';
  if (typeof p === 'string') return p;
  return `$${p.toFixed ? p.toFixed(2) : String(p)}`;
};

const formatDate = (date?: string | Date) => {
  if (!date) return '';
  const parsed = date instanceof Date ? date : new Date(date);
  return isNaN(parsed.getTime()) ? '' : parsed.toLocaleDateString();
};

const Card: React.FC<CardProps> = ({
  data,
  onPress,
  onRegister,
  isRegistered,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.card} onPress={onPress}>
      {/* Image */}
      {data?.Image ? (
        <Image
          source={{ uri: data?.Image }}
          style={styles.image}
          resizeMode="cover"
        />
      ) : (
        <View style={[styles.image, styles.placeholder]}>
          <Text style={styles.placeholderText}>No Image</Text>
        </View>
      )}
      <View style={styles.content}>
        {/* Content */}
        <View style={styles.description}>
          <Text style={styles.title} numberOfLines={2}>
            {data?.EventName}
          </Text>

          <Text style={styles.price}>{formatPrice(data?.Price)}</Text>

          {data?.Location && (
            <Text style={styles.location} numberOfLines={1}>
              {data?.Location}
            </Text>
          )}

          {data?.Date_Time && (
            <Text style={styles.date}>{formatDate(data?.Date_Time)}</Text>
          )}
        </View>
        {/* Register Button */}
        <TouchableOpacity
          style={[
            styles.registerButton,
            { backgroundColor: isRegistered ? Colors.green : Colors.primary },
          ]}
          onPress={onRegister}
        >
          <Text style={styles.registerButtonText}>
            {isRegistered ? 'Saved' : 'Register'}
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
