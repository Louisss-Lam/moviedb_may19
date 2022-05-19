import React, { useState } from 'react';
import Search from './components/Search';
import axios from 'axios';

function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  });

  const BASE_URL = 'https://api.themoviedb.org/3/search/movie?api_key=3e21d0634b298df121ea5353d494ab2b&language=en-US&query=';


  const search = (e) => {
    if (e.key === "Enter") {
      axios(BASE_URL + state.s + "&page=1&include_adult=false").then((data) => {
        console.log(data);
        let results = data.Search;

        setState(prevState => {
          return { ...prevState, results: results }
        })
      });
    }
  }

  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return {...prevState, s: s}
    });
  }

  return (
    <div className="App">
      <header className="App-header">
       <h1>Movie Database</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />
      </main>
    </div>
  );
}

export default App;
