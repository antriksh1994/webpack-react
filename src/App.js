import React from "react"
import { Counter } from "./Counter"

function App() {
    return (<div>
        <Counter></Counter>
        <h2>Welcome to React App</h2>
        <h3>Date : {new Date().toDateString()}</h3>
    </div>)
}

export default App

