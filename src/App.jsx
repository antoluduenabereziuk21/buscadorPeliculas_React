import { useState, useEffect, useRef } from "react";
import "./App.css";
import { useMovies } from "./Hooks/useMovies";
import { useSearch } from "./Hooks/useSearch";
import { Movies } from "./components/Movies";



function App() {
  const { movies: mappedMovies } = useMovies();

  const { search,updateSearch,error}= useSearch();
 
/*
  const counter = useRef(0);//valor que persiste entre renders
  counter.current++;
  console.log(counter.current);
*/
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ search });
  };

  const handleChange = (e) => {
    //con esto evitamos que empice con espacio vacio
    const newQuery = e.target.value;
    if (newQuery.startsWith(" ")) return;
    updateSearch(e.target.value);
  };
  

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
            value={search}
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
