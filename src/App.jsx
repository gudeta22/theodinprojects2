import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Components/Header';
import Scoreboard from './Components/ScoreBoard';
import CardContainer from './Components/CardContainer';
import './index.css';

const App = () => {
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    const fetchCards = async () => {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10');
      const cardData = await Promise.all(response.data.results.map(async (pokemon) => {
        const pokemonData = await axios.get(pokemon.url);
        return {
          id: pokemonData.data.id,
          name: pokemonData.data.name,
          imageUrl: pokemonData.data.sprites.front_default
        };
      }));
      setCards(cardData);
    };
    fetchCards();
  }, []);

  const shuffleCards = () => {
    setCards((prevCards) => [...prevCards].sort(() => Math.random() - 0.5));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Scoreboard score={score} bestScore={bestScore} />
      <CardContainer cards={cards} shuffleCards={shuffleCards} />
    </div>
  );
};

export default App;
