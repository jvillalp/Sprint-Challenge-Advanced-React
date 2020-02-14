import React from "react";

const WomensCard = props => {
    const {name,country,searches } = props.player;
  return (
    <div className='player-cards'>
        <div>
      <h2>{name}</h2>
      <h4>{country}</h4>
      <p>Searches: {searches}</p>
    </div>
    </div>
  );
};
export default WomensCard;
