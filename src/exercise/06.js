// useEffect: HTTP requests
// http://localhost:3000/isolated/exercise/06.js

import React, { useEffect, useState } from 'react';
import {
  PokemonForm,
  fetchPokemon,
  PokemonDataView,
  PokemonInfoFallback,
} from '../pokemon';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(e) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error: e.message };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div role="alert">
          There was an error:{' '}
          <pre style={{ whiteSpace: 'normal' }}>{this.state.error}</pre>
        </div>
      );
    }

    return this.props.children;
  }
}

function PokemonInfo({ pokemonName }) {
  const [pokemon, setPokemon] = useState(() => ({
    status: 'idle',
  }));
  useEffect(() => {
    if (pokemonName != null && pokemonName !== '') {
      setPokemon({
        status: 'pending',
      });
      fetchPokemon(pokemonName).then(
        (data) => {
          setPokemon({
            ...data,
            status: 'resolved',
          });
        },
        ({ message }) => {
          setPokemon({
            status: 'rejected',
            message,
          });
        },
      );
    }
  }, [pokemonName]);

  if (pokemonName == null || pokemonName === '') {
    return 'Submit a Pokemon';
  }

  if (pokemon?.status === 'rejected') {
    throw new Error(pokemon?.message);
  }

  return pokemonName != null && pokemon?.status === 'pending' ? (
    <PokemonInfoFallback name={pokemonName} />
  ) : (
    <PokemonDataView pokemon={pokemon} />
  );
}

function App() {
  const [pokemonName, setPokemonName] = React.useState('');

  function handleSubmit(newPokemonName) {
    setPokemonName(newPokemonName);
  }

  return (
    <div className="pokemon-info-app">
      <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
      <hr />
      <ErrorBoundary key={pokemonName}>
        <div className="pokemon-info">
          <PokemonInfo pokemonName={pokemonName} />
        </div>
      </ErrorBoundary>
    </div>
  );
}

export default App;
