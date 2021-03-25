import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const contactPersistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};
const store = configureStore({
  reducer: {
    contacts: persistReducer(contactPersistConfig, userReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});
const persistor = persistStore(store);

export default { store, persistor };
