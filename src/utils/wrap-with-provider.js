import React from "react"
import { Provider } from "react-redux"
import { createStore } from "redux"

import allReducers from "../reducers"

export default ({ element }) => {
    {console.log(allReducers)}
    const store = createStore(allReducers)
    return <Provider store={store}>{element}</Provider>
}