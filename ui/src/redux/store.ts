import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import projectsSlice from './slices/projectSlice';
import themeSlice from './slices/themeSlice';
import userSlice from './slices/userSlice';

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    projects: projectsSlice.reducer,
    theme: themeSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export default store;
