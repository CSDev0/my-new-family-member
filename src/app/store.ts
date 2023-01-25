import animalReducer from '@features/animals/animalSlice';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import webConfigReducer from '../features/Header/WebConfigSlice';

export const store = configureStore({
  reducer: {
    webConfig: webConfigReducer,
    animals: animalReducer,
  },/* preloadedState, */
  devTools: true,
  // enhancers: [devToolsEnhancer({ realtime: true })],
});

export type AppDispatch = typeof store.dispatch;
export const dispatch = store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
