import { createContext, useCallback, useContext, useMemo, useState, PropsWithChildren } from 'react';
import { ThemeProvider } from '@mui/material';
import { Box } from '@mui/system';

import { LightTheme } from '../theme/Light'
import { DarkTheme } from '../theme/Dark'

interface IThemeContextData {
  themeName: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<IThemeContextData>({} as IThemeContextData);

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
};

// eslint-disable-next-line @typescript-eslint/ban-types
type IAppThemeProviderProps = PropsWithChildren<{}>;

export const AppThemeProvider = ({ children }: IAppThemeProviderProps) => {
  const [themeName, setThemeName] = useState<'light' | 'dark'>('light');

  const toggleTheme = useCallback(() => {
    setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light');
  }, []);

  const theme = useMemo(() => {
    return themeName === 'light' ? LightTheme : DarkTheme;
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
