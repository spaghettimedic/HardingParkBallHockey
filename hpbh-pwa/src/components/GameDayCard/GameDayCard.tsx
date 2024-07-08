import React from "react";

import "./styles.css";

interface props {
  cardId: number;
}

const GameDayCard: React.FC<props> = ({ cardId }) => {
  return (
    <>
      <div className="card">
        <h4>Game Day Card {cardId}</h4>
      </div>
    </>
  );
};

export default GameDayCard;
