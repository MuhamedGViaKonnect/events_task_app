import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SettingState = {
  language: string;
};

const initialState: SettingState = {
  language: 'en',
};

const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = settingSlice.actions;
export default settingSlice.reducer;
