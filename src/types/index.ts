// Definición de tipos comunes para la aplicación

// Ejemplo de tipo para un usuario
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

// Ejemplo de tipo para un tema
export type Theme = 'light' | 'dark';

// Ejemplo de tipo para un estado de carga
export type LoadingState = 'idle' | 'loading' | 'succeeded' | 'failed';

// Ejemplo de tipo para una respuesta de API
export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}