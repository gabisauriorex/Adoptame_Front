import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { store } from "./Redux/Store/store";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";
import{styled ,createTheme, ThemeProvider}from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: "#01579b",
    },
    secondary: {
      main: "#0277bd",
    },

  },
});

const {VITE_DOMAIN,VITE_CLIENT_ID}=import.meta.env;

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <Auth0Provider
    domain={VITE_DOMAIN}
    clientId={VITE_CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
     </BrowserRouter>  
    </React.StrictMode>
    </Auth0Provider>
  </Provider>,
)
