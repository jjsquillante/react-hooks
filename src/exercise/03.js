// Lifting state
// http://localhost:3000/isolated/exercise/03.js

import React, { useState } from 'react';

function Name() {
  const [name, setName] = useState('');
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input
        id="name"
        value={name}
        onChange={({ target: { value } }) => setName(value)}
      />
    </div>
  );
}

function FavoriteAnimal({ animal, onAnimalChange }) {
  return (
    <div>
      <label htmlFor="animal">Favorite Animal: </label>
      <input id="animal" value={animal} onChange={onAnimalChange} />
    </div>
  );
}

function Display({ animal }) {
  return <div>{`your favorite animal is: ${animal}!`}</div>;
}

function App() {
  const [animal, setAnimal] = useState('');
  const handleAnimalChange = ({ target: { value } }) => setAnimal(value);

  return (
    <form>
      <Name />
      <FavoriteAnimal animal={animal} onAnimalChange={handleAnimalChange} />
      <Display animal={animal} />
    </form>
  );
}

export default App;
