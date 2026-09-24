import { createRoot } from 'react-dom/client';

import { ThemeProvider } from '@core/foundation/context/theme';
import { apiClient } from '@core/foundation/util/apiClient';
import type { ApiConfig } from '@core/foundation/util/apiClient/type';
import { UuidGenerator } from '@core/foundation/util/security';

import App from './App';
import useStorageAdapter from './shared/hook/useStorageAdapter';

// eslint-disable-next-line react-hooks/rules-of-hooks
const storageAdapter = useStorageAdapter();

const apiConfig = (() => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const getToken: ApiConfig['getToken'] = () => storageAdapter.getItem('jwtToken');
  const setToken: ApiConfig['setToken'] = (token) => {
    if (token === null) {
      return storageAdapter.removeItem('jwtToken');
    }
    return storageAdapter.setItem('jwtToken', token);
  };
  const getRefreshToken: ApiConfig['getRefreshToken'] = () =>
    storageAdapter.getItem('refreshToken');
  const setRefreshToken: ApiConfig['setRefreshToken'] = (refreshToken) => {
    if (refreshToken === null) {
      return storageAdapter.removeItem('refreshToken');
    }
    return storageAdapter.setItem('refreshToken', refreshToken);
  };

  const getClientId: ApiConfig['getClientId'] = async () => {
    let clientId = await storageAdapter.getItem('clientId');
    if (!clientId) {
      clientId = UuidGenerator.generate();
      await storageAdapter.setItem('clientId', clientId);
    }
    return clientId;
  };

  return {
    baseUrl,
    getToken,
    setToken,
    getRefreshToken,
    setRefreshToken,
    getClientId,
  };
})();

apiClient.setConfig(apiConfig);

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
);
