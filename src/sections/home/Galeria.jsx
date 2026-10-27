
import { ArrowDownRight, Camera, Music2, Video, } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import './css/Galeria.css';

export default function Galeria() {
  return (
    <section className="section gallery-section" id="galeria">
      <SectionHeading eyebrow="MOMENTOS QUE QUEDAN" title="DENTRO Y FUERA" highlight="DEL ESCENARIO."
        description="Un vistazo a los escenarios, las colaboraciones y las experiencias que forman parte del universo PALAYENTI." />

      <div className="gallery-grid">
        <div className="gallery-tile gallery-tile-large">
          <Music2 size={40} strokeWidth={1} />
          <span>01 / EN EL ESCENARIO</span>
        </div>

        <div className="gallery-tile gallery-tile-blue">
          <Camera size={34} strokeWidth={1} />
          <span>02 / DETRÁS DE CÁMARAS</span>
        </div>

        <div className="gallery-tile gallery-tile-light">
          <Video size={34} strokeWidth={1} />
          <span>03 / SESIONES Y VIDEOS</span>
        </div>
      </div>

      <div className="gallery-footer">
        <span>GALERÍA VISUAL · CONTENIDO PROVISIONAL</span>
        <ArrowDownRight size={20} />
      </div>
    </section>
  );
}
