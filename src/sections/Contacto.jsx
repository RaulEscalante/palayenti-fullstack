
import { useState } from 'react';
import { ArrowRight, Camera, Video, } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import './Contacto.css';

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    motivo: 'Contratación musical',
    mensaje: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previousForm) => ({
      ...previousForm, [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const subject = encodeURIComponent(`Consulta PALAYENTI: ${form.motivo}`,);

    const body = encodeURIComponent(`Nombre: ${form.nombre}\nCorreo: ${form.email}\nMotivo: ${form.motivo}\n\n${form.mensaje}`,);

    window.location.href = `mailto:contacto@palayenti.com?subject=${subject}&body=${body}`;
  }

  return (
    <section className="section contact-section" id="contacto">
      <SectionHeading eyebrow="TODO EMPIEZA CON UNA CONVERSACIÓN" title="HAGAMOS" highlight="ALGO JUNTOS."
        description="¿Una contratación, una colaboración, una entrevista o simplemente quieres escribirme? Este espacio es para ti." />

      <div className="contact-grid">
        <div className="contact-details">
          <span className="contact-label">
            CONTACTO PROFESIONAL
          </span>

          <h3>Las buenas ideas <br />empiezan hablando.</h3>

          <p> Selecciona el motivo de tu consulta y cuéntame un poco sobre
            tu propuesta.</p>

          <div className="contact-socials">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <Camera size={20} />
            </a>

            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube">
              <Video size={20} />
            </a>

            <a
              href="https://www.tiktok.com/" target="_blank" rel="noreferrer" aria-label="TikTok">
              <Video size={20} />
            </a>
          </div>

          <span className="socials-caption">
            ENCUÉNTRAME EN REDES
          </span>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Tu nombre
            <input name="nombre" value={form.nombre} onChange={handleChange}
              placeholder="¿Cómo te llamas?" required />
          </label>

          <label>
            Correo electrónico
            <input name="email" type="email" value={form.email} onChange={handleChange}
              placeholder="tu@correo.com" required />
          </label>

          <label>
            ¿En qué podemos colaborar?
            <select name="motivo" value={form.motivo} onChange={handleChange}>
              <option>Contratación musical</option>
              <option>Colaboración de contenido</option>
              <option>Prensa y entrevistas</option>
              <option>Propuesta comercial</option>
              <option>Otro motivo</option>
            </select>
          </label>

          <label>
            Tu mensaje
            <textarea name="mensaje" value={form.mensaje} onChange={handleChange}
              placeholder="Cuéntame un poco sobre tu propuesta..." rows={4} required />
          </label>

          <button className="button button-primary form-submit" type="submit">
            PREPARAR MENSAJE <ArrowRight size={17} />
          </button>

          <span className="form-note">
            DEMOSTRACIÓN · SE ABRIRÁ TU APLICACIÓN DE CORREO
          </span>
        </form>
      </div>
    </section>
  );
}
