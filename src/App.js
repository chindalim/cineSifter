import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {

  const APP_ID = "3ff9aa5f";
  const APP_KEY = "a1f2e3c4ac058cd771485456580ba360	";

  useEffect(() => {
    //getMovies();
    }, []
  );

  const getCine = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = response.json();
    console.log(data);

    //this is the promise - fetch & then

  }

  return (

    <div className="App">
      <h1>Cine Sifter</h1>

      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>

    </div>
  );
}

export default App;
