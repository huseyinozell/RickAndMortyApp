import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['favorites'] // Sadece 'favorites' reducer'ını persist et
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

 const store = createStore(persistedReducer);
 const persistor = persistStore(store);

export {
  store, persistor
}
