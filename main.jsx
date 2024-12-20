import React from 'react'
import {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import myStore from './Store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store = {myStore}>
        <App />

    </Provider>
  
  </React.StrictMode>,
)
