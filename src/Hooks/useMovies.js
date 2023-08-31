import { useState, useRef, useMemo } from "react";
import { searchMovies } from "../services/movies.service";
/**
 * 
 *UseMemo se encaraga de memorizar un valor , para
 no tener que volver a calcular
 */

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previousSearch = useRef(search);
//usamos useMemo para que se guarde en memoria el getMovies,
//y cuando alla cambios en el search se renderize el componente
//pasandole por parametro el search, en vez de por depencias
//solucionamos el tema que se rendereize cada vez que cambia 
//el search
  const getMovies = useMemo(() => {
    return async ({search}) => {
      if (search === previousSearch.current) return;
      try {
        setLoading(true);
        setError(null);
        previousSearch.current = search;
        const newMovies = await searchMovies({ search });
        setMovies(newMovies);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
  },[]);
  /*const getSortedMovies = () => {
    console.log('getSortedMovies')
    const sortedMovies = sort
    //hacemos una copia del objeto y comparamos a y b
    //mediante el titulo , con localCompare los ordenaremos 
    //alfabeticamente
    ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
    :movies
    return sortedMovies;
  }*/
  /**
   * Este Calculo es algo que queremos memorizar
   * cosa que solamente se realize cuando cambie cierta info
   * en este caso el sort , o las movies
   */
  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies;
  }, [sort, movies]);

  return { movies: sortedMovies, getMovies, loading };
}
