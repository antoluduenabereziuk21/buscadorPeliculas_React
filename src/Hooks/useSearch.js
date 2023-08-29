import { useState,useEffect } from "react";


export function useSearch() {
  
    const [search, updateSearch] = useState('');
    const [error, setError] = useState(null);
  
    useEffect(() => {
      if (search === "") {
        setError("No se puede buscar una pelicula vacia");
        return;
      }
      if (search.match(/^\d+$/)) {
        setError("No se puede buscar con un numero");
        return;
      }
      if (search.length < 3) {
        setError("La Busqueda debe tener al menos 3 caracteres");
        return;
      }
      setError(null);
    }, [search]);
  
    return {search, updateSearch ,error}
  }