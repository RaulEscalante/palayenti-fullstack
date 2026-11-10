
import { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import '../css/EventoLightbox.css';

export default function EventoLightbox({
  fotografias,
  indiceActivo,
  onCerrar,
  onCambiar,
}) {
  useEffect(() => {
    if (indiceActivo === null) return;

    const manejarTecla = (e) => {
      if (e.key === 'Escape') onCerrar();
      if (e.key === 'ArrowRight') onCambiar(1);
      if (e.key === 'ArrowLeft') onCambiar(-1);
    };

    document.addEventListener('keydown', manejarTecla);

    return () => {
      document.removeEventListener('keydown', manejarTecla);
    };
  }, [indiceActivo, onCerrar, onCambiar]);

  if (indiceActivo === null || !fotografias?.length) {
    return null;
  }

  const anterior = () => {
    onCambiar(-1);
  };

  const siguiente = () => {
    onCambiar(1);
  };

  return (
    <div
      className="evento-lightbox"
      onClick={(e) => {
        e.stopPropagation();
        onCerrar();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Visor de fotografías"
    >
      <button
        type="button"
        className="evento-lightbox-close"
        onClick={onCerrar}
        aria-label="Cerrar fotografía"
      >
        <X size={26} />
      </button>

      <span className="evento-lightbox-counter">
        {String(indiceActivo + 1).padStart(2, '0')}
        {' / '}
        {String(fotografias.length).padStart(2, '0')}
      </span>

      {fotografias.length > 1 && (
        <>
          <button
            type="button"
            className="evento-lightbox-arrow evento-lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              anterior();
            }}
            aria-label="Fotografía anterior"
          >
            <ChevronLeft size={30} />
          </button>

          <button
            type="button"
            className="evento-lightbox-arrow evento-lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              siguiente();
            }}
            aria-label="Fotografía siguiente"
          >
            <ChevronRight size={30} />
          </button>
        </>
      )}

      <img
        src={fotografias[indiceActivo]}
        alt={`Fotografía ${indiceActivo + 1}`}
        className="evento-lightbox-image"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}
