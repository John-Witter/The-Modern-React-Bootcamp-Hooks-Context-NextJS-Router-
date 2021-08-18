import React, {useState} from 'react'

function Toggler() {
    // const [isHappy, setIsHappy] = useState(true)
    // const [isHeartbroken, setIsHeartbroken] = useState(false)
    

    // custom hook useToggle calls useState
    // returns: piece of state and a function to toggle it
    
    function useToggle(initialVal = false) {
        const [state, setState] = useState(initialVal)

        const toggle = () => {
            setState(!state)
        }

        return [state, toggle]
    }
    
    const [isHappy, toggleIsHappy] = useToggle(true)
    const [isHeartbroken, toggleIsHeartbroken] = useToggle(false)



    // redundent
    // const toggleIsHappy = () => {
    //     setIsHappy(!isHappy)
    // }
    // const toggleIsHeartbroken = () => {
    //     setIsHeartbroken(!isHeartbroken)
    // }


    return (
        // <h1 onClick={() => setIsHappy(!isHappy)}>{isHappy ? "😁" : "😣"}</h1>
        <div>
            {/* <h1 onClick={toggleIsHappy}>{isHappy ? "😁" : "😣"}</h1>
            <h1 onClick={toggleIsHeartbroken}>{isHeartbroken ? "💔" : "❤️"}</h1> */}
            <h1 onClick={toggleIsHappy}>{isHappy ? "😁" : "😣"}</h1>
            <h1 onClick={toggleIsHeartbroken}>{isHeartbroken ? "💔" : "❤️"}</h1>


        </div>
    )
}

export default Toggler