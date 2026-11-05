import Reveal from '../../components/reveal/Reveal.jsx';
import './css/CreadorHero.css';

export default function CreadorHero() {
  return (
    <section className="creador-hero">
      <div className="creador-hero-content">
        <Reveal direction="left">
          <span className="eyebrow">
            PALAYENTI · UNIVERSO CREADOR
          </span>
        </Reveal>

        <Reveal direction="left" delay={100}>
          <h1>
            IDEAS QUE
            <br />
            SE VIVEN.
            <br />
            <span>HISTORIAS QUE CONECTAN.</span>
          </h1>
        </Reveal>

        <Reveal direction="left" delay={200}>
          <p>
            Experiencias, opiniones, videos y colaboraciones.
            Un espacio para compartir lo que soy, lo que pienso
            y las personas con las que me encuentro en el camino.
          </p>
        </Reveal>

        <Reveal direction="up" delay={300}>
          <div className="creador-hero-actions">
            <a href="#biblioteca" className="button button-primary">
              EXPLORAR CONTENIDOS
            </a>

            <a href="#contacto" className="creador-hero-link">
              DESCUBRIR COLABORACIONES
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal direction="right" delay={150}>
        <div className="creador-hero-visual">
          <div className="creador-hero-image">
            <img
              src="/images/creador/creador-hero.jpg"
              alt="PALAYENTI, experiencias y proyectos creativos"
            />
          </div>

          <div className="creador-hero-label">
            <span>UNA VOZ PROPIA.</span>
            <span>MÚLTIPLES FORMAS DE CREAR.</span>
          </div>

          <span className="creador-hero-number">01 / CREADOR</span>
        </div>
      </Reveal>
    </section>
  );
}