import kairaCover from '../assets/work/kaira-cover.jpg'
import grupoUrbexCover from '../assets/work/grupo-urbex-cover.jpg'
import betterTogetherCover from '../assets/work/better-together-cover.jpg'
import lucilaBarattiniCover from '../assets/work/lucila-barattini-cover.jpg'
import influenceEnergyCover from '../assets/work/influence-energy-cover.jpg'
import conteinerCover from '../assets/work/conteiner-cover.jpg'
import btHomesHero from '../assets/work/bt-homes-hero.webp'
import btHomesChallenge from '../assets/work/bt-homes-challenge.webp'
import btHomesConcept from '../assets/work/bt-homes-concept.jpg'
import btHomesPalette from '../assets/work/bt-homes-palette.png'
import btHomesBrochure from '../assets/work/bt-homes-brochure.webp'
import btHomesKit1 from '../assets/work/bt-homes-kit-1.png'
import btHomesKit2 from '../assets/work/bt-homes-kit-2.webp'
import btHomesPoster from '../assets/work/bt-homes-poster.webp'
import btHomesDevelopment from '../assets/work/bt-homes-development.jpg'
import btHomesSystem from '../assets/work/bt-homes-system.webp'
import btHomesQuote from '../assets/work/bt-homes-quote.webp'
import btHomesResult from '../assets/work/bt-homes-result.webp'
import btHomesCopywriting from '../assets/work/bt-homes-copywriting.webp'
import kairaConcept from '../assets/work/kaira-concept.jpg'
import kairaTone from '../assets/work/kaira-tone.webp'
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
  {
    name: 'Kaira Surf Lodge',
    category: 'Branding',
    row: 1,
    col: 1,
    image: kairaCover,
    detail: {
      excerpt:
        "A surf lodge in the Mentawai Islands, built with a clear identity from day one. We defined what it is, who it's for and how it looks before the first guest arrives.",
      category: 'Concept & Brand Identity',
      location: 'Mentawai, Indonesia',
      year: '2026',
      copy: 'To design Kaira, we first had to learn Mentawai: its dances, its rituals, its ancient tattoos.',
      sections: [
        {
          title: 'The challenge',
          body: "Mentawai is one of the world's most famous surf destinations, and most lodges there compete on the same things: waves, rooms, logistics. Kaira needed more. The challenge was to understand the island's culture, its dances and traditions, and translate it into a visual and verbal system.",
        },
        {
          title: 'The concept',
          images: [kairaConcept],
          body: "We built the brand around one idea: Surf the edge. The edge of the map, the edge of your comfort zone, the edge of everything that doesn't matter. A lodge for people who travel not to escape, but to find.",
        },
        {
          title: 'Tone of Voice',
          images: [kairaTone],
          body: 'Short sentences, with space between them. A voice that sounds like the island: calm, direct and honest. It invites without selling: Stay. Surf. Explore. Slow down.',
        },
        {
          title: 'The Logo',
          body: 'A bold, rounded wordmark paired with a hand-drawn symbol shaped by the island’s nature. Solid enough to hold the brand, loose enough to feel made by hand, like everything on Mentawai.',
        },
        {
          title: 'Color',
          body: 'Deep ocean blue and warm sand. A palette taken from where Kaira lives: the water at dusk and the beach at noon.',
        },
        {
          title: 'Illustration',
          body: 'A set of hand-drawn icons, from waves and palms to a figure in motion inspired by the turuk laggai, the traditional Mentawai dance. They carry the culture into every touchpoint without turning it into decoration.',
        },
        {
          title: 'The result',
          body: 'A brand ready to grow: final brandbook in Spanish and English, an institutional presentation and an Instagram content kit.',
        },
        {
          title: 'Client quote',
          body: '“Thank you, Nico and Flor, for your time, your minds and for helping us build this. Your professionalism and the energy you put into it, as if it were your own, tell us we’re on the right path.”',
          attribution: 'Ignacio Coppa, Co-Founder',
        },
      ],
      team: [
        {
          title: 'Team, Kaira Surf Lodge',
          members: [
            { role: 'Co-Founder', name: 'Ignacio Coppa' },
            { role: 'Co-Founder', name: 'Tomas Berro' },
          ],
        },
        {
          title: 'Team, [ enlace ]',
          members: [
            { role: 'Strategy & Narrative Craft', name: 'Nico Deges' },
            { role: 'Brand Design', name: 'Florencia Ceresa' },
          ],
        },
      ],
    },
  },
  {
    name: 'Grupo Urbex',
    category: 'Branding',
    row: 3,
    col: 1,
    image: grupoUrbexCover,
  },
  {
    name: 'Monada',
    category: 'Branding',
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
  {
    name: 'BT Homes',
    category: 'Rebranding',
    row: 2,
    col: 2,
    image: betterTogetherCover,
    detail: {
      heroImage: btHomesHero,
      excerpt:
        "A hospitality brand with an investment mindset, managing premium short-term rentals across Argentina and Mexico. We refreshed its brand and built its digital platform, from strategy to the last line of code.",
      category: 'Brand Refresh & Web Design',
      location: 'Argentina · Mexico',
      year: '2025–2026',
      copy: "We don't manage properties. We manage investments.",
      sections: [
        {
          title: 'The challenge',
          images: [btHomesChallenge],
          body: 'Since 2019, BT Homes grew to 150 properties in more than ten cities, from Tulum to Bariloche. The business matured, but the brand had grown organically along the way. It needed to speak with the same clarity to three very different audiences, guests, property owners and investors, and a website that could do more than show properties: it had to run the business.',
        },
        { stage: 'Stage 1: Brand Refresh' },
        {
          title: 'The concept',
          images: [btHomesConcept],
          body: 'We started with a brand diagnosis and kept what was working: a premium, professional spirit. Then we pushed it toward a more modern, technological and versatile expression, built around one idea: hospitality with an investment vision.',
        },
        {
          title: 'Visual Identity',
          images: [btHomesPalette],
          body: 'We kept the deep green that anchors the brand and paired it with a bright, fluorescent green: a techy accent that makes the brand feel as innovative as its operation. Together with updated typography and graphic style, the brand stays premium but speaks a more contemporary language across digital and physical touchpoints.',
        },
        {
          title: 'Communication Kit',
          images: [btHomesBrochure],
          body: 'Three decks for three audiences: an institutional presentation for partners and stakeholders, a B2B deck for property owners and a B2C deck for guests. Plus editable post and story templates, a social media playbook with content strategy and physical touchpoints for the properties.',
        },
        { stage: 'Stage 2: Web Platform' },
        {
          title: 'Strategy & Architecture',
          images: [btHomesKit1, btHomesKit2],
          body: 'Before designing a single screen, we researched, defined the site architecture and organized the content for two journeys: guests looking for a place to stay and owners looking for someone to trust with their property.',
        },
        {
          title: 'Design',
          images: [btHomesPoster],
          body: 'Full UI design and a navigable Figma prototype, translating the refreshed identity into a clear, premium digital experience. 100% responsive and bilingual, in English and Spanish.',
        },
        {
          title: 'Development & PMS Integration',
          images: [btHomesDevelopment],
          body: "We didn't just design the site. We coordinated directly with Hostify, the property management system behind BT Homes' bookings, to get everything linked and connected, and did the technical work to bring design, APIs and booking engine together in one platform. It was an integration the team had been trying to make happen for over a year.",
        },
        {
          title: 'Self-Managed System',
          images: [btHomesSystem],
          body: 'Built on Sanity, a headless CMS, with its own documentation, so the team can update properties, destinations and content on their own without touching code. Initial technical SEO, domain, hosting and testing, all the way to launch at bthomes.world.',
        },
        {
          title: 'Copywriting',
          images: [btHomesCopywriting],
          body: 'Every word on the site: service descriptions, destination pages and microcopy, written to sound premium without losing warmth.',
        },
        {
          title: 'The result',
          images: [btHomesResult],
          body: 'A brand that looks as solid as the business behind it, and a live platform at bthomes.world that works as the center of its digital ecosystem: bilingual, connected to its booking system and ready to scale into new cities.',
        },
        {
          title: 'Client quote',
          images: [btHomesQuote],
          body: '“Such professionalism, I loved it. Thank you so much for all the work, it was a pleasure. We definitely achieved the goal of renewing our identity and having resources and platforms with more strength.”',
          attribution: 'Nicolás Silveyra, Owner',
        },
      ],
      team: [
        {
          title: 'Team, BT Homes',
          members: [
            { role: 'Owner', name: 'Nicolás Silveyra' },
            { role: 'Owner', name: 'Federico Vázquez' },
          ],
        },
        {
          title: 'Team, [ enlace ]',
          members: [
            { role: 'Narrative Craft & Strategy', name: 'Nico Deges' },
            { role: 'Brand Design', name: 'Florencia Ceresa' },
            { role: 'Web Developer', name: 'Karen Mejía' },
          ],
        },
      ],
    },
  },
  {
    name: 'Lucila Barattini',
    category: 'Web design',
    row: 2,
    col: 3,
    image: lucilaBarattiniCover,
  },
  {
    name: 'Influence Energy',
    category: 'Rebranding',
    row: 1,
    col: 2,
    image: influenceEnergyCover,
  },
  {
    name: 'Conteiner',
    category: 'Branding',
    row: 3,
    col: 4,
    image: conteinerCover,
  },
].map((project) => ({
  ...project,
  slug: slugify(project.name),
  image:
    project.image ?? `https://picsum.photos/seed/enlace-work-${slugify(project.name)}/500/724`,
}))

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug)
}
