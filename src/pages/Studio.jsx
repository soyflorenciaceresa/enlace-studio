import { useEffect, useRef, useState } from 'react'
import SiteNav from '../components/SiteNav'
import Footer from '../components/Footer'
import RotatingImage from '../components/RotatingImage'
import './Studio.css'

const servicePositions = [
  { top: '0%', left: '0%' },
  { top: '58%', left: '55%' },
  { top: '12%', left: '62%' },
  { top: '65%', left: '5%' },
  { top: '30%', left: '30%' },
  { top: '2%', left: '58%' },
  { top: '68%', left: '32%' },
]

const services = [
  {
    name: 'Strategy',
    description: 'Definimos la dirección que da sentido a cada decisión de marca.',
  },
  {
    name: 'Branding',
    description: 'Construimos marcas con una idea central sólida que guía cada decisión.',
  },
  {
    name: 'Naming',
    description: 'Nombres memorables que capturan la esencia de cada proyecto.',
  },
  {
    name: 'Packaging',
    description: 'Diseño de packaging que destaca en el punto de venta.',
  },
  {
    name: 'Web design',
    description: 'Sitios y experiencias digitales pensadas para las personas.',
  },
  {
    name: 'Social media',
    description: 'Contenido y estrategia para conectar marcas con sus comunidades.',
  },
].map((service, i) => ({
  ...service,
  image: `https://picsum.photos/seed/enlace-service-${i + 1}/220/220`,
  position: servicePositions[i % servicePositions.length],
}))

const clientNames = [
  'Admin Morales',
  'Ana y José',
  'Azulik',
  'Better Together Homes',
  'Casa Malca',
  'Conteiner',
  'Delek Tulum',
  'Evan Luthra',
  'Figmints',
  'Food & Wine',
  'Forbes Life',
  'Forbes México',
  'Gitano',
  'Grupo Urbex',
  'Holistika',
  'IMMO Investments',
  'Influence Energy',
  'Kaira Surf Lodge',
  'Like Group',
  'Lucila Barattini',
  'Melania Cisneros',
  'Monada',
  'Papaya Playa Project',
  'Parvada',
  'Robb Report',
  'Samana Group',
  'Selvazama',
  'The Freedom Rebel',
  'The Visionist',
  'Tulum Crypto Fest',
  'Zamna Group',
  'Zorba Beach Homes',
]

const teamMembers = [
  { name: 'Influence Energy', role: 'Influencer Marketing' },
  { name: 'Perfo Studio', role: 'Experiences & Activations' },
  { name: 'Minimalist', role: 'Performance Marketing' },
  { name: 'D17 Studio', role: 'Creative Studio' },
].map((member, i) => ({
  ...member,
  image: `https://picsum.photos/seed/enlace-team-${i + 1}/500/724`,
}))

const staticImage = 'https://picsum.photos/seed/enlace-studio-static/806/816'
const rotatingImages = [
  'https://picsum.photos/seed/enlace-studio-rotate-1/806/816',
  'https://picsum.photos/seed/enlace-studio-rotate-2/806/816',
  'https://picsum.photos/seed/enlace-studio-rotate-3/806/816',
  'https://picsum.photos/seed/enlace-studio-rotate-4/806/816',
  'https://picsum.photos/seed/enlace-studio-rotate-5/806/816',
]

const methodologyCopy = `We analyze the context, define the direction, design the system and
build the execution. Strategy and design work as one process, so a brand
makes sense before it looks good.`

const teamCopy = `We work with a network of partner agencies. Each project brings in the
specialists it needs, from influencer marketing to live experiences.`

const aboutUsCopy = `We met working together on international projects across Europe, and
the connection was immediate. We also saw how the work was done: rushed,
with little room for people or process. So we started [ enlace ] to create
from a better place: time to understand, clear processes, wellbeing, and
ideas co-created with our clients and partners.`

function useInView(threshold = 0.25) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, visible]
}

function ServicesSection({ items }) {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <section className="studio-services">
      <div className="studio-services-text">
        <span className="studio-services-eyebrow">Services</span>
        <h2 className="studio-services-heading" onMouseLeave={() => setActiveIndex(null)}>
          {items.map((service, i) => (
            <span
              key={service.name}
              className={i === activeIndex ? 'is-active' : ''}
              onMouseEnter={() => setActiveIndex(i)}
            >
              {service.name}
            </span>
          ))}
        </h2>
      </div>

      <div className="studio-services-preview">
        {items.map((service, i) => (
          <div
            key={service.name}
            className={`studio-services-preview-item${i === activeIndex ? ' is-visible' : ''}`}
            style={{
              top: service.position.top,
              left: service.position.left,
              transform: `translate(-${service.position.left}, -${service.position.top})`,
            }}
          >
            <div className="studio-services-preview-image">
              <img src={service.image} alt={service.name} loading="lazy" />
            </div>
            <p className="studio-services-preview-copy">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function ClientsIntro() {
  const [ref, visible] = useInView(0.3)

  return (
    <section className="studio-clients-intro" ref={ref}>
      <span className="studio-clients-eyebrow">Brands we've worked with</span>
      <p className="studio-clients-copy">
        {clientNames.map((name, i) => (
          <span
            key={name}
            className={`client-name${visible ? ' is-visible' : ''}`}
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            {name}
            {i < clientNames.length - 1 ? ', ' : ''}
          </span>
        ))}
      </p>
    </section>
  )
}

function TeamSection() {
  return (
    <section className="studio-team">
      <span className="studio-team-eyebrow">Partner agencies</span>
      <div className="studio-team-grid">
        {teamMembers.map((member) => (
          <div className="studio-team-card" key={member.name}>
            <div className="studio-team-card-image">
              <img src={member.image} alt={member.name} loading="lazy" />
            </div>
            <div className="studio-team-card-caption">
              <p>{member.name}</p>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="studio-team-copy">{teamCopy}</p>
    </section>
  )
}

function ImageCaption({ caption }) {
  if (!caption) return null
  return (
    <div className="studio-team-card-caption">
      <p>{caption.name}</p>
      <p>{caption.role}</p>
    </div>
  )
}

function CultureSection({ title = 'Culture', captions, copy }) {
  return (
    <>
      <section className="studio-culture">
        <span className="studio-culture-eyebrow">{title}</span>
        {copy && <p className="studio-culture-copy">{copy}</p>}
      </section>

      <section className="studio-images">
        <div className="studio-image-card">
          <div className="studio-image studio-image--static">
            <img src={staticImage} alt="Estudio Enlace" />
          </div>
          <ImageCaption caption={captions?.[0]} />
        </div>
        <div className="studio-image-card">
          <div className="studio-image studio-image--rotating">
            <RotatingImage images={rotatingImages} alt="Proceso de trabajo" interval={3500} />
          </div>
          <ImageCaption caption={captions?.[1]} />
        </div>
      </section>
    </>
  )
}

function Studio() {
  return (
    <>
      <SiteNav />

      <section className="studio-intro">
        <p className="studio-copy">{methodologyCopy}</p>
      </section>

      <ServicesSection items={services} />

      <section className="studio-tagline">
        <h2 className="studio-tagline-ideas">
          <span>Clarity</span>
          <span>organizes.</span>
        </h2>
        <h2 className="studio-tagline-form">Structure activates.</h2>
      </section>

      <CultureSection
        title="About us"
        captions={[
          { name: 'Florencia Ceresa', role: 'Co founder & Designer' },
          { name: 'Nicolas Deges', role: 'Co founder & Strategy' },
        ]}
        copy={aboutUsCopy}
      />

      <ClientsIntro />

      <TeamSection />

      <CultureSection />

      <Footer />
    </>
  )
}

export default Studio
