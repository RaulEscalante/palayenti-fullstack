
import ContactoHero from '../sections/contacto/ContactoHero.jsx';
import ContactoFormulario from '../sections/contacto/ContactoFormulario.jsx';
import CTAFinal from '../sections/cta/CTAFinal.jsx';

export default function Contacto() {
  return (
    <>
      <ContactoHero />
      <ContactoFormulario />

      <CTAFinal
        etiqueta="LAS BUENAS CONEXIONES COMIENZAN CON UNA IDEA"
        titulo="HAGAMOS QUE SUCEDA."
        descripcion="Cada proyecto comienza con una conversación. Estoy abierto a conocer nuevas propuestas y explorar posibilidades."
        textoBoton="HABLEMOS POR WHATSAPP"
        mensajeWhatsApp="Hola PALAYENTI, quisiera conversar sobre una propuesta o proyecto."
      />
    </>
  );
}
