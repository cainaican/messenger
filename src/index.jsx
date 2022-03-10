import React from 'react'
import ReactDom from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { BrowserRouter } from 'react-router-dom'
import Router from './containers/Router'
import store from './store/store'
import { Provider } from 'react-redux'



ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <MuiThemeProvider >
        <Router />
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)