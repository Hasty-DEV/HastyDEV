import { useState, useEffect } from "react";

function usePersisteState(key: string, initialState: any) {
  const storedState = localStorage.getItem(key);
  const initial = storedState ? JSON.parse(storedState) : initialState;

  const [state, setState] = useState(initial);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state, setState]);

  return [state, setState];
}
export default usePersisteState;
