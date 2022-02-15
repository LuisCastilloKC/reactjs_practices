import React, { useState } from 'react';
import EmptyStar from './assets/empty-star.svg';
import FilledStar from './assets/filled-star.svg';
import './styles.css';



const RatingSystem = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [starsSelected, setStarsSlelected] = useState(0)
  const stars = Array(5).fill(0);

    const handleClick = value =>{
      setCurrentValue(value)
    };

    const handleMouseOver = value =>{
      setHoverValue(value)
    };
    const handleMouseLeave = () =>{
      setHoverValue(undefined)
    };


  return (
    <div className='fiveStarSystem'>
      <div className='wrapper'> 
      <h1>5 star rating system</h1>
      <h2>Select a rating:</h2>
        <div>
          {stars.map((star, index)=>{
            return (
              <img alt="empty star" activeColor={''}
              key={index} 
              src={(hoverValue || currentValue) > index ? FilledStar : EmptyStar} 
              onClick={()=> handleClick(index + 1) & setStarsSlelected(index + 1) }
              onMouseOver={()=> handleMouseOver(index + 1)}
              onMouseLeave={()=> handleMouseLeave}/>
            )
              })}</div>
      <p> {starsSelected} Star Selected{} </p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <RatingSystem />
    </div>
  )
};
