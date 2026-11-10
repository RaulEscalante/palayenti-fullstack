
import { useEffect, useState, useCallback } from 'react';
import { X, MapPin, CalendarDays } from 'lucide-react';
import Reveal from '../../../components/reveal/Reveal.jsx';
import EventoLightbox from './EventoLightbox.jsx';
import '../css/EventoModal.css';

export default function EventoModal({ evento, onCerrar }) {
  const [indiceActivo, setIndiceActivo] = useState(null);

  useEffect(() => {
    if (!evento) return;

    const manejarTecla = (e) => {
      if (e.key === 'Escape') {
        if (indiceActivo !== null) {
          setIndiceActivo(null);
        } else {
          onCerrar();
        }
      }
    };

    document.addEventListener('keydown', manejarTecla);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', manejarTecla);
      document.body.style.overflow = '';
    };
  }, [evento, onCerrar, indiceActivo]);

  const cambiarFoto = useCallback((direccion) => {
    if (!evento?.fotografias?.length) return;

    setIndiceActivo((actual) => {
      if (actual === null) return null;

      const total = evento.fotografias.length;
      return (actual + direccion + total) % total;
    });
  }, [evento]);

  if (!evento) return null;

  const fecha = new Date(`${evento.fecha}T12:00:00`)
    .toLocaleDateString('es-PE', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

  return (
    <div className="evento-modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onCerrar();
        }
      }}
    >
      <div
        className="evento-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="evento-modal-titulo"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="evento-modal-header">
          <div className="evento-modal-heading">
            <span className="eyebrow">ARCHIVO PALAYENTI</span>

            <h2 id="evento-modal-titulo">{evento.titulo}</h2>

            <div className="evento-modal-details">
              <span>
                <CalendarDays size={15} />
                {fecha}
              </span>

              <span>
                <MapPin size={15} />
                {evento.ubicacion}
              </span>
            </div>
          </div>

          <button
            type="button"
            className="evento-modal-close"
            onClick={onCerrar}
            aria-label="Cerrar galería"
          >
            <X size={22} />
          </button>
        </header>

        <div className="evento-modal-description">
          <p>{evento.descripcion}</p>
          <span>{evento.fotografias.length} FOTOGRAFÍAS</span>
        </div>

        <div className="evento-modal-grid">
          {evento.fotografias.map((foto, index) => (
            <Reveal
              key={`${evento.id}-${index}`}
              direction="up"
              delay={(index % 4) * 60}
              className="evento-modal-photo-reveal"
            >
              <button
                type="button"
                className="evento-modal-photo"
                onClick={() => setIndiceActivo(index)}
                aria-label={`Ampliar fotografía ${index + 1}`}
              >
                <img
                  src={foto}
                  alt={`${evento.titulo} - Fotografía ${index + 1}`}
                  loading="lazy"
                />

                <span className="evento-modal-photo-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        <footer className="evento-modal-footer">
          <span>PALAYENTI · MÚSICA, HISTORIAS Y EXPERIENCIAS</span>
          <span>FIN DEL ÁLBUM</span>
        </footer>
      </div>

      <EventoLightbox
        fotografias={evento.fotografias}
        indiceActivo={indiceActivo}
        onCerrar={() => setIndiceActivo(null)}
        onCambiar={cambiarFoto}
      />
    </div>
  );
}
