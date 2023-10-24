import React from 'react'
import ReactDOM from 'react-dom/client'
import { CounterApp } from './CounterApp.jsx'
import { Provider } from 'mobx-react'
import store from './store/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <CounterApp/>
    </Provider>
  </React.StrictMode>,
)
