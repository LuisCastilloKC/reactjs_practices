import React from 'react';

const Form = () => {

    const data = [
        {name: "Jose"},
        {name: "Maria"},
        {name: "Luis"}]


    return(
        <div>
            <form>
                <input type="text" name="name" />
                <input type="submit" value="Submit" /> 
            </form>
        </div>
    )
}

export default Form;