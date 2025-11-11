import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session'; // sessionStorage
import { combineReducers } from 'redux';
import choicesReducer from './slices/choicesSlice';

const persistConfig = {
    key: 'root',
    storage: storageSession,
    blacklist: [], // escludi se serve
    // TTL 30 minuti: usiamo un wrapper personalizzato (vedi sotto)
};

const rootReducer = combineReducers({
    choices: choicesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);
