import { createContext } from 'react';

const DataStaticContext = createContext(null);

export const SettingsProvider = DataStaticContext.Provider;
export const SettingsConsumer = DataStaticContext.Consumer;
export default DataStaticContext;
