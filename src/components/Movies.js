import React from 'react';

const Movie = () => {
    <div className="movie">
        Movie Component
    </div>

  const APP_ID = "3ff9aa5f";
  const APP_KEY = "82903f99797fb099b4a72093b60a5879";

  useEffect( () => {
    getCine();
    }, []
  );

  const getCine = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/550?api_key=82903f99797fb099b4a72093b60a5879`);
    const data = await response.json();
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

export default Movie;