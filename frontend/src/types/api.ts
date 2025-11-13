//Clase para errores de la API
export interface ApiError {
  message: string;
  status: number;
}

//Clase para manejo de respuestas de la API
export type ApiResponse<T> = {
  data?: T;
  error?: ApiError;
};
