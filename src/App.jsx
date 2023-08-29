import { useState } from "react";
import "./App.css";
import { useMovies } from "./Hooks/useMovies";
import { Movies } from "./components/Movies";
import { useEffect } from "react";

function App() {
  const { movies: mappedMovies } = useMovies();
  
  const [query, setQuery] = useState('');
  const [error,setError] = useState(null);


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
    //con esto evitamos que empice con espacio vacio
    const newQuery = e.target.value;
    if (newQuery.startsWith(' '))return
    setQuery(e.target.value);
  }
  useEffect(() => {

    if(query === ''){
      setError('No se puede buscar una pelicula vacia')
      return
    }
    if(query.match(/^\d+$/)){
      setError('No se puede buscar con un numero')
      return
    }
    if (query.length < 3) {
      setError('La Busqueda debe tener al menos 3 caracteres')
      return
    }
    setError(null)
  
  }, [query])
  

  return (
    <div className="page">
      <header>
        <h1>Buscador de péliculas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input style={{
            border:'1px solid transparent',
            borderColor: error? 'red' : 'transparent'
            }}
            onChange={handleChange} value={query} name="query" placeholder="Avengers, Star Wars, The Matrix" />
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{ color: 'red'}}>{error}</p>}
      </header>
      <main>
        <Movies movies={mappedMovies} />
      </main>
    </div>
  );
}

export default App;
