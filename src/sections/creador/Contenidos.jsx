
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { contenidos } from './js/contenidosData.js';
import './css/Contenidos.css';

const categorias = [
  'TODOS',
  'EXPERIENCIAS',
  'OPINIONES',
  'COLABORACIONES',
  'PUBLICACIONES',
];

export default function Contenidos() {
  const [categoriaActiva, setCategoriaActiva] = useState('TODOS');

  const contenidosFiltrados =
    categoriaActiva === 'TODOS'
      ? contenidos
      : contenidos.filter(
          (contenido) => contenido.categoria === categoriaActiva
        );

  const destacado =
    categoriaActiva === 'TODOS'
      ? contenidosFiltrados.find((contenido) => contenido.destacado)
      : null;

  const restoContenidos = destacado
    ? contenidosFiltrados.filter(
        (contenido) => contenido.id !== destacado.id
      )
    : contenidosFiltrados;

  function renderTarjeta(contenido, esDestacado = false) {
    return (
      <article
        className={`contenido-card ${
          esDestacado ? 'contenido-card-destacado' : ''
        }`}
        key={contenido.id}
      >
        <a
          className="contenido-imagen"
          href={contenido.enlace || undefined}
          onClick={(event) => {
            if (!contenido.enlace) event.preventDefault();
          }}
          aria-label={`Leer ${contenido.titulo}`}
        >
          {contenido.imagen ? (
            <img
              src={contenido.imagen}
              alt={contenido.titulo}
              loading="lazy"
            />
          ) : (
            <div className="contenido-placeholder">
              <span>PALAYENTI</span>
              <strong>{contenido.categoria}</strong>
            </div>
          )}

          <span className="contenido-imagen-icon">
            <ArrowUpRight size={21} />
          </span>
        </a>

        <div className="contenido-info">
          <div className="contenido-meta">
            <span>{contenido.categoria}</span>
            <span>{contenido.fecha}</span>
          </div>

          <h3>{contenido.titulo}</h3>
          <p>{contenido.descripcion}</p>

          {contenido.enlace ? (
            <a className="contenido-leer" href={contenido.enlace}>
              DESCUBRIR MÁS <ArrowUpRight size={16} />
            </a>
          ) : (
            <span className="contenido-proximamente">
              CONTENIDO POR PUBLICAR
            </span>
          )}
        </div>
      </article>
    );
  }

  return (
    <section className="contenidos-section" id="contenidos">
      <div className="section-heading">
        <div>
          <span className="eyebrow">IDEAS, HISTORIAS Y EXPERIENCIAS</span>
          <h2>
            EL UNIVERSO <span>CREADOR.</span>
          </h2>
        </div>

        <p>
          Un espacio para compartir lo que vivo, lo que pienso
          y las historias que encuentro en el camino.
        </p>
      </div>

      <div className="contenidos-filtros" aria-label="Filtrar contenidos">
        {categorias.map((categoria) => (
          <button
            key={categoria}
            type="button"
            className={
              categoriaActiva === categoria ? 'filtro-activo' : ''
            }
            onClick={() => setCategoriaActiva(categoria)}
            aria-pressed={categoriaActiva === categoria}
          >
            {categoria}
          </button>
        ))}
      </div>

      {destacado && renderTarjeta(destacado, true)}

      <div className="contenidos-grid">
        {restoContenidos.map((contenido) => renderTarjeta(contenido))}
      </div>
    </section>
  );
}
