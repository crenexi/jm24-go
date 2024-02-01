import { createContext } from 'react';

const DataFirebaseContext = createContext(null);

export const SettingsProvider = DataFirebaseContext.Provider;
export const SettingsConsumer = DataFirebaseContext.Consumer;
export default DataFirebaseContext;
