import { useCallback, useEffect, useState } from 'react';
import { obtenerContenidos } from '../../../services/contenidoService.js';

export default function useContenidos() {
  const [contenidos, setContenidos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [intento, setIntento] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    async function cargarContenidos() {
      setCargando(true);
      setError(null);

      try {
        const datos = await obtenerContenidos({
          signal: controller.signal,
        });

        setContenidos(datos);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message || 'No se pudieron cargar los contenidos.');
        }
      } finally {
        if (!controller.signal.aborted) {
          setCargando(false);
        }
      }
    }

    cargarContenidos();

    return () => {
      controller.abort();
    };
  }, [intento]);

  const recargar = useCallback(() => {
    setIntento((actual) => actual + 1);
  }, []);

  return {
    contenidos,
    cargando,
    error,
    recargar,
  };
}