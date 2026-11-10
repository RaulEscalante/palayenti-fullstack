
import { ArrowDownRight, Camera, Music2, Sparkles } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import Reveal from '../../components/reveal/Reveal.jsx';
import eventos from '../galeria/data/eventos.js';
import { Link } from 'react-router-dom';
import './css/Galeria.css';

const iconosPorCategoria = {
  'Música': Music2,
  'Detrás de cámaras': Camera,
  'Experiencias': Sparkles,
};

export default function Galeria() {
  const eventosDestacados = [...eventos]
    .sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
    .slice(0, 3);

  return (
    <section className="section gallery-section" id="galeria">

      <SectionHeading
        eyebrow="MOMENTOS QUE QUEDAN"
        title="DENTRO Y FUERA"
        highlight="DEL ESCENARIO."
        description="Un vistazo a los eventos, las colaboraciones y las experiencias que forman parte del universo PALAYENTI."
      />

      <div className="gallery-grid">
        {eventosDestacados.map((evento, index) => {
          const Icono = iconosPorCategoria[evento.categoria] || Camera;

          const variantes = [
            'gallery-tile-large',
            'gallery-tile-blue',
            'gallery-tile-light',
          ];

          return (
            <Reveal
              key={evento.id}
              className={`gallery-tile ${variantes[index]}`}
              direction="up"
              delay={index * 120}
            >
              <img
                src={evento.portada}
                alt={`Portada de ${evento.titulo}`}
                className="gallery-image"
                loading="lazy"
              />

              <Icono size={40} strokeWidth={1} />

              <span>
                {String(index + 1).padStart(2, '0')}
                {' / '}
                {evento.categoria?.toUpperCase() || evento.titulo.toUpperCase()}
              </span>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="gallery-footer" delay={150}>
        <span>EVENTOS DESTACADOS · PALAYENTI</span>
        <Link to="/galeria" aria-label="Ver toda la galería">
          VER TODA LA GALERÍA
          <ArrowDownRight size={20} />
        </Link>
      </Reveal>

    </section>
  );
}
