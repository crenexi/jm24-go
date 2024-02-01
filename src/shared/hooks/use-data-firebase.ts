import { useContext } from 'react';
import DataFirebaseContext from '@contexts/DataFirebaseContext';

const useDataFirebase = () => useContext(DataFirebaseContext);

export default useDataFirebase;
