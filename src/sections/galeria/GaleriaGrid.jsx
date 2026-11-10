
import { useState, useMemo } from 'react';
import { ArrowUpRight, CalendarDays, MapPin } from 'lucide-react';
import Reveal from '../../components/reveal/Reveal.jsx';
import EventoModal from './components/EventoModal.jsx';
import eventos from './data/eventos.js';
import './css/GaleriaGrid.css';

const filtros = [
  { label: 'Todos', value: 'todos' },
  { label: 'Música', value: 'Música' },
  { label: 'Detrás de cámaras', value: 'Detrás de cámaras' },
  { label: 'Experiencias', value: 'Experiencias' },
];

export default function GaleriaGrid() {
  const [filtroActivo, setFiltroActivo] = useState('todos');
  const [eventoActivo, setEventoActivo] = useState(null);

  const eventosFiltrados = useMemo(() => {
    const resultado = filtroActivo === 'todos'
      ? eventos
      : eventos.filter((evento) => evento.categoria === filtroActivo);

    return [...resultado].sort(
      (a, b) => new Date(b.fecha) - new Date(a.fecha)
    );
  }, [filtroActivo]);

  const formatearFecha = (fecha) => {
    return new Date(`${fecha}T12:00:00`).toLocaleDateString('es-PE', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <section className="gallery-collection" id="galeria-grid">
      <div className="gallery-collection-heading">
        <div>
          <Reveal direction="left">
            <span className="eyebrow">ARCHIVO VISUAL</span>
          </Reveal>

          <Reveal as="h2" direction="left" delay={100}>
            Momentos que
            <br />
            <span>forman parte de la historia.</span>
          </Reveal>
        </div>

        <Reveal direction="right" delay={150}>
          <p>
            Cada evento tiene una historia que contar.
            Explora nuestros encuentros, experiencias
            y momentos detrás de cámaras.
          </p>
        </Reveal>
      </div>

      <Reveal direction="up" delay={200}>
        <div className="gallery-filters" aria-label="Filtrar eventos">
          {filtros.map((filtro) => (
            <button
              key={filtro.value}
              type="button"
              className={`gallery-filter ${
                filtroActivo === filtro.value ? 'is-active' : ''
              }`}
              onClick={() => setFiltroActivo(filtro.value)}
              aria-pressed={filtroActivo === filtro.value}
            >
              {filtro.label}
            </button>
          ))}
        </div>
      </Reveal>

      {eventosFiltrados.length > 0 ? (
        <div className="gallery-events-grid" aria-live="polite">
          {eventosFiltrados.map((evento, index) => (
            <Reveal
              key={evento.id}
              direction="up"
              delay={(index % 2) * 100}
              className="gallery-event-reveal"
            >
              <button
                type="button"
                className="gallery-event-card"
                onClick={() => setEventoActivo(evento)}
                aria-label={`Ver fotografías de ${evento.titulo}`}
              >
                <div className="gallery-event-image">
                  <img
                    src={evento.portada}
                    alt={`Fotografía de ${evento.titulo}`}
                    loading="lazy"
                  />

                  <span className="gallery-event-category">
                    {evento.categoria}
                  </span>

                  <span className="gallery-event-open">
                    <ArrowUpRight size={23} />
                  </span>

                  <span className="gallery-event-photo-count">
                    {evento.fotografias.length} FOTOS
                  </span>
                </div>

                <div className="gallery-event-info">
                  <span className="gallery-event-date">
                    <CalendarDays size={14} />
                    {formatearFecha(evento.fecha)}
                  </span>

                  <h3>{evento.titulo}</h3>

                  <p>{evento.descripcion}</p>

                  <span className="gallery-event-location">
                    <MapPin size={14} />
                    {evento.ubicacion}
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      ) : (
        <p className="gallery-empty">
          No hay eventos disponibles en esta categoría.
        </p>
      )}

      <Reveal direction="up" delay={200}>
        <p className="gallery-collection-note">
          <span />
          PALAYENTI · MÚSICA, HISTORIAS Y EXPERIENCIAS
        </p>
      </Reveal>

      <EventoModal
        evento={eventoActivo}
        onCerrar={() => setEventoActivo(null)}
      />
    </section>
  );
}
