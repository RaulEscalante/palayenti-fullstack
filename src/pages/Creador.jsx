
import CreadorHero from '../sections/creador/CreadorHero.jsx';
import Contenidos from '../sections/creador/Contenidos.jsx';
import Colaboraciones from '../sections/creador/Colaboraciones.jsx';
import VideosCreador from '../sections/creador/VideosCreador.jsx';
import CTAFinal from '../sections/cta/CTAFinal.jsx';

export default function Creador() {
  return (
    <>
      <CreadorHero />
      <Contenidos />
      <Colaboraciones />
      <VideosCreador />

      <CTAFinal
        etiqueta="LAS BUENAS IDEAS SE COMPARTEN"
        titulo="¿CREAMOS ALGO JUNTOS?"
        descripcion="Si tienes una idea, una historia que contar o una propuesta de colaboración, conversemos y veamos hasta dónde podemos llegar."
        textoBoton="CONVERSEMOS POR WHATSAPP"
        mensajeWhatsApp="Hola, quisiera conversar sobre una idea o colaboración con PALAYENTI Creador."
      />
    </>
  );
}
