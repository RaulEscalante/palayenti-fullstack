
import { CalendarDays } from 'lucide-react';
import './css/Agenda.css';

export default function Agenda() {
  return (
    <section className="agenda-section" id="agenda">
      <div className="agenda-icon">
        <CalendarDays size={27} />
      </div>

      <div className="agenda-text">
        <span className="eyebrow">NOS VEMOS PRONTO</span>
        <h2> EL PRÓXIMO MOMENTO <br />PUEDE SER <span>EN VIVO.</span></h2>
        <p>Aquí encontrarás las próximas presentaciones y fechas confirmadas.</p>
      </div>

      <div className="agenda-status">
        <span className="status-dot" />
        <span>PRÓXIMAMENTE</span>
      </div>
    </section>
  );
}
