import "./App.css";
import { useMovies } from "./Hooks/useMovies";
import { Movies } from "./components/Movies";
import { useRef } from "react";
/**
 * use ref te permite guardar una referencia mutable
 * que perciste durante todo el ciclo de vida del 
 * componente.Es muy util para guardar cualkeir valor que 
 * puedas guardar , y cada vez que cambia no renderiza
 * nuevamente el componente
 */

function App() {
  const { movies: mappedMovies } = useMovies();
  //lo utilizaremos para guardar una referencia del DOM
  //en este caso lo usaremos en el input del form
  const inputRef = useRef();
  //cuando se haga click se llamara al handle 
  //y sacaremos el valor de la referencia
  const handleSubmit = (e)=>{
    e.preventDefault();
    const value = inputRef.current.value;
    console.log(value);
  };
  //pero utilizaremos el onSubmit en el form que tiene
  //mayores ventajas


  return (
    <div className="page">
      <header>
        <h1>Buscador de péliculas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input ref={inputRef} placeholder="Avengers, Star Wars, The Matrix" />
          <button  type="submit">Buscar</button>
        </form>
      </header>
      <main>
        <Movies movies={mappedMovies} />
      </main>
    </div>
  );
}

export default App;
