import React from "react";

import "./styles.css";

interface props {
  cardId: number;
  gridColumnStart: number;
  gridColumnEnd: number;
  gridRowStart: number;
}

const GameDayCard: React.FC<props> = ({
  cardId,
  gridColumnStart,
  gridColumnEnd,
  gridRowStart,
}) => {
  return (
    <div
      className="card"
      style={{ gridColumnStart, gridColumnEnd, gridRowStart }}
    >
      <h4>Game Day Card {cardId}</h4>
    </div>
  );
};

export default GameDayCard;
