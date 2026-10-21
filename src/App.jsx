import { useState } from 'react';
import {
  ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, CalendarDays, Camera,
  Headphones, Music2, Play, Video, X,
} from "lucide-react";

import Navbar from './components/navbar/Navbar.jsx';
import Footer from './components/footer/Footer.jsx';

import './App.css';

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-glow" />
      <div className="hero-grid" />

      <div className="hero-content">
        <span className="eyebrow">
          <span className="status-dot" />
          MÚSICA · HISTORIAS · EXPERIENCIAS
        </span>

        <h1>
          UNA VOZ.
          <br />
          <span className="hero-outline">MUCHAS</span>
          <br />
          FORMAS DE
          <br />
          <span className="hero-blue">EXPRESARSE.</span>
        </h1>

        <p className="hero-description">
          Soy Palayenti. Este es mi universo: la música que comparto,
          las historias que vivo y todo lo que tengo por contar.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#musica">
            <Music2 size={18} />
            Explorar música
            <ArrowUpRight size={17} />
          </a>
          <a className="button button-outline" href="#creador">
            <Play size={17} />
            Ver mis contenidos
          </a>
        </div>

        <a className="hero-scroll" href="#universos">
          DESCUBRE MI UNIVERSO <ArrowDown size={15} />
        </a>
      </div>

      <div className="hero-visual" aria-label="Espacio visual provisional">
        <div className="hero-orbit hero-orbit-one" />
        <div className="hero-orbit hero-orbit-two" />

        <div className="hero-placeholder">
          <div className="placeholder-cross">+</div>
          <Music2 size={62} strokeWidth={1} />
          <span>PALAYENTI</span>
          <small>IMAGEN PRINCIPAL</small>
        </div>

        <div className="hero-stamp">
          <span>ARTISTA</span>
          <span className="stamp-line" />
          <span>CREADOR</span>
        </div>

        <div className="hero-side-label">UNIVERSO PALAYENTI / 001</div>
      </div>

      <div className="hero-bottom-line">
        <span>UNA SOLA IDENTIDAD</span>
        <span> DOS UNIVERSOS </span>
        <span className="hero-bottom-index">01 / 06</span>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, highlight, description }) {
  return (
    <div className="section-heading">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>
          {title} {highlight && <span>{highlight}</span>}
        </h2>
      </div>
      {description && <p>{description}</p>}
    </div>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SectionHeading/>
      </main>
      <Footer />
    </>
  );
}
