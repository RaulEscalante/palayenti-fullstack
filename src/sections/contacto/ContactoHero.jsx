
import { Mail, MessageCircle, ArrowDown } from 'lucide-react';
import './css/ContactoHero.css';

export default function ContactoHero() {
  return (
    <section className="contact-hero">
      <div className="contact-hero-content">
        <span className="eyebrow">
          <Mail size={14} />
          CONECTEMOS
        </span>

        <h1>Las buenas ideas<br />
          <span>comienzan hablando.</span>
        </h1>

        <p>¿Tienes una propuesta, una idea o simplemente quieres
          ponerte en contacto? Este es el espacio para comenzar
          una conversación.</p>

        <a href="#contacto-formulario" className="contact-hero-link">
          ESCRÍBEME
          <ArrowDown size={15} />
        </a>
      </div>

      <div className="contact-hero-visual">
        <div className="contact-visual-orbit contact-visual-orbit-one" />
        <div className="contact-visual-orbit contact-visual-orbit-two" />

        <div className="contact-visual-card">
          <div className="contact-visual-icon">
            <MessageCircle size={38} strokeWidth={1.2} />
          </div>

          <span className="contact-visual-label">PALAYENTI</span>

          <h2>Una conversación.<br />
            <span>Una nueva posibilidad.</span>
          </h2>

          <div className="contact-visual-line" />

          <small>MÚSICA · CREATIVIDAD · CONEXIONES</small>
        </div>

        <span className="contact-visual-side">
          ABIERTO A NUEVAS IDEAS
        </span>
      </div>

      <div className="contact-hero-bottom">
        <span>06 — CONTACTO</span>
        <span>UNA VOZ. MUCHAS FORMAS DE EXPRESARSE.</span>
      </div>
    </section>
  );
}
