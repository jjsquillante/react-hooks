// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import React, { useEffect, useState } from 'react';

function useLocalStorage(key, initialName = '') {
  const [name, setName] = useState(
    () => window.localStorage.getItem(key) || initialName,
  );

  useEffect(() => {
    window.localStorage.setItem(key, name);
  }, [key, name]);

  return [name, setName];
}

function Greeting() {
  const [name, setName] = useLocalStorage('name', 'James');

  function handleChange({ target: { value } }) {
    setName(value);
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  );
}

function App() {
  return <Greeting />;
}

export default App;
