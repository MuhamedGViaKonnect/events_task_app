import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EventDataType } from '../../types';

type CardsState = {
  registeredEvents: EventDataType[];
};

const initialState: CardsState = {
  registeredEvents: [],
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    registerEvent: (state, action: PayloadAction<EventDataType>) => {
      const registeredEvents = state.registeredEvents || [];
      const exists = registeredEvents.some(e => e.id === action.payload.id);
      if (!exists) {
        registeredEvents.push(action.payload);
      }
      state.registeredEvents = registeredEvents;
    },
    removeEvent: (state, action: PayloadAction<string | number>) => {
      state.registeredEvents = state.registeredEvents.filter(
        c => c.id !== action.payload,
      );
    },
    clearEvents: state => {
      state.registeredEvents = [];
    },
  },
});

export const { registerEvent, removeEvent, clearEvents } = cardsSlice.actions;
export default cardsSlice.reducer;
