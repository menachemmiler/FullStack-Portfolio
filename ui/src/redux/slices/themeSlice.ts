import { createSlice } from '@reduxjs/toolkit';

const getInitialTheme = (): boolean => {
  const saved = localStorage.getItem('theme');
  if (saved) return saved === 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    isDark: getInitialTheme(),
  },
  reducers: {
    toggleTheme: (state) => {
      state.isDark = !state.isDark;
      if (state.isDark) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
      }
    },
    initThemeRedux: (state) => {
      if (state.isDark) document.body.classList.add('dark-mode');
    },
  },
});

export const { toggleTheme, initThemeRedux } = themeSlice.actions;
export default themeSlice;
