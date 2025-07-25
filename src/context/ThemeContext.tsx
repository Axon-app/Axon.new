import React, { createContext, useContext, ReactNode } from 'react';
import useTheme from '../hooks/useTheme';
import { Theme } from '../types';

// Definir la forma del contexto
type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

// Crear el contexto con un valor por defecto
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Props para el proveedor del contexto
type ThemeProviderProps = {
  children: ReactNode;
};

// Componente proveedor que envuelve la aplicación
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, toggleTheme] = useTheme();

  // Valor que se proporcionará a los consumidores del contexto
  const value = {
    theme,
    toggleTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

// Hook personalizado para usar el contexto
export const useThemeContext = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  
  if (context === undefined) {
    throw new Error('useThemeContext debe ser usado dentro de un ThemeProvider');
  }
  
  return context;
};