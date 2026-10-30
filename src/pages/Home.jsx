import Hero from '../sections/home/Hero.jsx';
import Universos from '../sections/home/Universos.jsx';
import Novedades from '../sections/home/Novedades.jsx';
import Historia from '../sections/home/Historia.jsx';
import Galeria from '../sections/home/Galeria.jsx';
import Agenda from '../sections/home/Agenda.jsx';
import Contacto from '../sections/home/Contacto.jsx';

export default function Home() {
  return (
    <>
      <Hero />
      <Universos />
      <Novedades />
      <Historia />
      <Galeria />
      <Agenda />
      <Contacto />
    </>
  );
}