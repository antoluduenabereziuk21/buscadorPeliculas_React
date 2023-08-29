import "./App.css";
import { useMovies } from "./Hooks/useMovies";
import { Movies } from "./components/Movies";

function App() {
  const { movies: mappedMovies } = useMovies();
/**
 * 
 * Este tipo de recuperacionde informacion de los inputs
 *  se conoce como no controlada , es la forma mas sencilla
 * y mas optima
 */
  const handleSubmit = (e) => {

    e.preventDefault();
    const fields = new window.FormData(e.target);
    const query = fields.get("query");
    console.log(query);
    
  };

  /*
  otra alternativa es aglomerar los fields en un objeto
  const handleSubmit = (e)=>{
    e.preventDefault();
    const fields = Object.fromEntries(new window.FormData(e.target));
    console.log(fields);
  };
*/
  return (
    <div className="page">
      <header>
        <h1>Buscador de péliculas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input name="query" placeholder="Avengers, Star Wars, The Matrix" />
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
