import MusicaHero from '../sections/musica/MusicaHero.jsx';
import Lanzamientos from '../sections/musica/Lanzamientos.jsx';
import Videoclips from '../sections/musica/Videoclips.jsx';
import CTAFinal from '../sections/cta/CTAFinal.jsx';

export default function Musica() {
  return (
    <>
      <MusicaHero />
      <Lanzamientos />
      <Videoclips />
      <CTAFinal
        etiqueta="¿TIENES UN EVENTO EN MENTE?"
        titulo="LLEVEMOS LA MÚSICA A TU EVENTO."
        descripcion="Cuéntanos qué estás organizando y conversemos sobre cómo PALAYENTI puede formar parte de tu próximo evento."
        textoBoton="CONSULTAR POR WHATSAPP"
        mensajeWhatsApp="Hola, quisiera información sobre las contrataciones de PALAYENTI para un evento."
      />
    </>
  );
}