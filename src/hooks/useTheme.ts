import { useState, useEffect } from 'react';
import { Theme } from '../types';

const useTheme = (): [Theme, () => void] => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Intenta obtener el tema del localStorage
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    
    // Si existe un tema guardado, úsalo
    if (savedTheme) return savedTheme;
    
    // Si no hay tema guardado, detecta la preferencia del sistema
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    // Guarda el tema en localStorage cuando cambie
    localStorage.setItem('theme', theme);
    
    // Aplica la clase al elemento html para activar los estilos dark/light
    const root = window.document.documentElement;
    root.classList.remove('dark', 'light');
    root.classList.add(theme);
  }, [theme]);

  // Función para alternar entre temas
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return [theme, toggleTheme];
};

export default useTheme;