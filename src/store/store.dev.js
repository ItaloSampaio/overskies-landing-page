import { createStore, applyMiddleware } from 'redux'
import imutableState from 'redux-immutable-state-invariant'
import { createLogger } from 'redux-logger'
import reducers from '../reducers'

const middlewares = applyMiddleware(
    imutableState(), 
    createLogger()
)

export default createStore(
    reducers,
    middlewares
)
