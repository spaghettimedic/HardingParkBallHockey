import React from "react";

import "./styles.css";
import GameDayCard from "@components/GameDayCard";

const GameDays: React.FC = () => {
  const pastGameDays = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const upcomingGameDays = [1, 2];

  return (
    <div className="grid-container">
      <h2 style={{ gridColumnStart: 2 }}>Upcoming</h2>
      {upcomingGameDays.map((cardId, i) => (
        <GameDayCard
          cardId={cardId}
          gridColumnStart={1}
          gridColumnEnd={4}
          gridRowStart={2 + i}
        />
      ))}

      <h2 style={{ gridColumnStart: 6, gridRowStart: 1 }}>Past</h2>
      {pastGameDays.map((cardId, i) => (
        <GameDayCard
          cardId={cardId}
          gridColumnStart={5}
          gridColumnEnd={8}
          gridRowStart={2 + i}
        />
      ))}
    </div>
  );
};

export default GameDays;
