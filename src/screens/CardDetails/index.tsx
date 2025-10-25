import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { EventDataType } from '../../types';
import styles from './styles';

type RouteParams = {
  CardDetails: {
    eventData: EventDataType;
  };
};

const CardDetails = () => {
  const route = useRoute<RouteProp<RouteParams, 'CardDetails'>>();
  const navigation = useNavigation<any>();
  const { eventData } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>{'< Back'}</Text>
      </TouchableOpacity>

      {/* Event Image */}
      {eventData.Image && (
        <Image source={{ uri: eventData.Image }} style={styles.image} />
      )}

      {/* Event Name */}
      <Text style={styles.title}>{eventData.EventName}</Text>

      {/* Event Details */}
      <View style={styles.row}>
        <Text style={styles.label}>Date & Time:</Text>
        <Text style={styles.value}>
          {new Date(eventData.Date_Time).toLocaleString()}
        </Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Location:</Text>
        <Text style={styles.value}>{eventData.Location}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Description:</Text>
        <Text style={styles.value}>{eventData.Description}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Available Spots:</Text>
        <Text style={styles.value}>{eventData.Available_Spots}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Capacity:</Text>
        <Text style={styles.value}>{eventData.Capacity}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Speakers:</Text>
        <Text style={styles.value}>{eventData.Speakers}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Price:</Text>
        <Text style={styles.value}>${eventData.Price}</Text>
      </View>
    </ScrollView>
  );
};

export default CardDetails;
