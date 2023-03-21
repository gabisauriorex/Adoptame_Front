import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { store } from "./Redux/Store/store";
import { Provider } from "react-redux";

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


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
     </BrowserRouter>  
    </React.StrictMode>
  </Provider>,
)
