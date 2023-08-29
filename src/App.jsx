import { useState } from "react";
import "./App.css";
import { useMovies } from "./Hooks/useMovies";
import { Movies } from "./components/Movies";

function App() {
  const { movies: mappedMovies } = useMovies();
  
  const [query, setQuery] = useState('');

  console.log('render');
  /**
   * en la state almacenaremos la query que se valla cargando
   * mediante un handlechange que seteara el valor ,
   * por medio del input que estara observando los cambios del input que
   * el incomveniente con esto es que cada vez que se haga una cambio 
   * el componente se renderizara
   */

  const handleSubmit = (e)=>{
    e.preventDefault();
    const {query} = Object.fromEntries(new window.FormData(e.target));
    console.log(query);
  };

  const handleChange= (e)=>{
    setQuery(e.target.value);
  }  

  return (
    <div className="page">
      <header>
        <h1>Buscador de péliculas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input onChange={handleChange} value={query} name="query" placeholder="Avengers, Star Wars, The Matrix" />
          <button type="submit">Buscar</button>
        </form>
      </header>
      <main>
        <Movies movies={mappedMovies} />
      </main>
    </div>
  );
}

export default App;
