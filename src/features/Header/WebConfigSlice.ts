import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type themeTypes = 'light' | 'dark';

export interface IWebConfig {
  fontSize: number;
  theme: themeTypes;
  status: 'idle' | 'loading';
}

const initialState: IWebConfig = {
  fontSize: 15,
  theme: 'light',
  status: 'idle',
};


export const webConfigSlice = createSlice({
  name: 'webConfig',
  initialState,
  reducers: {
    incrementFontSize: (state) => {
      if (state.fontSize > 10) state.fontSize -= 2;
    },
    decrementFontSize: (state) => {
      if (state.fontSize < 20) state.fontSize += 2;
    },
    setFontSize: (state, action: PayloadAction<number>) => {
      state.fontSize = action.payload;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

export const { incrementFontSize, decrementFontSize, setFontSize, toggleTheme } = webConfigSlice.actions;

export default webConfigSlice.reducer;
