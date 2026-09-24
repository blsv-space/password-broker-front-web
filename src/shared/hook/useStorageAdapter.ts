import type { StorageAdapter } from '@core/foundation/context/global/type/GlobalContext.types';

const useStorageAdapter = (): StorageAdapter => {
  const getItem: StorageAdapter['getItem'] = (key) => {
    return localStorage.getItem(key);
  };

  const setItem: StorageAdapter['setItem'] = (key, value) => {
    localStorage.setItem(key, value);
  };

  const removeItem: StorageAdapter['removeItem'] = (key) => {
    localStorage.removeItem(key);
  };

  return { getItem, setItem, removeItem };
};

export default useStorageAdapter;
