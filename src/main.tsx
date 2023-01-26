import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './app/App'
import { store } from './app/store'
import './index.css'
import { StyledEngineProvider } from '@mui/material/styles';
import 'react-lazy-load-image-component/src/effects/blur.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StyledEngineProvider injectFirst>
    <Provider store={store}>
      <App />
    </Provider>
  </StyledEngineProvider>
)
