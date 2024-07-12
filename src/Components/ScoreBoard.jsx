import React from 'react';

const Scoreboard = ({ score, bestScore }) => {
  return (
    <div className="flex justify-between bg-white shadow-md p-4 my-4 mx-6 rounded-lg">
      <p className="text-xl">Score: {score}</p>
      <p className="text-xl">Best Score: {bestScore}</p>
    </div>
  );
};

export default Scoreboard;
