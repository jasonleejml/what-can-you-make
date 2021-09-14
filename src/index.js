import * as React from "react"
import * as ReactDOM from "react-dom"
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { hot } from 'react-hot-loader'
import Home from "./Containers/Home"
import RecipePage from "./pages/RecipePage"
import Recipe from "./Containers/Recipe"
import reducers from "./reducers"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) {
      return undefined
    } else {
      return JSON.parse(serializedState)
    }
  } catch (error) {
    console.error(error)
    return undefined;
  }
}

const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (error) {
    console.error(error)
  }
}

const persistedState = loadStateFromLocalStorage()
const store = createStore(reducers, persistedState, applyMiddleware(thunkMiddleware))

store.subscribe(() => {
  saveStateToLocalStorage(store.getState())
})

const WrappedHome = () => (
  <Provider store={store}>
    <Router>
      <Home />
      <Switch>
        <Route path="/search" component={Recipe} />
        <Route path="/recipe/:id" component={RecipePage} />
      </Switch>
    </Router>
  </Provider>
)

const HotHome = hot(module)(WrappedHome)

ReactDOM.render(
  <HotHome />,
  document.getElementById("home")
)
