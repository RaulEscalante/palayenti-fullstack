
import { obtenerEntrevistas } from './youtubeService.js';

/**
 * Obtiene los contenidos disponibles de PALAYENTI.
 *
 * Actualmente la fuente es YouTube.
 * En el futuro podremos incorporar otras fuentes
 * sin modificar los componentes visuales.
 */
export async function obtenerContenidos({ signal } = {}) {
  const entrevistas = await obtenerEntrevistas({ signal });

  const contenidosYoutube = entrevistas.map((video) => ({
    id: `youtube-${video.id}`,
    titulo: video.titulo,
    descripcion: video.descripcion || '',
    categoria: 'ENTREVISTAS',
    tipo: 'YOUTUBE',
    fecha: video.fecha,
    miniatura: video.miniatura || '',
    enlace: video.youtube,
    youtubeId: video.id,
    fuente: 'YOUTUBE',
  }));

  return contenidosYoutube.sort(
    (a, b) =>
      new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
  );
}

/**
 * Obtiene el contenido más reciente de cada categoría.
 */
export function obtenerUltimosPorCategoria(contenidos) {
  const ultimos = new Map();

  for (const contenido of contenidos) {
    const existente = ultimos.get(contenido.categoria);

    if (
      !existente ||
      new Date(contenido.fecha).getTime() >
        new Date(existente.fecha).getTime()
    ) {
      ultimos.set(contenido.categoria, contenido);
    }
  }

  return Array.from(ultimos.values()).sort(
    (a, b) =>
      new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
  );
}
