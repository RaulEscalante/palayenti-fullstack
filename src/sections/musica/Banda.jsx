
import { banda, integrantes } from './js/bandaData.js';
import './css/Banda.css';

export default function Banda() {
  return (
    <section className="banda-section" id="banda">
      <div className="banda-intro">
        <div className="banda-intro-content">
          <span className="eyebrow">DETRÁS DE CADA CANCIÓN</span>

          <h2>
            SOMOS <span>PALAYENTI.</span>
          </h2>

          <h3>{banda.subtitulo}</h3>

          <p>{banda.descripcion}</p>
        </div>

        <div className="banda-intro-image">
          {banda.imagen ? (
            <img src={banda.imagen} alt={banda.nombre} />
          ) : (
            <div className="banda-image-placeholder">
              <span>PALAYENTI</span>
              <strong>LA BANDA</strong>
            </div>
          )}
        </div>
      </div>

      <div className="banda-integrantes">
        <div className="section-heading">
          <div>
            <span className="eyebrow">LAS PERSONAS DETRÁS DEL SONIDO</span>
            <h2>
              NUESTROS <span>INTEGRANTES.</span>
            </h2>
          </div>
          <p>
            Cada persona aporta su esencia para construir
            el sonido y la identidad de PALAYENTI.
          </p>
        </div>

        <div className="integrantes-grid">
          {integrantes.map((integrante) => (
            <article className="integrante-card" key={integrante.id}>
              <div className="integrante-foto">
                {integrante.foto ? (
                  <img
                    src={integrante.foto}
                    alt={integrante.nombre}
                    loading="lazy"
                  />
                ) : (
                  <div className="integrante-placeholder">
                    <span>PALAYENTI</span>
                  </div>
                )}
              </div>

              <div className="integrante-info">
                <span className="integrante-rol">
                  {integrante.rol}
                </span>
                <h3>{integrante.nombre}</h3>
                <p>{integrante.descripcion}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
