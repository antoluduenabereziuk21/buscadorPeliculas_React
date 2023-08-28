/**MALA Practica
 * ListMovies Esta atado ala api y esta en la parte de
 * nuestra UI ,muy introducido en nuestra aplicacion
 *
 * Por lo cual mapearemos la respuesta , para no usar el
 * contrato de la api, y seran estos mapeos los que recibira
 * ListMovies
 */
function ListMovies({ movies }) {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.title} />
        </li>
      ))}
    </ul>
  );
}

function NoMoviesResults() {
  return <p>No se encontro resultados en la busqueda</p>;
}

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0;
  return hasMovies ? <ListMovies movies={movies} /> : <NoMoviesResults />;
}
