import monadaImage from '../assets/work/monada.jpg'
import monadaHero from '../assets/work/monada-hero.jpg'
import monadaChallenge from '../assets/work/monada-challenge.jpg'
import monadaConcept1 from '../assets/work/monada-concept-1.jpg'
import monadaConcept2 from '../assets/work/monada-concept-2.jpg'
import monadaPhotography from '../assets/work/monada-photography.jpg'
import monadaQuote from '../assets/work/monada-quote.webp'
import monadaResult1 from '../assets/work/monada-result-1.jpg'
import monadaResult2 from '../assets/work/monada-result-2.jpg'
import monadaResult from '../assets/work/monada-result.png'
import monadaColor from '../assets/work/monada-color.png'
import monadaLogo from '../assets/work/monada-logo.png'
import monadaTone from '../assets/work/monada-tone.jpg'

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export const projects = [
  { name: 'Kaira Surf Camp', category: 'Branding · Identidad visual', row: 1, col: 1 },
  { name: 'Grupo Urbex', category: 'Branding · Diseño digital', row: 1, col: 2 },
  {
    name: 'Monada',
    category: 'Branding · Packaging',
    row: 1,
    col: 4,
    image: monadaImage,
    detail: {
      heroImage: monadaHero,
      copy: 'The essential can also be extraordinary',
      team: [
        {
          title: 'Team, Monada',
          members: [{ role: 'Co-Founder', name: 'Lucas Deges' }],
        },
        {
          title: 'Team, [ enlace ]',
          members: [
            { role: 'Narrative Craft & Strategy', name: 'Nico Deges' },
            { role: 'Brand Identity', name: 'Florencia Ceresa' },
          ],
        },
      ],
      sections: [
        {
          title: 'The challenge',
          images: [monadaChallenge],
          body: 'In a category dominated by sodas, artificial syrups and loud, mass-market color, there was no real option: fresh citrus, simple and ready to share. Monada had the product idea. It needed a brand that could stand out on the table by doing the opposite of everyone else.',
        },
        {
          title: 'The concept',
          images: [monadaConcept1, monadaConcept2],
          body: 'Foundational branding, built from the ground up: brand story, values, personality, ideal customer and a competitive analysis that carved out its space, minimal and aspirational. The name comes from limonada, but also from monada, something lovely that surprises you with how simple it is. The tagline says it all: Freshly squeezed, without the squeezing.',
        },
        {
          title: 'Tone of Voice',
          images: [monadaTone],
          body: 'Fresh and direct. It speaks with the same simplicity it takes to squeeze a lemon: clear, close and without artifice. Its archetype is The Creator, turning the everyday into something new.',
        },
        {
          title: 'The Logo',
          images: [monadaLogo],
          body: "A serif wordmark in deep blue, refined and warm, that gives a simple drink the presence of an editorial brand. Its isotype, m., condenses it for small formats, and the dot isn't a dot: it's a lemon.",
        },
        {
          title: 'Color',
          images: [monadaColor],
          body: "Six tones taken from the drink's own world: lemon, water, earth, nature, a deep quality blue and a clean base that lets the rest shine.",
        },
        {
          title: 'Packaging',
          images: [monadaPhotography],
          body: 'A carry box with a handle and a window that shows the product, designed to go from the fridge to the table. A geometric pattern wraps each flavor, changing color for lemon, grapefruit and orange, so the range reads as one family on the shelf.',
        },
        {
          title: 'Photography',
          images: [monadaResult1, monadaResult2],
          body: 'Relaxed, sunlit scenes: beaches, barbecues, picnics and people enjoying the moment without posing. The box always appears naturally, in a hand, a basket or a bike.',
        },
        {
          title: 'The result',
          images: [monadaResult],
          body: 'A product brand with a clear point of view: brand manual, visual system, packaging for three flavors, photography guidelines and applications from social media and web to street posters and point of sale.',
        },
        {
          title: 'Client quote',
          images: [monadaQuote],
          body: '“Thank you both for all the work you did. Everyone is going crazy about the brand. Congratulations.”',
          attribution: 'Lucas Deges, Co-Founder',
        },
      ],
      excerpt:
        "A citrus drink brand built from scratch to answer a simple problem: you couldn't find a genuinely fresh lemonade anywhere. We created everything, from the concept to the box it comes in.",
      category: 'Brand Identity & Packaging',
      location: 'Buenos Aires, Argentina',
      year: '2025',
    },
  },
  { name: 'Better Together', category: 'Branding · Identidad visual', row: 2, col: 2 },
  { name: 'Lucila Barattini', category: 'Identidad visual · Web design', row: 2, col: 3 },
  { name: 'Influence Energy', category: 'Identidad visual · Packaging', row: 3, col: 1 },
  { name: 'BT Homes', category: 'Diseño digital', row: 3, col: 3 },
  { name: 'Enlace Interno', category: 'Branding · Identidad visual', row: 3, col: 4 },
].map((project) => ({
  ...project,
  slug: slugify(project.name),
  image:
    project.image ?? `https://picsum.photos/seed/enlace-work-${slugify(project.name)}/500/724`,
}))

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug)
}
