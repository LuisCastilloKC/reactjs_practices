import React from 'react'

const FilterData = () =>{
    const filterYearsData = (event) =>{
        console.log("Filter Component")
        console.log(event.target.value)
    }

    return(
        <div>
            <div>
                <label> Select Years</label>
                <select onChange={filterYearsData}>
                    <option value="2001">2001</option>
                    <option value="2402">2402</option>
                    <option value="2503">2503</option>
                    <option value="2040">2040</option>
                </select>
            </div>
        </div>
    )
}

export default FilterData