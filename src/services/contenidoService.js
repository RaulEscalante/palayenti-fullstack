
import { obtenerVideosYoutube } from './youtubeService.js';

/**
 * Obtiene los contenidos disponibles de PALAYENTI.
 *
 * Actualmente la fuente es YouTube.
 * En el futuro podremos incorporar otras fuentes
 * sin modificar los componentes visuales.
 * Determina si un video corresponde a una entrevista.
 */

function esEntrevista(video) {
  const contenido =
    `${video.titulo} ${video.descripcion || ''}`.toLowerCase();

  return (
    contenido.includes('entrevista') ||
    contenido.includes('entrevistamos') ||
    contenido.includes('conversamos')
  );
}

/**
 * Obtiene y clasifica los contenidos disponibles de PALAYENTI.
 */
export async function obtenerContenidos({ signal } = {}) {
  const videos = await obtenerVideosYoutube({ signal });

  const contenidos = videos.map((video) => {
    const entrevista = esEntrevista(video);

    return {
      id: `youtube-${video.id}`,
      titulo: video.titulo,
      descripcion: video.descripcion || '',
      categoria: entrevista ? 'ENTREVISTAS' : 'MUSICA',
      tipo: 'YOUTUBE',
      fecha: video.fecha,
      miniatura: video.miniatura || '',
      enlace: video.youtube,
      youtubeId: video.id,
      fuente: 'YOUTUBE',
    };
  });

  return contenidos.sort(
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
