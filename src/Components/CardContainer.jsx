import React from 'react';
import Card from './Card';

const CardContainer = ({ cards, shuffleCards }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4" onClick={shuffleCards}>
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

export default CardContainer;
