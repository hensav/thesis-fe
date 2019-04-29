import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import reducers from "./reducers"

const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk),
        //for react dev tools chrome extension
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)
export default store
