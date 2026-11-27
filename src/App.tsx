import { useEffect, useState } from "react";

type FilmId = "lady-bird" | "moonlight" | "eighth-grade";

type Film = {
  id: FilmId;
  choice: string;
  eyebrow: string;
  title: string;
  director: string;
  year: string;
  description: string;
  shortDescription: string;
  image: string;
  trailer: string;
};

const films: Record<FilmId, Film> = {
  "lady-bird": {
    id: "lady-bird",
    choice: "ELEGISTE CAMBIAR DE AIRE",
    eyebrow: "01 / SALIR DEL NIDO",
    title: "Lady Bird",
    director: "Greta Gerwig",
    year: "2017",
    description:
      "Una adolescente de Sacramento quiere salir de su ciudad mientras navega una relación tan intensa como cariñosa con su madre.",
    shortDescription: "Querer irte. Querer volver. Crecer entre las dos cosas.",
    image: "/assets/268b1.png",
    trailer: "https://www.youtube.com/watch?v=cNi_HC839Wo",
  },
  moonlight: {
    id: "moonlight",
    choice: "ELEGISTE DESCUBRIR QUIÉN ERES",
    eyebrow: "02 / SER, SER, SIDO",
    title: "Moonlight",
    director: "Barry Jenkins",
    year: "2016",
    description:
      "Tres etapas en la vida de Chiron, un joven de Miami que busca su lugar y su identidad entre el apoyo y el amor de su comunidad.",
    shortDescription: "Tres etapas. Una identidad que se abre camino.",
    image: "/assets/56299.png",
    trailer: "https://www.youtube.com/watch?v=9NJj12tJzqc",
  },
  "eighth-grade": {
    id: "eighth-grade",
    choice: "ELEGISTE ENCONTRAR TU SITIO",
    eyebrow: "03 / SER TÚ, HOY",
    title: "Eighth Grade",
    director: "Bo Burnham",
    year: "2018",
    description:
      "Kayla atraviesa su última semana de secundaria entre inseguridades, pantallas y ganas de conectar con los demás.",
    shortDescription: "Crecer, conectar y encontrar tu propia voz.",
    image: "/assets/2e42f.png",
    trailer: "https://www.youtube.com/watch?v=y8lFgF_IjPw",
  },
};

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function PlayBadge({ large = false }: { large?: boolean }) {
  return (
    <span className={`play-badge${large ? " play-badge--large" : ""}`} aria-hidden="true">
      <img src="/assets/5a093.svg" alt="" />
    </span>
  );
}

function FilmModal({ film, onClose }: { film: Film; onClose: () => void }) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.body.classList.add("modal-open");
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <article
        className="film-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="film-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <p className="modal-choice">{film.choice}</p>
        <button className="modal-close" onClick={onClose} aria-label="Cerrar ficha">
          <img src="/assets/09262.svg" alt="" />
        </button>

        <a
          className="modal-image"
          href={film.trailer}
          target="_blank"
          rel="noreferrer"
          aria-label={`Abrir tráiler oficial de ${film.title} en YouTube`}
        >
          <img src={film.image} alt={`Fotograma de ${film.title}`} />
          <span className="modal-play" aria-hidden="true">
            <img src="/assets/d6649.svg" alt="" />
          </span>
        </a>

        <div className="modal-heading">
          <h2 id="film-title">{film.title}</h2>
          <p>
            {film.director} / {film.year}
          </p>
        </div>
        <p className="modal-description">{film.description}</p>
        <p className="modal-caption">TRÁILER OFICIAL A24 / SE ABRE EN YOUTUBE</p>
        <div className="modal-actions">
          <a
            className="button button--primary"
            href={film.trailer}
            target="_blank"
            rel="noreferrer"
          >
            Ver tráiler oficial&nbsp; →
          </a>
          <button className="button button--outline" onClick={onClose}>
            Cambiar mi elección
          </button>
        </div>
      </article>
    </div>
  );
}

export default function App() {
  const [selectedFilm, setSelectedFilm] = useState<FilmId | null>(null);
  const openFilm = (id: FilmId) => setSelectedFilm(id);

  return (
    <div className="site-shell">
      <aside className="side-index">
        <div>
          <a className="brand" href="#inicio" aria-label="Fuera de Campo, inicio">
            fdc.
          </a>
          <p className="brand-subtitle">
            FUERA DE CAMPO
            <br />
            CINE + ADOLESCENCIAS
          </p>
          <span className="side-rule" />
          <nav aria-label="Índice">
            <button onClick={() => scrollToSection("inicio")}>
              <span>01</span>Empieza aquí
            </button>
            <button onClick={() => scrollToSection("decisiones")}>
              <span>02</span>Tú decides
            </button>
            <button onClick={() => scrollToSection("sala")}>
              <span>03</span>Sala de cine
            </button>
          </nav>
        </div>
        <div className="side-edition">
          <p className="side-manifesto">
            NO HAY
            <br />
            EDAD PARA
            <br />
            VOLVER A
            <br />
            MIRARSE.
          </p>
          <p className="issue-number">01</p>
          <p className="issue-detail">
            VOL. 01
            <br />
            EDICIÓN INTERACTIVA
            <br />
            2026
          </p>
        </div>
      </aside>

      <main>
        <section className="hero blue-section" id="inicio">
          <p className="section-label">LA EDAD DEL VÉRTIGO / UNA REVISTA PARA EXPLORAR</p>
          <div className="hero-copy">
            <h1>
              Esto va
              <br />
              de ti.
            </h1>
            <p>
              De tu primer sí. De tu primer no.
              <br />
              De todas esas veces que una película
              <br />
              te entendió mejor que nadie.
            </p>
            <button className="button button--light" onClick={() => scrollToSection("decisiones")}>
              Voy a elegir&nbsp; ↓
            </button>
          </div>
          <div className="hero-portrait">
            <img src="/assets/33c3a.png" alt="Retrato de una joven junto al mar" />
          </div>
          <span className="hero-tag">TU VIDA, EN PLANO</span>
        </section>

        <section className="choices blue-section" id="decisiones">
          <h2>¿En qué modo estás?</h2>
          <p>Una elección. Una película para seguir tirando del hilo.</p>
          <div className="choice-list">
            <button onClick={() => openFilm("eighth-grade")}>
              <span>01</span>
              <strong>Quiero encontrar mi sitio</strong>
              <b>→</b>
            </button>
            <button onClick={() => openFilm("moonlight")}>
              <span>02</span>
              <strong>Estoy descubriendo quién soy</strong>
              <b>→</b>
            </button>
            <button onClick={() => openFilm("lady-bird")}>
              <span>03</span>
              <strong>Necesito salir de aquí</strong>
              <b>→</b>
            </button>
          </div>
        </section>

        <section className="cinema" id="sala">
          <p className="section-label">EN CARTEL / TRES MIRADAS PARA ABRIR BOCA</p>
          <h2>Tu próxima obsesión.</h2>

          <button className="featured-film" onClick={() => openFilm("lady-bird")}>
            <span className="featured-image">
              <img src={films["lady-bird"].image} alt="Fotograma de Lady Bird" />
              <PlayBadge large />
            </span>
            <span className="featured-copy">
              <small>{films["lady-bird"].eyebrow}</small>
              <strong>
                Lady
                <br />
                Bird
              </strong>
              <span>Greta Gerwig · 2017</span>
              <span>Querer irte. Querer volver. Crecer entre las dos cosas.</span>
              <small>VER FICHA Y TRÁILER&nbsp; →</small>
            </span>
          </button>

          <div className="film-grid">
            {(["moonlight", "eighth-grade"] as FilmId[]).map((id) => {
              const film = films[id];
              return (
                <button className="film-card" key={id} onClick={() => openFilm(id)}>
                  <span className="film-card-image">
                    <img src={film.image} alt={`Fotograma de ${film.title}`} />
                  </span>
                  <span className="film-card-title">
                    <strong>{film.title}</strong>
                    <b>→</b>
                  </span>
                  <span>
                    {film.director} · {film.year}
                  </span>
                </button>
              );
            })}
          </div>
          <p className="image-credit">
            IMÁGENES A24 / LOS TRÁILERES SE ABREN EN EL CANAL OFICIAL A24
          </p>
        </section>

        <footer>
          <h2>Sin guion. Sin etiquetas.</h2>
          <p>Solo películas, preguntas y todas tus posibles versiones.</p>
          <small>FUERA DE CAMPO / 2026</small>
        </footer>
      </main>

      {selectedFilm && (
        <FilmModal film={films[selectedFilm]} onClose={() => setSelectedFilm(null)} />
      )}
    </div>
  );
}
