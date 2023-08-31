import { useState, useRef, useMemo,useCallback } from "react";
import { searchMovies } from "../services/movies.service";

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previousSearch = useRef(search);

  //podriamos usar useCallBack, que nos simplifica la sintaxis,y usarlo solo para 
  //las funciones,y por detras corre UseMemo

   const getMovies = useCallback(
    async ({search}) => {
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
    },[]);


  // const getMovies = useMemo(() => {
  //   return async ({search}) => {
  //     if (search === previousSearch.current) return;
  //     try {
  //       setLoading(true);
  //       setError(null);
  //       previousSearch.current = search;
  //       const newMovies = await searchMovies({ search });
  //       setMovies(newMovies);
  //     } catch (e) {
  //       setError(e.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  // },[]);

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies;
  }, [sort, movies]);

  return { movies: sortedMovies, getMovies, loading };
}
