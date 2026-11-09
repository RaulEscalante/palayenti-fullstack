
const YOUTUBE_WORKER_URL = import.meta.env.VITE_YOUTUBE_WORKER_URL;

export async function obtenerVideosYoutube({ signal } = {}) {
  if (!YOUTUBE_WORKER_URL) {
    throw new Error(
      'No se ha configurado la URL del servicio de YouTube.'
    );
  }

  const response = await fetch(YOUTUBE_WORKER_URL, { signal });

  if (!response.ok) {
    throw new Error(
      'No se pudieron obtener las entrevistas de YouTube.'
    );
  }

  const data = await response.json();

  if (!Array.isArray(data.videos)) {
    throw new Error(
      'La respuesta del servicio de YouTube no es válida.'
    );
  }

  return data.videos
    .filter((video) => video.id && video.titulo && video.youtube)
    .map((video) => ({
      ...video,
      categoria: 'ENTREVISTA',
      destacado: false,
    }))
    .sort(
      (a, b) =>
        new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
    );
}
