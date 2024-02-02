import { useEffect } from 'react';

// Dependencies
import { ThemeProvider } from '@mui/material';
import { SettingsProvider } from '@contexts/SettingsContext';
import { DataStaticProvider } from '@contexts/DataStaticContext';
import { fontAwesome, materialUI } from '@core/libraries';

// Base styles (import before App)
import '@core/styles/_index.scss';

// Implementations
import appSettings from '@config/app-settings';
import dataStatic from '@config/data-static';
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
      <DataStaticProvider value={dataStatic}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </DataStaticProvider>
    </SettingsProvider>
  );
};

export default AppPod;
