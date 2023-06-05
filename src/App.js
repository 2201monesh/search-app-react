import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [search, setSearch] = useState('');

  useEffect(() => {
    apiSearch();
  }, [])

  const apiSearch = async () => {
    // const search = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const search = await fetch('https://restcountries.com/v3.1/lang/spanish');
    const response = await search.json();
    console.log(response);
  }

  return (
    <div className="App">
      <form className='search-form'>
        <input className='search-bar' type="text" />
        <button className='search-button' type="submit">Search</button>
      </form>
    </div>
  );
}

export default App;
