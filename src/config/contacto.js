
const WHATSAPP_NUMERO = '+51 980563502'; // Código de país + número, sin + ni espacios

export function obtenerEnlaceWhatsApp(mensaje = '') {
  const numero = WHATSAPP_NUMERO.trim();

  if (!numero) return '';

  const texto = encodeURIComponent(mensaje);

  return `https://wa.me/${numero}${texto ? `?text=${texto}` : ''}`;
}
