import React, { useState } from 'react'

const Form = (props) => {
    const [name, setName] = useState("")
    const handleChange = (e) =>{
        setName(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        props.onSubmit(name)
        setName("")
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Child to Parent</label>
                <input type="text" value={name} onChange={handleChange} />
                <button type="submit">ChildToParent</button>
            </form>
        </div>
    )

}

export default Form