import { useEffect } from 'react';

// Dependencies
import { ThemeProvider } from '@mui/material';
import { SettingsProvider } from '@contexts/SettingsContext';
import { fontAwesome, materialUI } from '@core/libraries';

// Base styles (import before App)
import '@core/styles/_index.scss';

// Implementations
import appSettings from '@config/app-settings';
import { logLiftoff } from './lifttoff';
import App from './App';

/* Application */
const AppPod = () => {
  // Environment
  const isProd = process.env.NODE_ENV === 'production';

  // Initialize MUI theme
  const theme = materialUI.createTheme();

  // Initialize libraries
  fontAwesome.buildLibrary();

  // Application is ready
  useEffect(() => {
    if (!isProd) {
      logLiftoff({ theme });
    }
  }, [theme]);

  return (
    <SettingsProvider value={appSettings}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </SettingsProvider>
  );
};

export default AppPod;
