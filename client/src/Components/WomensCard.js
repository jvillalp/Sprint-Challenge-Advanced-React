import React from "react";

const WomensCard = props => {
    const {name,country } = props.player;
  return (
    <div>
      <p>Name{name}</p>
      <p>Country{country}</p>
    </div>
  );
};
export default WomensCard;
