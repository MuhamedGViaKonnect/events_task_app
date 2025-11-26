import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import styles from './styles';
import screenNames from '@navigation/screenNames';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ServiceCard from '@components/serviceCard';
import { t } from 'i18next';

const Services: React.FC = () => {
  const navigation = useNavigation<any>();

  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchServices = async () => {
    try {
      const token = await AsyncStorage.getItem('token');

      if (!token) {
        setError('No token found');
        setLoading(false);
        return;
      }

      const res = await axios.get(
        "https://e7gezly-1054846845303.us-central1.run.app/api/v1/clientService/services?serviceTypeId=3&clientId=166",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setServices(res.data?.data || []);
    } catch (err: any) {
      setError(err?.response?.data?.responseMessage || "Error fetching services");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const renderServiceCard = ({ item }: any) => {
    return (
      <ServiceCard
        data={item}
        onPress={() =>
          navigation.navigate(screenNames.CardDetails, { serviceData: item })
        }
      />
    );
  };

  if (loading) {
    return (
      <View style={[styles.innerContainer, styles.centerContainer]}>
        <ActivityIndicator size="large" />
        <Text>{t("loading")}</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.innerContainer, styles.centerContainer]}>
        <Text style={{ color: 'red' }}>⚠️ {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>{t('title')}</Text>
          </View>
      <FlatList
        data={services}
        renderItem={renderServiceCard}
        keyExtractor={(item) => item.clientServiceId.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

export default Services;
