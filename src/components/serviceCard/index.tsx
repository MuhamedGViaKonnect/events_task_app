import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import i18n from '@i18n/index';

interface ServiceCardProps {
  data: any;
  onPress?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  data,
  onPress,
}) => {
  const isEn= i18n.language==='en';
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <View style={styles.content}>
        <Text style={styles.title}>{isEn?data?.serviceName?.en:data?.serviceName?.ar}</Text>
        <Text style={styles.details}>{isEn?data?.serviceTypes?.besReservationDescription?.en:data?.serviceTypes?.besReservationDescription?.ar}</Text>
        <Text style={styles.details} numberOfLines={2}>
          {data?.details}
        </Text>
       <Text style={styles.details} numberOfLines={2}>
          {new Date(data?.updatedDate).toLocaleDateString()}
       </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ServiceCard;
