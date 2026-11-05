
import { X } from 'lucide-react';

export default function ReproductorYoutube({
  videoId,
  titulo,
  onCerrar,
}) {
  if (!videoId) return null;

  return (
    <div className="reproductor-youtube">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
        title={titulo || 'Video de PALAYENTI'}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />

      {onCerrar && (
        <button
          type="button"
          className="reproductor-youtube-cerrar"
          onClick={onCerrar}
          aria-label="Cerrar reproductor"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
}
