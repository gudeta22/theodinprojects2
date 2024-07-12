import React from 'react';

const Card = ({ card }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={card.imageUrl} alt={card.name} className="w-full h-32 object-cover" />
      <p className="p-2 text-center">{card.name}</p>
    </div>
  );
};

export default Card;
