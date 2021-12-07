import thunk from 'redux-thunk'
import { applyMiddleware, compose, createStore } from 'redux'
import { rootReducer } from '../reducers/rootReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
)
export const persistor = persistStore(store)
