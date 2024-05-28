import { createStore } from 'redux';
import { persistStore, persistReducer, createTransform } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

// Özel dönüştürücü
const filterTransform = createTransform(
  (inboundState, key) => {
    const cleanedState = { ...inboundState };
    
    Object.keys(cleanedState).forEach((k) => {
      if (cleanedState[k] && typeof cleanedState[k] === 'object' && '_dispatchInstances' in cleanedState[k]) {
        delete cleanedState[k];
      }
    });
    return cleanedState;
  },
  
  (outboundState, key) => outboundState,
  { whitelist: ['favorites'] }
);

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  transforms: [filterTransform]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

 const store = createStore(persistedReducer);
 const persistor = persistStore(store);

export {
  store, persistor
}
