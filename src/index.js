import React, { render } from 'preact-compat'
import { createStore } from 'redux'
import { Provider } from 'preact-redux'
import App from './components/App'
import rootReducer from './reducers'

const store = createStore(rootReducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
