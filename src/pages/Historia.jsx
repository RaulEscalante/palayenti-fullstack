
import HistoriaHero from '../sections/historia/HistoriaHero.jsx';
import Trayectoria from '../sections/historia/Trayectoria.jsx';
import Momentos from '../sections/historia/Momentos.jsx';
import CTAFinal from '../sections/cta/CTAFinal.jsx';

export default function Historia() {
  return (
    <>
      <HistoriaHero />
      <Trayectoria />
      <Momentos />

      <CTAFinal
        etiqueta="CADA HISTORIA ABRE NUEVOS CAMINOS"
        titulo="¿CREAMOS ALGO JUNTOS?"
        descripcion="Si mi historia, mi música o mi contenido conectan contigo, conversemos sobre nuevas ideas, colaboraciones y proyectos."
        textoBoton="HABLEMOS POR WHATSAPP"
        mensajeWhatsApp="Hola, conocí la historia de PALAYENTI y quisiera conversar sobre una posible colaboración o proyecto."
      />
    </>
  );
}
