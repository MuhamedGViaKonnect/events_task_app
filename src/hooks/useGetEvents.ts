import { useState, useEffect } from 'react';

import { EventDataType } from '../types';
import axios from '@service/axiosInstance';

const useGetEvents = () => {
  const [events, setEvents] = useState<EventDataType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const response = await axios({
        method: 'GET',
        path: 'events' as any
      });
      setEvents(response.data);
      setError(null);
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
      console.error('Error fetching events:', err);
    } finally {
      setLoading(false);
    }
  };

  return { events, loading, error, refetch: fetchEvents };
};

export default useGetEvents;
