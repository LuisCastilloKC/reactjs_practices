import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)

    const increase = () =>{
        setCount( count + 1)
    }

    return(
        <> 
            <h1>{count}</h1>
            <button onClick={increase}>Click</button>
        </>
    )
}

export default Counter