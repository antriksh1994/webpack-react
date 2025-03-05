import React from "react"
import { useState } from "react"

export const Counter = () => {
    const [count, setCount] = useState(0)

    const incrementCounter = () => {
        setCount(prevValue => prevValue + 1)
    }
    const decrementCounter = () => {
        setCount(prevValue => prevValue - 1)
    }
    return (
        <div>
            <button onClick={() => incrementCounter()}>Increment</button>
            <div>
                <span>{count}</span>
            </div>
            <button onClick={() => decrementCounter()}>Decrement</button>
        </div>
    )
}

