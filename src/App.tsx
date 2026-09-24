import { type FC, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { GlobalProvider } from '@core/foundation/context/global';
import { useTheme } from '@core/foundation/context/theme';
import { AuthProvider } from '@core/module/identity/context/Auth';

import './assets/styles/main.module.css';
import useStorageAdapter from './shared/hook/useStorageAdapter';
import MainPage from './shared/page/main/MainPage';

const App: FC = () => {
  const themeContext = useTheme();
  const storageAdapter = useStorageAdapter();

  useEffect(() => {
    if (themeContext.theme === 'dark') {
      import('./assets/styles/dark.module.css');
    } else {
      import('./assets/styles/light.module.css');
    }
  }, [themeContext.theme]);

  return (
    <BrowserRouter>
      <GlobalProvider storageAdapter={storageAdapter}>
        <AuthProvider>
          <MainPage />
        </AuthProvider>
      </GlobalProvider>
    </BrowserRouter>
  );
};

export default App;
