import React from "react";

import "./styles.css";
import GameDayCard from "../../components/GameDayCard";

const GameDays: React.FC = () => {
  const numOfGameDays = [0, 1, 2, 3, 4, 5];

  return (
    <div className="header">
      <h2>Game Days</h2>

      {numOfGameDays.map((cardId) => (
        <GameDayCard cardId={cardId} />
      ))}
    </div>
  );
};

export default GameDays;
