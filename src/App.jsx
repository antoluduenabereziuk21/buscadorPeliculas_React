import "./App.css";
import { useMovies } from "./Hooks/useMovies";
import { Movies } from "./components/Movies";



function App() {
  
  const {movies : mappedMovies} = useMovies();
 

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
        <Movies movies={mappedMovies}/>
      </main>
    </div>
  );
}

export default App;
