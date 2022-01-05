import thunk from 'redux-thunk';
import {applyMiddleware, combineReducers, createStore} from "redux";
import {persistReducer, persistStore} from "redux-persist";
import authReducer from "./reducers/authReducer";
import AsyncStorage from "@react-native-community/async-storage";

// const persistConfig = {
//     key: 'root',
//     storage: AsyncStorage,
//     whitelist: ['auth']
// }

const rootReducer = combineReducers({
    auth: authReducer
});

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(rootReducer, applyMiddleware(thunk))

// export const persistor = persistStore(store);

export default {store};