
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { obtenerEnlaceWhatsApp } from '../../config/contacto.js';
import Reveal from '../../components/reveal/Reveal.jsx';
import './CTAFinal.css';

export default function CTAFinal({
  etiqueta = 'HAGAMOS ALGO JUNTOS',
  titulo = 'HABLEMOS DE TU PRÓXIMA IDEA.',
  descripcion = 'Estamos listos para escucharte. Cuéntanos qué tienes en mente y hagámoslo realidad.',
  textoBoton = 'HABLEMOS POR WHATSAPP',
  mensajeWhatsApp = 'Hola, quisiera información sobre PALAYENTI.',
}) {
  const enlaceWhatsApp = obtenerEnlaceWhatsApp(mensajeWhatsApp);

  return (
    <section className="cta-final">
      <div className="cta-final-glow" />
      <div className="cta-final-orbit" />

      <div className="cta-final-content">
        <Reveal direction="up">
          <span className="eyebrow">{etiqueta}</span>
        </Reveal>

        <Reveal direction="up" delay={100}>
          <h2>{titulo}</h2>
        </Reveal>

        <Reveal direction="up" delay={200}>
          <p>{descripcion}</p>
        </Reveal>

        <Reveal direction="up" delay={300}>
          {enlaceWhatsApp ? (
            <a
              href={enlaceWhatsApp}
              className="cta-final-button"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={18} />
              {textoBoton}
              <ArrowUpRight size={17} />
            </a>
          ) : (
            <span className="cta-final-note">
              Próximamente, nuestro canal de contacto.
            </span>
          )}
        </Reveal>
      </div>

      <span className="cta-final-index">PALAYENTI / CONECTEMOS</span>
    </section>
  );
}
