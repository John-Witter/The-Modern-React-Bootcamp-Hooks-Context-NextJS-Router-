// https://reactjs.org/docs/hooks-intro.html
import React, { useState } from 'react'

function Example() {
    // Declare a new state variable, which we'll call "count"
    // useState returns 2 
    const [count, setCount] = useState(0)


    return (
        <div>
            <p>You clicked { count } times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )
}