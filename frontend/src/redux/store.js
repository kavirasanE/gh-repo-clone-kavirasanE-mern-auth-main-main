import {combineReducers, configureStore}from '@reduxjs/toolkit';
import userReducer from './user/userSlice.js'
import { persistStore,persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer =combineReducers({user:userReducer});
const persistConfig = {
    key:'root',
    version: 1,
    storage,
}

const persistedReducer = persistReducer (persistConfig,rootReducer)
const store = configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware) =>  getDefaultMiddleware( {
        serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export { store, persistor}
