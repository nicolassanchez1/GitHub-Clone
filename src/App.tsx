import React from 'react'
import { store , persistor} from './redux/store/store';
import { AppRouter } from './routes';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './App.scss'


function App () {
  return (
    <Provider store={ store }>
      <PersistGate loading={null} persistor={persistor}>
      <AppRouter />
      </PersistGate>
    </Provider>
  )
}

export default App
