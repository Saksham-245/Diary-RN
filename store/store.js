import thunk from 'redux-thunk';
import {applyMiddleware, combineReducers, createStore} from "redux";
import {persistReducer, persistStore} from "redux-persist";
import AsyncStorage from '@react-native-async-storage/async-storage';
import authReducer from "./reducers/authReducer";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['auth']
}

const rootReducer = combineReducers({
    auth: authReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk))

export const persistor = persistStore(store);

export default {store,persistor};