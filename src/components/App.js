import React from 'react'
import '../normalize.css'
import { Provider } from 'react-redux' 
import Main from './Main'
import store from '../store'

const App = () => (
    <Provider store={store.default}>

        <Main />

    </Provider>
)

export default App