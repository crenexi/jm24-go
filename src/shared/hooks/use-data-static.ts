import { useContext } from 'react';
import DataStaticContext from '@contexts/DataStaticContext';

const useDataFirebase = () => useContext(DataStaticContext);

export default useDataFirebase;
