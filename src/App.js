import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [query, setQuery] = useState('');
  const [search, setSearch] = useState('');
  const [pokemon, setPokemon] = useState('');

  useEffect(() => {
    apiSearch();
  }, [pokemon])

  const apiSearch = async () => {
    const search = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const response = await search.json();
    setQuery(response.name);
    console.log(response.name);
    console.log(response);
  }

  const inputSearch = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  }

  const submitForm = (e) => {
    e.preventDefault();
    setPokemon(search);
    setSearch('');
  }

  return (
    <div className="App">
      <form onSubmit={submitForm} className='search-form'>
        <input value={search} className='search-bar' type="text" onChange={inputSearch} />
        <button className='search-button' type="submit">Search</button>
      </form>

    <h1>{query}</h1>
    </div>
  );
}

export default App;
