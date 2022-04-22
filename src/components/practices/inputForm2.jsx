import React, { useState } from 'react'

const Input2 = () =>{
    const [text, setText] = useState(null)


    return(
        <> 
            <input value={text} onChange={ e => setText(e.target.value)} />
            <div>{text}</div>
        </>
    );
};

export default Input2