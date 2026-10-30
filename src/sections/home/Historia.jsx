
import { ArrowUpRight, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '../../components/reveal/Reveal.jsx';
import './css/Historia.css';

export default function Historia() {
  return (
    <section className="section story-section" id="historia">
      <Reveal direction="left" className="story-visual">
        <div className="story-visual-inner">
          <Camera size={48} strokeWidth={1} />
          <span>UN ESPACIO PARA MI HISTORIA</span>
          <small>RETRATO PROVISIONAL</small>
        </div>

        <div className="story-index">PALAYENTI / BIO</div>
      </Reveal>

      <Reveal direction="right" delay={150} className="story-content">
        <span className="eyebrow">DETRÁS DEL NOMBRE</span>

        <h2>
          UNA HISTORIA <br />
          QUE SIGUE <br />
          <span>ESCRIBIÉNDOSE.</span>
        </h2>

        <p>
          La música es una parte de mí, pero no es la única. Este espacio
          reúne las experiencias, las ideas y los momentos que me han
          traído hasta aquí.
        </p>

        <p>
          Muy pronto podrás conocer más sobre mis comienzos, mi trayectoria
          y todo lo que inspira lo que hago.
        </p>

        <Link className="button button-outline" to="/historia">
          CONECTAR CON PALAYENTI <ArrowUpRight size={17} />
        </Link>
      </Reveal>
    </section>
  );
}
