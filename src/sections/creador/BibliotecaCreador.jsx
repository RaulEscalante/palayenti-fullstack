
import { useMemo, useState } from 'react';
import { ArrowUpRight, Play } from 'lucide-react';
import ReproductorYoutube from '../../components/youtube/ReproductorYoutube.jsx';
import Reveal from '../../components/reveal/Reveal.jsx';
import './css/BibliotecaCreador.css';

const CANTIDAD_INICIAL = 6;

export default function BibliotecaCreador({
  contenidos = [],
  cargando = false,
}) {
  const [categoriaActiva, setCategoriaActiva] = useState('TODOS');
  const [mostrarTodos, setMostrarTodos] = useState(false);
  const [videoActivo, setVideoActivo] = useState(null);

  // Solo entrevistas para la biblioteca de Creador
  const entrevistas = useMemo(
    () => contenidos.filter(
      (contenido) => contenido.categoria === 'ENTREVISTAS'
    ),
    [contenidos]
  );

  const categorias = useMemo(() => {
    const disponibles = [
      ...new Set(entrevistas.map((contenido) => contenido.categoria)),
    ];


    return ['TODOS', ...disponibles];
  }, [entrevistas]);

  const contenidosFiltrados = useMemo(() => {
    if (categoriaActiva === 'TODOS') {
      return entrevistas;
    }

    return entrevistas.filter(
      (contenido) => contenido.categoria === categoriaActiva
    );
  }, [entrevistas, categoriaActiva]);

  const contenidosVisibles = mostrarTodos
    ? contenidosFiltrados
    : contenidosFiltrados.slice(0, CANTIDAD_INICIAL);

  function cambiarCategoria(categoria) {
    setCategoriaActiva(categoria);
    setMostrarTodos(false);
    setVideoActivo(null);
  }

  return (
    <section className="biblioteca-creador-section" id="biblioteca">
      <div className="section-heading">
        <div>
          <Reveal as="span" direction="left">
            <span className="eyebrow">EXPLORA EL CONTENIDO</span>
          </Reveal>

          <Reveal as="h2" direction="left" delay={100}>
            BIBLIOTECA <span>CREADOR.</span>
          </Reveal>
        </div>

        <Reveal as="p" direction="right" delay={150}>
          Un espacio donde encontrarás entrevistas, historias,
          experiencias y nuevas formas de expresión.
        </Reveal>
      </div>
      <Reveal direction="up" delay={200}>
        <div className="biblioteca-filtros" aria-label="Filtrar contenidos">
          {categorias.map((categoria) => (
            <button
              key={categoria}
              type="button"
              className={
                categoriaActiva === categoria ? 'filtro-activo' : ''
              }
              onClick={() => cambiarCategoria(categoria)}
              aria-pressed={categoriaActiva === categoria}
            >
              {categoria}
            </button>
          ))}
        </div>
      </Reveal>
      {cargando ? (
        <div className="biblioteca-estado">
          <p>CARGANDO BIBLIOTECA...</p>
        </div>
      ) : contenidosFiltrados.length === 0 ? (
        <div className="biblioteca-estado">
          <p>NO HAY CONTENIDOS DISPONIBLES EN ESTA CATEGORÍA.</p>
        </div>
      ) : (
        <>
          <div className="biblioteca-grid">
            {contenidosVisibles.map((contenido, index) => (
              <Reveal
                key={contenido.id}
                direction="up"
                delay={(index % 3) * 120}
                className="biblioteca-card-reveal"
              >
                <article className="biblioteca-card" key={contenido.id}>
                  <div className="biblioteca-imagen">
                    {videoActivo === contenido.id ? (
                      <ReproductorYoutube
                        videoId={contenido.youtubeId}
                        titulo={contenido.titulo}
                        onCerrar={() => setVideoActivo(null)}
                      />
                    ) : (
                      <>
                        {contenido.miniatura ? (
                          <img
                            src={contenido.miniatura}
                            alt={contenido.titulo}
                            loading="lazy"
                          />
                        ) : (
                          <div className="biblioteca-placeholder">
                            <span>PALAYENTI</span>
                            <strong>{contenido.categoria}</strong>
                          </div>
                        )}

                        {contenido.youtubeId ? (
                          <button
                            type="button"
                            className="biblioteca-play"
                            onClick={() => setVideoActivo(contenido.id)}
                            aria-label={`Reproducir ${contenido.titulo}`}
                          >
                            <Play size={22} fill="currentColor" />
                          </button>
                        ) : (
                          <a
                            href={contenido.enlace || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="biblioteca-abrir"
                            aria-label={`Abrir ${contenido.titulo}`}
                          >
                            <ArrowUpRight size={22} />
                          </a>
                        )}
                      </>
                    )}
                  </div>

                  <div className="biblioteca-info">
                    <div className="biblioteca-meta">
                      <span>{contenido.categoria}</span>
                      <span>
                        {contenido.fecha
                          ? new Date(contenido.fecha).toLocaleDateString(
                            'es-PE',
                            {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric',
                            }
                          )
                          : ''}
                      </span>
                    </div>

                    <h3>{contenido.titulo}</h3>

                    <p>
                      {contenido.descripcion ||
                        'Descubre este contenido de PALAYENTI.'}
                    </p>

                    {contenido.enlace && (
                      <a
                        href={contenido.enlace}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="biblioteca-enlace"
                      >
                        DESCUBRIR MÁS <ArrowUpRight size={16} />
                      </a>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {contenidosFiltrados.length > CANTIDAD_INICIAL && (
            <Reveal direction="up" delay={150}>
              <button type="button" className="biblioteca-ver-mas"
                onClick={() => setMostrarTodos((actual) => !actual)}>
                {mostrarTodos
                  ? 'MOSTRAR MENOS'
                  : 'VER TODOS LOS CONTENIDOS'}
              </button>
            </Reveal>
          )}
        </>
      )}
    </section>
  );
}
