
import { ArrowDownRight, Camera, Music2, Video } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import Reveal from '../../components/reveal/Reveal.jsx';
import './css/Galeria.css';

export default function Galeria() {
  return (
    <section className="section gallery-section" id="galeria">

      <SectionHeading
        eyebrow="MOMENTOS QUE QUEDAN"
        title="DENTRO Y FUERA"
        highlight="DEL ESCENARIO."
        description="Un vistazo a los escenarios, las colaboraciones y las experiencias que forman parte del universo PALAYENTI."
      />

      <div className="gallery-grid">
        <Reveal className="gallery-tile gallery-tile-large" direction="up">
          <img src="/img-escenario.webp" alt="PALAYENTI en el escenario"
            className="gallery-image" />
          <Music2 size={40} strokeWidth={1} />
          <span>01 / EN EL ESCENARIO</span>
        </Reveal>

        <Reveal className="gallery-tile gallery-tile-blue" direction="up" delay={120}>
          <img src="/galeria/detras-camaras.jpg" alt="Momentos detrás de cámaras"
            className="gallery-image" />
          <Camera size={34} strokeWidth={1} />
          <span>02 / DETRÁS DE CÁMARAS</span>
        </Reveal>

        <Reveal className="gallery-tile gallery-tile-light" direction="up" delay={240}>
          <img src="/galeria/sesiones-videos.jpg" alt="Sesiones y videos musicales"
            className="gallery-image" />
          <Video size={34} strokeWidth={1} />
          <span>03 / SESIONES Y VIDEOS</span>
        </Reveal>
      </div>

      <Reveal className="gallery-footer" delay={150}>
        <span>GALERÍA VISUAL · CONTENIDO PROVISIONAL</span>
        <ArrowDownRight size={20} />
      </Reveal>
    </section>
  );
}
