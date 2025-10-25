import React from 'react';
import { View, ActivityIndicator, Text, FlatList } from 'react-native';

import styles from './styles';
import Card from '@components/card';
import Colors from '@common/colors';
import useGetEvents from '@hooks/useGetEvents';
import { EventDataType } from '../../types';
import screenNames from '@navigation/screenNames';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { registerEvent, removeEvent } from '@store/slices/cardsSlice';
import { RootState } from '@store/index';

const Events: React.FC = () => {
  const { events = [], loading, error } = useGetEvents();
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();

  const registeredEvents = useSelector(
    (state: RootState) => state.cards.registeredEvents || [],
  );

  const handleRegister = (event: EventDataType) => {
    const isRegistered = registeredEvents.some(e => e.id === event.id);
    if (isRegistered) {
      dispatch(removeEvent(event.id));
    } else {
      dispatch(registerEvent(event));
    }
  };

  const renderEventCard = ({ item }: { item: EventDataType }) => {
    if (!item) return null;
    const isRegistered = registeredEvents.some(e => e.id === item.id);
    return (
      <Card
        data={item}
        onPress={() => {
          navigation.navigate(screenNames.CardDetails, { eventData: item });
        }}
        onRegister={() => handleRegister(item)}
        isRegistered={isRegistered}
      />
    );
  };

  if (loading) {
    return (
      <View style={[styles.innerContainer, styles.centerContainer]}>
        <ActivityIndicator size="large" color={Colors.primary} />
        <Text>Loading events...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.innerContainer, styles.centerContainer]}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={events}
      renderItem={renderEventCard}
      keyExtractor={(_, index) => index.toString()}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.flatListContent}
      ListHeaderComponent={
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>List of Events</Text>
        </View>
      }
      ListEmptyComponent={
        <View style={styles.centerContainer}>
          <Text>No events found</Text>
        </View>
      }
    />
  );
};

export default Events;
