import { useState, useEffect, useRef } from "react";

export function useSearch() {

  const [search, updateSearch] = useState("");

  const [error, setError] = useState(null);

  const isFirstInput = useRef(true);

  

  useEffect(() => {
    /*Con el uso del useRef del input controlamos si es el primer uso 
    para que no se renderize de entrada el error
    */
  
   if (isFirstInput.current) {
      
      isFirstInput.current = search === "";
      return;
    }
    
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

  return { search, updateSearch, error };
}
