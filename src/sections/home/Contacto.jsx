
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '../../components/reveal/Reveal.jsx';
import './css/Contacto.css';

export default function Contacto() {
  return (
    <section className="home-contact">
      <div className="home-contact-decoration" />

      <Reveal className="home-contact-content" direction="up">
        <span className="eyebrow">
          ¿TIENES ALGO EN MENTE?
        </span>

        <h2>
          TODA GRAN IDEA
          <br />
          <span>COMIENZA CONECTANDO.</span>
        </h2>

        <p>
          Desde proyectos musicales hasta nuevas colaboraciones,
          siempre hay espacio para crear algo diferente.
          Cuéntame qué tienes en mente.
        </p>

        <Link to="/contacto" className="home-contact-button">
          <MessageCircle size={18} />
          HABLEMOS
          <ArrowUpRight size={17} />
        </Link>
      </Reveal>
    </section>
  );
}
