import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import SiteNav from '../components/SiteNav'
import Footer from '../components/Footer'
import RotatingImage from '../components/RotatingImage'
import './Studio.css'

const services = [
  {
    name: 'Strategy',
    description: 'Clarity before design. We define positioning, audience and the path to launch.',
  },
  {
    name: 'Branding',
    description:
      'A visual and verbal identity built on one clear idea, coherent at every touchpoint.',
  },
  {
    name: 'Naming',
    description: 'The right name isn’t imposed. We find it in what the brand already is.',
  },
  {
    name: 'Packaging',
    description:
      'Design that turns a product into something you want to hold, ready to print and stand out.',
  },
  {
    name: 'Web design',
    description:
      'Websites and apps built to the right scale, from self-managed sites to custom platforms.',
  },
  {
    name: 'Social media',
    description:
      'A clear system for what to say, where and how. As a ready-to-use kit or monthly',
  },
].map((service, i) => ({
  ...service,
  image: `https://picsum.photos/seed/enlace-service-${i + 1}/220/276`,
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
  const [tops, setTops] = useState([])
  const headingRef = useRef(null)
  const previewRef = useRef(null)
  const itemRefs = useRef([])

  useLayoutEffect(() => {
    const place = () => {
      const heading = headingRef.current
      const preview = previewRef.current
      if (!heading || !preview || preview.offsetParent === null) return

      const previewBox = preview.getBoundingClientRect()
      const padding = parseFloat(getComputedStyle(preview.parentElement).paddingTop)
      const bleed = Math.max(padding - 16, 0)

      // Every preview shares the spot of the first service (Strategy).
      const line = heading.children[0].getBoundingClientRect()
      const lineCenter = line.top + line.height / 2 - previewBox.top
      const firstImageHeight = itemRefs.current[0].firstElementChild.offsetHeight
      const lowest = Math.min(
        ...itemRefs.current.map((item) => previewBox.height + bleed - item.offsetHeight),
      )
      const top = Math.min(Math.max(lineCenter - firstImageHeight / 2, -bleed), lowest)

      setTops(items.map(() => top))
    }

    place()
    window.addEventListener('resize', place)
    return () => window.removeEventListener('resize', place)
  }, [items])

  return (
    <section className="studio-services">
      <div className="studio-services-text">
        <span className="studio-services-eyebrow">Services</span>
        <h2
          className="studio-services-heading"
          ref={headingRef}
          onMouseLeave={() => setActiveIndex(null)}
        >
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

      <div className="studio-services-preview" ref={previewRef}>
        {items.map((service, i) => (
          <div
            key={service.name}
            ref={(el) => {
              itemRefs.current[i] = el
            }}
            className={`studio-services-preview-item${i === activeIndex ? ' is-visible' : ''}`}
            style={{ top: tops[i] ?? 0 }}
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

function CultureSection({
  title = 'Culture',
  captions,
  copy,
  stacked = false,
  interval = 3500,
  tone,
}) {
  const toneClass = tone ? ` studio-tone--${tone}` : ''
  return (
    <>
      <section className={`studio-culture${toneClass}`}>
        <span className="studio-culture-eyebrow">{title}</span>
        {copy && <p className="studio-culture-copy">{copy}</p>}
      </section>

      <section className={`studio-images${stacked ? ' studio-images--stacked' : ''}${toneClass}`}>
        <div className="studio-image-card">
          <div className="studio-image studio-image--static">
            <img src={staticImage} alt="Estudio Enlace" />
          </div>
          <ImageCaption caption={captions?.[0]} />
        </div>
        <div className="studio-image-card">
          <div className="studio-image studio-image--rotating">
            <RotatingImage
              images={rotatingImages}
              alt="Proceso de trabajo"
              interval={interval}
              className={interval < 1000 ? 'rotating-image--cut' : ''}
            />
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

      <CultureSection
        title="About us"
        captions={[
          { name: 'Florencia Ceresa', role: 'Co founder & Designer' },
          { name: 'Nicolas Deges', role: 'Co founder & Strategy' },
        ]}
        copy={aboutUsCopy}
        stacked
        tone="blue"
      />

      <ClientsIntro />

      <TeamSection />

      <CultureSection interval={500} />

      <Footer />
    </>
  )
}

export default Studio
