import React from 'react'
import { store } from './redux/store/store';
import { AppRouter } from './routes';
import { Provider } from 'react-redux';
import './App.scss'


function App () {
  return (
    <Provider store={ store }>
      <AppRouter />
    </Provider>
  )
}

export default App
