import "./App.css";

import responseMovies from './mocks/with-results.json';
import withoutResults from './mocks/no-results.json';

function App() {
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
        aqui ira el contenido
      </main>
    </div>
  );
}

export default App;
