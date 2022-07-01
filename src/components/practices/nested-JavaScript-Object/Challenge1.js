/*
Specification
Write a functional component that accepts an arbitrarily nested object as a prop. 
Each key/property of the object is a word and its associated value is either (1) an object of 
the same format or (2) a definition string. An example of one such object is below.


*/

/*

{
    taxi: "a car licensed to transport passengers in return for payment of a fare",
    food: {
      sushi:
        "a traditional Japanese dish of prepared rice accompanied by seafood and vegetables",
      apple: {
        Honeycrisp:
          "an apple cultivar developed at the MAES Horticultural Research Center",
        Fuji: "an apple cultivar developed by growers at Tohoku Research Station",
      },
    },
  }

*/

import React, { useState } from 'react'

const challenge1 = () =>{

    const [nestedObjected, setNestedObject] = useState({
        taxi: "a car licensed to transport passengers in return for payment of a fare",
        food: {
          sushi:
        "a traditional Japanese dish of prepared rice accompanied by seafood and vegetables",
      apple: {
        Honeycrisp:
          "an apple cultivar developed at the MAES Horticultural Research Center",
        Fuji: "an apple cultivar developed by growers at Tohoku Research Station",
    });

    return(
        <div>
            <DisplayNested nestedObjected={nestedObjected}
        </div>
    )
}

const DisplayNested = ({nestedObjected}) => {

    return(
        {Object.entries(nestedObjected).map(([key, value]) => {
            if (typeof value === "object") {
              return (
                <>
                  <p>{`${key}: `}</p>
                  <div style={{ paddingLeft: 50 }}>
                    <DisplayNested nestedObjected={value} />
                  </div>
                </>
              );
            } else {
              return <p>{`${key}: ${value}`}</p>;
            }
          })}
        </>
      );
}