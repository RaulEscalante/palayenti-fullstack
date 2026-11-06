
import { ArrowUpRight, Camera, Clapperboard, Music2 } from 'lucide-react';
import Reveal from '../../components/reveal/Reveal.jsx';
import './css/Momentos.css';

const momentos = [
  {
    numero: '01',
    categoria: 'EL UNIVERSO MUSICAL',
    titulo: 'La música cobra vida',
    descripcion:
      'Canciones, escenarios y momentos que permiten conectar a través de la música.',
    clase: 'moment-card-music',
    Icono: Music2,
  },
  {
    numero: '02',
    categoria: 'DETRÁS DE CÁMARAS',
    titulo: 'Ideas que se convierten en historias',
    descripcion:
      'El proceso creativo, las grabaciones y todo lo que ocurre antes de compartir una idea.',
    clase: 'moment-card-creation',
    Icono: Clapperboard,
  },
  {
    numero: '03',
    categoria: 'EXPERIENCIAS COMPARTIDAS',
    titulo: 'Personas, lugares y aprendizajes',
    descripcion:
      'Cada experiencia deja algo nuevo y abre la puerta a otras formas de ver el mundo.',
    clase: 'moment-card-experiences',
    Icono: Camera,
  },
];

export default function Momentos() {
  return (
    <section className="moments-section" id="momentos">
      <div className="moments-heading">
        <div>
          <Reveal direction="left">
            <span className="eyebrow">FRAGMENTOS DEL CAMINO</span>
          </Reveal>

          <Reveal as="h2" direction="left" delay={100}>
            Momentos que
            <br />
            <span>forman parte de mí.</span>
          </Reveal>
        </div>

        <Reveal direction="right" delay={150}>
          <p>
            Detrás de cada canción y cada contenido hay ideas,
            experiencias y personas que hacen que el camino tenga
            sentido. Aquí habrá espacio para compartir esos momentos.
          </p>
        </Reveal>
      </div>

      <div className="moments-grid">
        {momentos.map(({ numero, categoria, titulo, descripcion, clase, Icono }, index) => (
          <Reveal
            key={numero}
            direction="up"
            delay={index * 120}
            className="moment-card-reveal"
          >
            <article className={`moment-card ${clase}`}>
              <div className="moment-artwork">
                <span className="moment-number">{numero}</span>

                <div className="moment-artwork-shape">
                  <Icono size={38} strokeWidth={1.2} />
                </div>

                <span className="moment-artwork-label">PALAYENTI</span>
              </div>

              <div className="moment-card-content">
                <span className="moment-category">{categoria}</span>
                <h3>{titulo}</h3>
                <p>{descripcion}</p>
                <span className="moment-card-bottom">
                  <span>UN MOMENTO DEL CAMINO</span>
                  <ArrowUpRight size={16} />
                </span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal direction="up" delay={200}>
        <div className="moments-note">
          <span className="moments-note-dot" />
          <p>ESTE ESPACIO CRECERÁ CON NUEVAS HISTORIAS Y EXPERIENCIAS.</p>
        </div>
      </Reveal>
    </section>
  );
}
