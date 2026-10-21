
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <a className="brand footer-brand" href="#inicio">
        PALA<span>YENTI</span><i>.</i>
      </a>

      <span>MÚSICA, HISTORIAS Y EXPERIENCIAS.</span>

      <a href="#inicio" className="back-to-top">
        VOLVER ARRIBA ↑
      </a>

      <small>
        © {new Date().getFullYear()} PALAYENTI · TODOS LOS DERECHOS RESERVADOS
      </small>
    </footer>
  );
}
