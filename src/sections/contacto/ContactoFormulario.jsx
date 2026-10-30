
import { useState } from 'react';
import { Send, Mail, MessageCircle, ArrowUpRight, } from 'lucide-react';
import { siInstagram, siYoutube, siTiktok } from 'simple-icons';

import { obtenerEnlaceWhatsApp } from '../../config/contacto.js';
import './css/ContactoFormulario.css';

const motivos = [
  'Contratación musical',
  'Colaboración de contenido',
  'Prensa y entrevistas',
  'Propuesta comercial',
  'Otro',
];

const redes = [
  {
    nombre: 'Instagram',
    descripcion: 'Fotografías y momentos',
    icono: siInstagram,
    url: '',
  },
  {
    nombre: 'YouTube',
    descripcion: 'Música y videos',
    icono: siYoutube,
    url: '',
  },
  {
    nombre: 'TikTok',
    descripcion: 'Contenido y experiencias',
    icono: siTiktok,
    url: '',
  },
];

export default function ContactoFormulario() {
  const [formulario, setFormulario] = useState({
    nombre: '',
    email: '',
    motivo: 'Contratación musical',
    mensaje: '',
  });

  const actualizarCampo = (evento) => {
    const { name, value } = evento.target;
    setFormulario((anterior) => ({
      ...anterior,
      [name]: value,
    }));
  };

  const enviarFormulario = (evento) => {
    evento.preventDefault();
    const asunto = `Consulta PALAYENTI: ${formulario.motivo}`;
    const cuerpo = `
      Hola PALAYENTI:

      Mi nombre es ${formulario.nombre}.
      Mi correo es ${formulario.email}.

      Motivo de contacto: ${formulario.motivo}

      Mensaje:
      ${formulario.mensaje}
    `;

    const enlace = `mailto:contacto@palayenti.com?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
    window.location.href = enlace;
  };

  const enlaceWhatsApp = obtenerEnlaceWhatsApp(
    'Hola PALAYENTI, quisiera ponerme en contacto para realizar una consulta.'
  );

  return (
    <section className="contact-section" id="contacto-formulario">
      <div className="contact-section-heading">
        <div>
          <span className="eyebrow">ESTAMOS EN CONTACTO</span>
          <h2>
            Cuéntame tu
            <br />
            <span>idea o propuesta.</span>
          </h2>
        </div>

        <p>
          Completa el formulario con tus datos y el motivo de tu
          consulta. Revisaré tu mensaje para continuar la conversación.
        </p>
      </div>

      <div className="contact-section-layout">
        <form className="contact-form" onSubmit={enviarFormulario}>
          <div className="contact-form-heading">
            <span>01 / TU MENSAJE</span>
            <h3>Hablemos de lo que tienes en mente.</h3>
          </div>

          <div className="contact-form-row">
            <label>
              NOMBRE COMPLETO
              <input type="text" name="nombre" placeholder="¿Cómo te llamas?"
                value={formulario.nombre} onChange={actualizarCampo} required />
            </label>

            <label>
              CORREO ELECTRÓNICO
              <input type="email" name="email" placeholder="tucorreo@ejemplo.com"
                value={formulario.email} onChange={actualizarCampo} required />
            </label>
          </div>

          <label>
            MOTIVO DE CONTACTO
            <select name="motivo" value={formulario.motivo} onChange={actualizarCampo} required>
              {motivos.map((motivo) => (
                <option key={motivo} value={motivo}>
                  {motivo}
                </option>
              ))}
            </select>
          </label>

          <label>
            MENSAJE
            <textarea name="mensaje" placeholder="Cuéntame un poco más sobre tu propuesta..." rows="5"
              value={formulario.mensaje} onChange={actualizarCampo} required />
          </label>

          <button type="submit" className="contact-form-submit">
            PREPARAR CORREO
            <Send size={16} />
          </button>

          <p className="contact-form-disclaimer">
            Al enviar, se abrirá tu aplicación de correo para completar
            el envío del mensaje.
          </p>
        </form>

        <aside className="contact-information">
          <div className="contact-information-block">
            <span className="contact-information-index">02 / CONECTEMOS</span>
            <h3>También puedes encontrarme por aquí.</h3>

            <a
              href="mailto:contacto@palayenti.com"
              className="contact-information-link"
            >
              <span className="contact-information-icon">
                <Mail size={19} />
              </span>
              <span>
                <small>CORREO ELECTRÓNICO</small>
                <strong>contacto@palayenti.com</strong>
              </span>
              <ArrowUpRight size={17} />
            </a>

            {enlaceWhatsApp && (
              <a href={enlaceWhatsApp} target="_blank" rel="noreferrer" className="contact-information-link" >
                <span className="contact-information-icon">
                  <MessageCircle size={19} />
                </span>
                <span>
                  <small>WHATSAPP</small>
                  <strong>Iniciar una conversación</strong>
                </span>
                <ArrowUpRight size={17} />
              </a>
            )}
          </div>

          <div className="contact-information-block contact-social-block">
            <span className="contact-information-index">03 / REDES SOCIALES</span>
            <h3>Sigamos conectados.</h3>

            <div className="contact-social-list">
              {redes.map((red) => {
                const Icono = red.icono;

                return (
                  <div className="contact-social-item" key={red.nombre}>
                    <span className="contact-social-icon">
                      {Icono ? (
                        <svg viewBox="0 0 24 24" width="19" height="19"
                          fill="currentColor" aria-hidden="true">
                          <path d={Icono.path} />
                        </svg>
                      ) : (
                        red.nombre.charAt(0)
                      )}
                    </span>

                    <span>
                      <strong>{red.nombre}</strong>
                      <small>{red.descripcion}</small>
                    </span>

                    {red.url ? (
                      <a href={red.url} target="_blank"
                        rel="noreferrer" aria-label={`Visitar ${red.nombre}`} >
                        <ArrowUpRight size={17} />
                      </a>
                    ) : (
                      <span className="contact-social-pending">
                        PRÓXIMAMENTE
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
