import React, { useState } from 'react'

const Text = () => {

    const [textdata, setTextdata] = useState(null)

    const getDataValue = (e) =>{
        setTextdata(e.target.value)
    }

    return(
        <div>
            <input type="text" onChange={getDataValue} />
            <div>{textdata}</div>
        </div>
    );
};

export default Text