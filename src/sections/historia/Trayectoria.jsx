
import { ArrowUpRight, Music2, Lightbulb, Mic2 } from 'lucide-react';
import Reveal from '../../components/reveal/Reveal.jsx';
import './css/Trayectoria.css';

const pilares = [
  {
    numero: '01',
    icono: Music2,
    titulo: 'La música',
    descripcion:
      'Una forma de transmitir emociones, compartir ideas y conectar con otras personas.',
  },
  {
    numero: '02',
    icono: Lightbulb,
    titulo: 'La creatividad',
    descripcion:
      'El espacio para explorar ideas, contar experiencias y encontrar nuevas formas de expresarse.',
  },
  {
    numero: '03',
    icono: Mic2,
    titulo: 'La conexión',
    descripcion:
      'Cada canción, historia y experiencia abre una oportunidad para conectar con quienes están al otro lado.',
  },
];

export default function Trayectoria() {
  return (
    <section className="trajectory-section" id="trayectoria">
      <div className="trajectory-heading">
        <div>
          <Reveal direction="left">
            <span className="eyebrow">EL CAMINO RECORRIDO</span>
          </Reveal>

          <Reveal as="h2" direction="left" delay={100}>
            Más que un nombre,
            <br />
            <span>una forma de expresarme.</span>
          </Reveal>
        </div>

        <Reveal direction="right" delay={150}>
          <p>
            PALAYENTI reúne distintas formas de expresión bajo una misma
            identidad. La música y la creación de contenido son parte de
            un camino que sigue creciendo y encontrando nuevas maneras de
            compartir.
          </p>
        </Reveal>
      </div>

      <div className="trajectory-grid">
        {pilares.map((pilar, index) => {
          const Icono = pilar.icono;

          return (
            <Reveal
              key={pilar.numero}
              direction="up"
              delay={index * 120}
              className="trajectory-card-reveal"
            >
              <article className="trajectory-card">
                <div className="trajectory-card-top">
                  <span>{pilar.numero}</span>
                  <Icono size={23} strokeWidth={1.5} />
                </div>

                <h3>{pilar.titulo}</h3>
                <p>{pilar.descripcion}</p>

                <span className="trajectory-card-line" />
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal direction="up" delay={200}>
        <a className="trajectory-link" href="#momentos">
          DESCUBRE OTROS MOMENTOS
          <ArrowUpRight size={16} />
        </a>
      </Reveal>
    </section>
  );
}
