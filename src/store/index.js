import { createStore, applyMiddleware, combineReducers } from "redux";
// middleware
import logger from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage";
import promiseMiddleware from 'redux-promise-middleware'

import user from './reducers/user'
import user2 from './reducers/user'
// konfigurasi redux-persist
const persistConfig = {
  key: 'root',
  storage
}
// menyatukan semua reducers
const reducers = combineReducers({
  user,
  user2
})

// menghubungkan reducer dengan redux persist
const persistedReducer = persistReducer(persistConfig, reducers)

// middleware
const middleware = applyMiddleware(promiseMiddleware, logger)

// create store redux
const store = createStore(persistedReducer, middleware)

// create store redux-persist yang terhubung dengan store redux
const persistor = persistStore(store)

export {store, persistor}