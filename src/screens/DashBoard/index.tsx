import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles';
import { RootState } from '@store/index';
import Card from '@components/card';
import { useNavigation } from '@react-navigation/native';
import screenNames from '@navigation/screenNames';
import { EventDataType } from '../../types';
import { registerEvent, removeEvent } from '@store/slices/cardsSlice';

const DashBoard = () => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();

  const registeredEvents = useSelector(
    (state: RootState) => state.cards?.registeredEvents || [],
  );

  const handleRegister = (event: EventDataType) => {
    const isRegistered = registeredEvents.some(e => e.id === event.id);
    if (isRegistered) {
      dispatch(removeEvent(event.id));
    } else {
      dispatch(registerEvent(event));
    }
  };
  const renderCard = ({ item }: { item: any }) => {
    const isRegistered = registeredEvents.some(e => e.id === item.id);
    return (
      <Card
        data={item}
        onPress={() =>
          navigation.navigate(screenNames.CardDetails, { eventData: item })
        }
        isRegistered={isRegistered}
        onRegister={() => handleRegister(item)}
      />
    );
  };

  return (
    <View style={styles.container}>
      {registeredEvents.length === 0 ? (
        <View style={styles.centerContainer}>
          <Text>No registered events</Text>
        </View>
      ) : (
        <FlatList
          data={registeredEvents}
          renderItem={renderCard}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.flatListContent}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View style={styles.centerContainer}>
              <Text>No registered events</Text>
            </View>
          }
          ListHeaderComponent={
            <View style={styles.innerContainer}>
              <Text style={styles.headerTxt}>Saved Cards</Text>
            </View>
          }
        />
      )}
    </View>
  );
};

export default DashBoard;
