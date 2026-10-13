import { Link } from 'react-router-dom'
import SiteNav from '../components/SiteNav'
import RotatingImage from '../components/RotatingImage'
import ProjectsCarousel from '../components/ProjectsCarousel'
import Footer from '../components/Footer'
import cardImg from '../assets/hero/rectangle-card.png'
import signImg from '../assets/hero/rectangle-sign.png'
import capImg1 from '../assets/hero/girl-cap-1.png'
import redSweaterImg1 from '../assets/hero/redsweater-1.png'
import monadaImg1 from '../assets/hero/monada-1.png'
import tilePhone from '../assets/hero/home-phone.jpg'
import tileTote from '../assets/hero/home-tote.jpg'
import tileLaptop from '../assets/hero/home-laptop.jpg'
import monadaSlide1 from '../assets/hero/monada-carousel-1.jpg'
import monadaSlide2 from '../assets/hero/monada-carousel-2.jpg'
import monadaSlide3 from '../assets/hero/monada-carousel-3.jpg'
import tileFin from '../assets/hero/home-fin.jpg'
import conteinerSlide1 from '../assets/hero/conteiner-carousel-1.jpg'
import conteinerSlide2 from '../assets/hero/conteiner-carousel-2.jpg'
import conteinerSlide3 from '../assets/hero/conteiner-carousel-3.jpg'
import tilePoster from '../assets/hero/home-poster.jpg'
import './Home.css'

const slides = (name) => [2, 3].map((n) => `https://picsum.photos/seed/enlace-hero-${name}-${n}/392/490`)

const tiles = {
  phone: { src: tilePhone, alt: 'Sitio web de Grupo Urbex en un celular' },
  tote: { src: tileTote, alt: 'Tote bag de marca', more: slides('tote') },
  laptop: { src: tileLaptop, alt: 'Sitio web en una notebook' },
  basket: {
    src: monadaSlide1,
    alt: 'Canasta con limones y packaging de Monada',
    more: [monadaSlide2, monadaSlide3],
  },
  fin: { src: tileFin, alt: 'Quilla de tabla de surf con isotipo' },
  con: {
    src: conteinerSlide1,
    alt: 'Afiches de Conteiner',
    more: [conteinerSlide2, conteinerSlide3],
  },
  poster: { src: tilePoster, alt: 'Afiche enmarcado' },
}

function Tile({ name, className = '' }) {
  const { src, alt, more } = tiles[name]
  return (
    <div className={`hero-tile ${className}`.trim()}>
      {more ? (
        <RotatingImage
          images={[src, ...more]}
          alt={alt}
          interval={500}
          className="rotating-image--cut"
        />
      ) : (
        <img src={src} alt={alt} />
      )}
    </div>
  )
}

const featuredProjectImages = Array.from(
  { length: 8 },
  (_, i) => `https://picsum.photos/seed/enlace-project-${i + 1}/600/800`,
)

const redSweaterImages = [
  redSweaterImg1,
  'https://picsum.photos/seed/enlace-redsweater-2/440',
  'https://picsum.photos/seed/enlace-redsweater-3/440',
  'https://picsum.photos/seed/enlace-redsweater-4/440',
  'https://picsum.photos/seed/enlace-redsweater-5/440',
]

const monadaImages = [
  monadaImg1,
  'https://picsum.photos/seed/enlace-monada-2/440',
  'https://picsum.photos/seed/enlace-monada-3/440',
  'https://picsum.photos/seed/enlace-monada-4/440',
  'https://picsum.photos/seed/enlace-monada-5/440',
]

function Home() {
  return (
    <>
    <div className="hero">
      <SiteNav overlay />

      <div className="hero-collage hero-collage--mobile">
        <div className="hero-photo hero-photo--card">
          <img src={cardImg} alt="Papelería de marca" />
        </div>
        <div className="hero-photo hero-photo--sign">
          <img src={signImg} alt="Cartel de local" />
        </div>
        <div className="hero-photo hero-photo--cap">
          <img src={capImg1} alt="Prenda bordada" />
        </div>
        <div className="hero-photo hero-photo--monada">
          <RotatingImage images={monadaImages} alt="Producto Monada" interval={3500} />
        </div>
        <div className="hero-photo hero-photo--redsweater">
          <RotatingImage images={redSweaterImages} alt="Gorra bordada" interval={3500} />
        </div>
      </div>

      <div className="hero-layout">
        <div className="hero-collage hero-collage--desktop">
          <div className="hero-pair hero-pair--top">
            <Tile name="phone" />
            <Tile name="tote" />
          </div>
          <div className="hero-pair hero-pair--middle">
            <Tile name="laptop" />
            <Tile name="basket" />
          </div>
          <Tile name="fin" className="hero-tile--fin" />
          <div className="hero-pair hero-pair--bottom">
            <Tile name="con" />
            <Tile name="poster" />
          </div>
        </div>

        <h1 className="hero-title hero-title--ideas">Where ideas</h1>

        <h1 className="hero-title hero-title--form">
          <span>
            find<span className="hero-break-m"> their</span>
          </span>
          <span>
            <span className="hero-break-d">their </span>form
          </span>
        </h1>
      </div>
    </div>

    <section className="featured">
      <div className="featured-text">
        <p className="featured-copy">
          We are a branding and communication studio. We work at the point
          where an idea stops being intention and starts taking structure: an
          identity, a language, a system that holds it at every touchpoint.
        </p>

        <span className="featured-eyebrow">Selected work</span>
      </div>

      <ProjectsCarousel images={featuredProjectImages} />

      <Link to="/work" className="featured-more">
        See the archive
      </Link>
    </section>

    <Footer />
    </>
  )
}

export default Home
