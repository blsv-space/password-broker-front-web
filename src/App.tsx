import { type FC, useEffect } from 'react';

import { GlobalProvider } from '@core/foundation/context/global';
import { useTheme } from '@core/foundation/context/theme';
import { AuthProvider } from '@core/module/identity/context/Auth';

import './assets/styles/main.module.css';
import useStorageAdapter from './shared/hooks/useStorageAdapter';

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
    <GlobalProvider storageAdapter={storageAdapter}>
      <AuthProvider>
        <></>
      </AuthProvider>
    </GlobalProvider>
  );
};

export default App;
