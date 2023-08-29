import { useState, useEffect, useRef } from "react";
import "./App.css";
import { useMovies } from "./Hooks/useMovies";
import { Movies } from "./components/Movies";

function App() {
  const { movies: mappedMovies } = useMovies();

  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);

  const counter = useRef(0);
  counter.current++;
  console.log(counter.current);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ query });
  };

  const handleChange = (e) => {
    //con esto evitamos que empice con espacio vacio
    const newQuery = e.target.value;
    if (newQuery.startsWith(" ")) return;
    setQuery(e.target.value);
  };
  useEffect(() => {
    if (query === "") {
      setError("No se puede buscar una pelicula vacia");
      return;
    }
    if (query.match(/^\d+$/)) {
      setError("No se puede buscar con un numero");
      return;
    }
    if (query.length < 3) {
      setError("La Busqueda debe tener al menos 3 caracteres");
      return;
    }
    setError(null);
  }, [query]);

  return (
    <div className="page">
      <header>
        <h1>Buscador de péliculas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            style={{
              border: "1px solid transparent",
              borderColor: error ? "red" : "transparent",
            }}
            onChange={handleChange}
            value={query}
            name="query"
            placeholder="Avengers, Star Wars, The Matrix"
          />
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>
      <main>
        <Movies movies={mappedMovies} />
      </main>
    </div>
  );
}

export default App;
