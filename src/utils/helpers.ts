/**
 * Colección de funciones de utilidad para la aplicación
 */

/**
 * Formatea una fecha en formato legible
 * @param date - Fecha a formatear
 * @param locale - Configuración regional (por defecto: es-ES)
 * @returns Fecha formateada como string
 */
export const formatDate = (date: Date | string, locale = 'es-ES'): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

/**
 * Trunca un texto a una longitud máxima
 * @param text - Texto a truncar
 * @param maxLength - Longitud máxima (por defecto: 100)
 * @returns Texto truncado con elipsis si es necesario
 */
export const truncateText = (text: string, maxLength = 100): string => {
  if (text.length <= maxLength) return text;
  return `${text.substring(0, maxLength)}...`;
};

/**
 * Genera un ID único
 * @returns String con ID único
 */
export const generateId = (): string => {
  return Math.random().toString(36).substring(2, 9);
};

/**
 * Formatea un número como moneda
 * @param amount - Cantidad a formatear
 * @param currency - Moneda (por defecto: EUR)
 * @param locale - Configuración regional (por defecto: es-ES)
 * @returns String formateado como moneda
 */
export const formatCurrency = (
  amount: number,
  currency = 'EUR',
  locale = 'es-ES'
): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount);
};

/**
 * Capitaliza la primera letra de un texto
 * @param text - Texto a capitalizar
 * @returns Texto con la primera letra en mayúscula
 */
export const capitalize = (text: string): string => {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1);
};