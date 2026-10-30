
import { CalendarDays, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '../../components/reveal/Reveal.jsx';
import './css/Agenda.css';

export default function Agenda() {
  return (
    <Reveal as="section" className="agenda-section" direction="up">
      <div className="agenda-icon">
        <CalendarDays size={27} />
      </div>

      <div className="agenda-text" id="agenda">
        <span className="eyebrow">NOS VEMOS PRONTO</span>

        <h2>
          EL PRÓXIMO MOMENTO <br />
          PUEDE SER <span>EN VIVO.</span>
        </h2>

        <p>
          Aquí encontrarás las próximas presentaciones y fechas confirmadas.
        </p>
      </div>

      <div className="agenda-status">
        <span className="status-dot" />
        <span>PRÓXIMAMENTE</span>
      </div>

      <Link className="button button-outline" to="/musica">
        DESCUBRIR PALAYENTI MÚSICA
        <ArrowUpRight size={17} />
      </Link>
    </Reveal>
  );
}
