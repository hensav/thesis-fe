import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import Exercise from "./components/Exercise/index"
import Stats from "./components/Stats/index"
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom/es"

import store from "./store"

require("./index.scss")

const App = () =>
  <Router>
    <div className="Main">
      <Switch>
        <Route exact path="/" component={Exercise}/>
        <Route exact path="/stats" component={Stats}/>
      </Switch>
    </div>
  </Router>

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.getElementById("root")
)
