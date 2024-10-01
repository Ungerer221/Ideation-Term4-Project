// import React from "react";

import React, { useEffect, useState } from 'react';

const RandomDrinks = () => {
  const words = ['Tea', 'Coffee', 'Apple Juice', 'Sausage Juice', 'Starbucks', 'Grape Juice', 'Water',];
  const [currentWord, setCurrentWord] = useState('');

  useEffect(() => {
    // Function to select a random word
    const getRandomWord = () => {
      const randomIndex = Math.floor(Math.random() * words.length);
      setCurrentWord(words[randomIndex]);
    };

    // Get a random word immediately
    getRandomWord();

    // Set up interval to change word every minute (60000 ms)
    const intervalId = setInterval(getRandomWord, 60000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [words]);

  return (
    <div>
      <p style={{fontSize:'16px'}}>{currentWord}</p>
    </div>
  );
};

export default RandomDrinks;
