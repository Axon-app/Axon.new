import { ApiResponse } from '../types';

// URL base para las peticiones API
const API_BASE_URL = 'https://api.example.com';

// Función genérica para hacer peticiones
async function fetchApi<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  try {
    const url = `${API_BASE_URL}${endpoint}`;
    
    // Configuración por defecto
    const defaultOptions: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        // Aquí podrías añadir headers de autenticación
      },
    };
    
    // Combina las opciones por defecto con las proporcionadas
    const requestOptions = { ...defaultOptions, ...options };
    
    // Realiza la petición
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    
    return {
      data,
      status: response.status,
      message: response.statusText,
    };
  } catch (error) {
    // Manejo de errores
    console.error('API request failed:', error);
    return {
      data: null as unknown as T,
      status: 500,
      message: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

// Métodos específicos para diferentes endpoints
export const api = {
  // Ejemplo de método GET
  get: <T>(endpoint: string, options?: RequestInit) => 
    fetchApi<T>(endpoint, { method: 'GET', ...options }),
  
  // Ejemplo de método POST
  post: <T>(endpoint: string, data: any, options?: RequestInit) =>
    fetchApi<T>(endpoint, { 
      method: 'POST', 
      body: JSON.stringify(data),
      ...options 
    }),
  
  // Ejemplo de método PUT
  put: <T>(endpoint: string, data: any, options?: RequestInit) =>
    fetchApi<T>(endpoint, { 
      method: 'PUT', 
      body: JSON.stringify(data),
      ...options 
    }),
  
  // Ejemplo de método DELETE
  delete: <T>(endpoint: string, options?: RequestInit) =>
    fetchApi<T>(endpoint, { method: 'DELETE', ...options }),
};

export default api;