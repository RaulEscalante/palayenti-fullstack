
import CreadorHero from '../sections/creador/CreadorHero.jsx';
import NovedadesCreador from '../sections/creador/NovedadesCreador.jsx';
import BibliotecaCreador from '../sections/creador/BibliotecaCreador.jsx';
import CTAFinal from '../sections/cta/CTAFinal.jsx';
import useContenidos from '../hooks/useContenidos.js';

export default function Creador() {
  const {
    contenidos,
    cargando,
    error,
    recargar,
  } = useContenidos();

  return (
    <>
      <CreadorHero />

      <NovedadesCreador
        contenidos={contenidos}
        cargando={cargando}
        error={error}
        recargar={recargar}
      />

      <BibliotecaCreador
        contenidos={contenidos}
        cargando={cargando}
      />

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
