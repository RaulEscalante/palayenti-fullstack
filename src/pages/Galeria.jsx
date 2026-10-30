
import GaleriaHero from '../sections/galeria/GaleriaHero.jsx';
import GaleriaGrid from '../sections/galeria/GaleriaGrid.jsx';
import CTAFinal from '../sections/cta/CTAFinal.jsx';

export default function Galeria() {
  return (
    <>
      <GaleriaHero />
      <GaleriaGrid />

      <CTAFinal
        etiqueta="¿TIENES UNA IDEA EN MENTE?"
        titulo="HAGAMOS ALGO QUE MEREZCA SER COMPARTIDO."
        descripcion="Si quieres colaborar con PALAYENTI, crear contenido o proponer un proyecto, conversemos."
        textoBoton="HABLEMOS POR WHATSAPP"
        mensajeWhatsApp="Hola, vi la galería de PALAYENTI y quisiera conversar sobre una colaboración o proyecto."
      />
    </>
  );
}
