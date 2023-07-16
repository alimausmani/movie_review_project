import React from 'react';
import { useState } from 'react';
const Action_row = () => {
const [rating, setRating] = useState(0);

  function Like() {
    setRating(rating + 1);
  }
   function Dislike() {
    setRating(rating -1);
  }
    return (
        <>
        <div className="Action">
            <div className="Like_button">
                <img src="Like_icon.png" onClick={Like}/>
            </div>
            <div> 
                <p className="rating">{rating}</p>
            </div>
            <div className="Dislike_button">
                <img src="Dislike_icon .png" onClick={Dislike}/>
            </div>
            <div className="Delete_button">
                <img src="Delete_icon.png"/>
            </div>
        </div>
        </>
    );
}

export default Action_row;

