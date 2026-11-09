
import { useCallback, useEffect, useState } from 'react';
import { obtenerContenidos } from '../services/contenidoService.js';

export default function useContenidos() {
  const [contenidos, setContenidos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [intento, setIntento] = useState(0);

  useEffect(() => {
    let activo = true;

    async function cargarContenidos() {
      setCargando(true);
      setError(null);

      try {
        const datos = await obtenerContenidos();

        if (activo) {
          setContenidos(datos);
        }
      } catch (err) {
        if (activo) {
          setError(
            err.message || 'No se pudieron cargar los contenidos.'
          );
        }
      } finally {
        if (activo) {
          setCargando(false);
        }
      }
    }

    cargarContenidos();

    return () => {
      activo = false;
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
