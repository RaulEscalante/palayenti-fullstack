
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { obtenerEnlaceWhatsApp } from '../../config/contacto.js';
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

      <div className="cta-final-content">
        <span className="eyebrow">{etiqueta}</span>

        <h2>{titulo}</h2>

        <p>{descripcion}</p>

        {enlaceWhatsApp ? (
          <a
            href={enlaceWhatsApp}
            className="cta-final-button"
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={19} />
            {textoBoton}
            <ArrowUpRight size={18} />
          </a>
        ) : (
          <span className="cta-final-note">
            Próximamente, nuestro canal de contacto.
          </span>
        )}
      </div>

      <div className="cta-final-footer">
        <span>PALAYENTI</span>
        <span>CREATIVIDAD · MÚSICA · EXPERIENCIAS</span>
      </div>
    </section>
  );
}
