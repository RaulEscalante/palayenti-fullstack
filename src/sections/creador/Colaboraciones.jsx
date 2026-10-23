
import { ArrowUpRight, Users } from 'lucide-react';
import { colaboraciones } from './js/colaboracionesData.js';
import './css/Colaboraciones.css';

export default function Colaboraciones() {
  return (
    <section className="colaboraciones-section" id="colaboraciones">
      <div className="section-heading">
        <div>
          <span className="eyebrow">CREAR TAMBIÉN ES COMPARTIR</span>
          <h2>
            LAS IDEAS CRECEN <span>EN COMPAÑÍA.</span>
          </h2>
        </div>

        <p>
          Artistas, creadores y nuevas perspectivas. Un espacio para
          mostrar lo que sucede cuando distintas ideas se encuentran.
        </p>
      </div>

      <div className="colaboraciones-intro">
        <div className="colaboraciones-intro-icon">
          <Users size={25} />
        </div>

        <div>
          <h3>Muchas voces. Nuevas posibilidades.</h3>
          <p>
            Cada colaboración es una oportunidad para aprender,
            experimentar y crear algo que no existiría de la misma manera
            por separado.
          </p>
        </div>
      </div>

      <div className="colaboraciones-grid">
        {colaboraciones.map((colaboracion, index) => (
          <article
            className="colaboracion-card"
            key={colaboracion.id}
          >
            <div className="colaboracion-imagen">
              {colaboracion.imagen ? (
                <img
                  src={colaboracion.imagen}
                  alt={`${colaboracion.nombre} - ${colaboracion.proyecto}`}
                  loading="lazy"
                />
              ) : (
                <div className="colaboracion-placeholder">
                  <span>PALAYENTI</span>
                  <strong>
                    {String(index + 1).padStart(2, '0')}
                  </strong>
                  <span>COLABORACIÓN</span>
                </div>
              )}

              <span className="colaboracion-disciplina">
                {colaboracion.disciplina}
              </span>
            </div>

            <div className="colaboracion-info">
              <span className="colaboracion-fecha">
                {colaboracion.fecha}
              </span>

              <h3>{colaboracion.proyecto}</h3>
              <p>{colaboracion.descripcion}</p>

              <div className="colaboracion-artista">
                <span>EN COLABORACIÓN CON</span>
                <strong>{colaboracion.nombre}</strong>
              </div>

              {colaboracion.enlace ? (
                <a
                  className="colaboracion-link"
                  href={colaboracion.enlace}
                  target="_blank"
                  rel="noreferrer"
                >
                  VER COLABORACIÓN
                  <ArrowUpRight size={17} />
                </a>
              ) : (
                <span className="colaboracion-proximamente">
                  PRÓXIMAMENTE
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
