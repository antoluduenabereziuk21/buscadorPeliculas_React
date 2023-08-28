import "./App.css";

import responseMovies from "./mocks/with-results.json";
import withoutResults from "./mocks/no-results.json";

function App() {
  //consultamos si tenemos resultados con search
  const movies = responseMovies.Search;
  //sabiendo que nos devuelve un array
  //preguntamos si ese array es mayor a 0
  const hasMovies = movies?.length > 0;
  
  //para luego en el main renderizar mediante
  //renderizado condicional

  return (
    <div className="page">
      <header>
        <h1>Buscador de péliculas</h1>
        <form className="form">
          <input placeholder="Avengers, Star Wars, The Matrix" />
          <button type="submit">Buscar</button>
        </form>
      </header>
      <main>
        {hasMovies ? (
          <ul>
            {movies.map((movie) => (
              <li key={movie.imdbID}>
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
                <img src={movie.Poster} alt={movie.Title} />
              </li>
            ))}
          </ul>
        ) : (
          <p>No se encontro resultados en la busqueda</p>
        )}
      </main>
    </div>
  );
}

export default App;
