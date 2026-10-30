
import { useState } from 'react';
import {
  Music2,
  Clapperboard,
  Camera,
  Mic2,
  Headphones,
  Sparkles,
} from 'lucide-react';

import './css/GaleriaGrid.css';

const filtros = [
  { label: 'Todo', value: 'todos' },
  { label: 'Música', value: 'musica' },
  { label: 'Detrás de cámaras', value: 'detras' },
  { label: 'Experiencias', value: 'experiencias' },
];

const elementos = [
  {
    id: 1,
    categoria: 'musica',
    categoriaTexto: 'MÚSICA',
    titulo: 'Sobre el escenario',
    descripcion: 'La energía de compartir música en vivo.',
    icono: Music2,
    estilo: 'gallery-item-stage',
    numero: '01',
  },
  {
    id: 2,
    categoria: 'detras',
    categoriaTexto: 'DETRÁS DE CÁMARAS',
    titulo: 'El proceso creativo',
    descripcion: 'Ideas que toman forma antes de ver la luz.',
    icono: Clapperboard,
    estilo: 'gallery-item-studio',
    numero: '02',
  },
  {
    id: 3,
    categoria: 'experiencias',
    categoriaTexto: 'EXPERIENCIAS',
    titulo: 'Momentos que inspiran',
    descripcion: 'Experiencias que dejan huella en el camino.',
    icono: Camera,
    estilo: 'gallery-item-life',
    numero: '03',
  },
  {
    id: 4,
    categoria: 'musica',
    categoriaTexto: 'MÚSICA',
    titulo: 'Entre canciones',
    descripcion: 'La música desde otra perspectiva.',
    icono: Mic2,
    estilo: 'gallery-item-songs',
    numero: '04',
  },
  {
    id: 5,
    categoria: 'detras',
    categoriaTexto: 'DETRÁS DE CÁMARAS',
    titulo: 'Detrás de cada toma',
    descripcion: 'El trabajo y los detalles detrás del contenido.',
    icono: Headphones,
    estilo: 'gallery-item-making',
    numero: '05',
  },
  {
    id: 6,
    categoria: 'experiencias',
    categoriaTexto: 'EXPERIENCIAS',
    titulo: 'Nuevas perspectivas',
    descripcion: 'Historias, lugares y aprendizajes por descubrir.',
    icono: Sparkles,
    estilo: 'gallery-item-perspectives',
    numero: '06',
  },
];

export default function GaleriaGrid() {
  const [filtroActivo, setFiltroActivo] = useState('todos');

  const elementosFiltrados =
    filtroActivo === 'todos'
      ? elementos
      : elementos.filter((elemento) => elemento.categoria === filtroActivo);

  return (
    <section className="gallery-collection" id="galeria-grid">
      <div className="gallery-collection-heading">
        <div>
          <span className="eyebrow">ARCHIVO VISUAL</span>
          <h2>
            Cada imagen,
            <br />
            <span>una historia.</span>
          </h2>
        </div>

        <p>
          Explora diferentes facetas del universo PALAYENTI.
          Cada categoría representa una parte del camino.
        </p>
      </div>

      <div className="gallery-filters" aria-label="Filtrar galería">
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

      <div className="gallery-collection-grid" aria-live="polite">
        {elementosFiltrados.map((elemento) => {
          const Icono = elemento.icono;

          return (
            <article
              className="gallery-collection-card"
              key={elemento.id}
            >
              <div className={`gallery-collection-art ${elemento.estilo}`}>
                <span className="gallery-collection-number">
                  {elemento.numero}
                </span>

                <div className="gallery-collection-symbol">
                  <Icono size={35} strokeWidth={1.3} />
                </div>

                <span className="gallery-collection-brand">
                  PALAYENTI
                </span>
              </div>

              <div className="gallery-collection-info">
                <span className="gallery-collection-category">
                  {elemento.categoriaTexto}
                </span>

                <h3>{elemento.titulo}</h3>
                <p>{elemento.descripcion}</p>
              </div>
            </article>
          );
        })}
      </div>

      <p className="gallery-collection-note">
        <span />
        GALERÍA EN CONSTRUCCIÓN · NUEVOS MOMENTOS PRÓXIMAMENTE
      </p>
    </section>
  );
}
