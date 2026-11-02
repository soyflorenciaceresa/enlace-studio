import kairaCover from '../assets/work/kaira-cover.jpg'
import lucilaBarattiniHeroVideo from '../assets/work/lucila-barattini-hero.mp4'
import lucilaBarattiniConcept from '../assets/work/lucila-barattini-concept.webp'
import lucilaBarattiniChallenge from '../assets/work/lucila-barattini-challenge.webp'
import grupoUrbexCover from '../assets/work/grupo-urbex-cover.jpg'
import grupoUrbexHero from '../assets/work/grupo-urbex-hero.webp'
import grupoUrbexChallenge from '../assets/work/grupo-urbex-challenge.webp'
import grupoUrbexTone from '../assets/work/grupo-urbex-tone.webp'
import grupoUrbexLogoSystem from '../assets/work/grupo-urbex-logo-system.webp'
import grupoUrbexColor from '../assets/work/grupo-urbex-color.webp'
import grupoUrbexPhotography from '../assets/work/grupo-urbex-photography.webp'
import grupoUrbexResult from '../assets/work/grupo-urbex-result.webp'
import grupoUrbexQuote from '../assets/work/grupo-urbex-quote.webp'
import grupoUrbexLogo from '../assets/work/grupo-urbex-logo.webp'
import betterTogetherCover from '../assets/work/better-together-cover.jpg'
import lucilaBarattiniCover from '../assets/work/lucila-barattini-cover.jpg'
import influenceEnergyCover from '../assets/work/influence-energy-cover.jpg'
import conteinerCover from '../assets/work/conteiner-cover.jpg'
import conteinerHero from '../assets/work/conteiner-hero.webp'
import conteinerChallenge from '../assets/work/conteiner-challenge.webp'
import conteinerConcept from '../assets/work/conteiner-concept.webp'
import conteinerTone from '../assets/work/conteiner-tone.webp'
import conteinerLogo from '../assets/work/conteiner-logo.webp'
import conteinerColor from '../assets/work/conteiner-color.webp'
import conteinerTypography from '../assets/work/conteiner-typography.webp'
import conteinerPhotostyle from '../assets/work/conteiner-photostyle.webp'
import conteinerResult from '../assets/work/conteiner-result.webp'
import conteinerQuote from '../assets/work/conteiner-quote.webp'
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
import kairaHero from '../assets/work/kaira-hero.webp'
import kairaChallenge from '../assets/work/kaira-challenge.webp'
import kairaConcept from '../assets/work/kaira-concept.webp'
import kairaLogo from '../assets/work/kaira-logo.jpg'
import kairaCapStickers from '../assets/work/kaira-cap-stickers.jpg'
import kairaColor from '../assets/work/kaira-color.webp'
import kairaIllustration from '../assets/work/kaira-illustration.jpg'
import kairaResult from '../assets/work/kaira-result.jpg'
import kairaQuote from '../assets/work/kaira-quote.webp'
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
      heroImage: kairaHero,
      excerpt:
        "A surf lodge in the Mentawai Islands, built with a clear identity from day one. We defined what it is, who it's for and how it looks before the first guest arrives.",
      category: 'Concept & Brand Identity',
      location: 'Mentawai, Indonesia',
      year: '2026',
      copy: 'To design Kaira, we first had to learn Mentawai: its dances, its rituals, its ancient tattoos.',
      sections: [
        {
          title: 'The challenge',
          images: [kairaChallenge],
          body: "Mentawai is one of the world's most famous surf destinations, and most lodges there compete on the same things: waves, rooms, logistics. Kaira needed more. The challenge was to understand the island's culture, its dances and traditions, and translate it into a visual and verbal system.",
        },
        {
          title: 'The concept',
          images: [kairaConcept],
          body: "We built the brand around one idea: Surf the edge. The edge of the map, the edge of your comfort zone, the edge of everything that doesn't matter. A lodge for people who travel not to escape, but to find.",
        },
        {
          title: 'Tone of Voice',
          images: [kairaCapStickers],
          body: 'Short sentences, with space between them. A voice that sounds like the island: calm, direct and honest. It invites without selling: Stay. Surf. Explore. Slow down.',
        },
        {
          title: 'The Logo',
          images: [kairaLogo],
          body: 'A bold, rounded wordmark paired with a hand-drawn symbol shaped by the island’s nature. Solid enough to hold the brand, loose enough to feel made by hand, like everything on Mentawai.',
        },
        {
          title: 'Color',
          images: [kairaColor],
          body: 'Deep ocean blue and warm sand. A palette taken from where Kaira lives: the water at dusk and the beach at noon.',
        },
        {
          title: 'Illustration',
          images: [kairaIllustration],
          body: 'A set of hand-drawn icons, from waves and palms to a figure in motion inspired by the turuk laggai, the traditional Mentawai dance. They carry the culture into every touchpoint without turning it into decoration.',
        },
        {
          title: 'The result',
          images: [kairaResult],
          body: 'A brand ready to grow: final brandbook in Spanish and English, an institutional presentation and an Instagram content kit.',
        },
        {
          title: 'Client quote',
          images: [kairaQuote],
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
    detail: {
      heroImage: grupoUrbexHero,
      excerpt:
        'A real estate investment group that opens the market from the inside. We built its brand from the ground up: concept, voice, visual system and the tools to communicate from day one.',
      category: 'Concept & Brand Identity',
      location: 'Buenos Aires, Argentina',
      year: '2026',
      copy: 'We don’t sell square meters. We open doors.',
      sections: [
        {
          title: 'The challenge',
          images: [grupoUrbexChallenge],
          body: 'In Argentina, brick has always been the refuge: the safest way to protect capital in an unpredictable country. But the refuge became a trap. Developers build the same thing, agencies sell the same thing, and investors get stuck with options designed to sell square meters, not to build businesses. Urbex operates differently. Its brand had to make that difference visible.',
        },
        {
          title: 'The concept',
          images: [grupoUrbexLogo],
          body: 'We built the brand on a single split: the outside and the inside. The outside is the market everyone sees. The inside is where the real deals happen: flipping, developments, collective funds, buy and rent. Urbex is the door between both. The positioning became Business from the inside, with a line that sets the ambition: Preserving capital is the floor. Building businesses is the ceiling.',
        },
        {
          title: 'Tone of Voice',
          images: [grupoUrbexTone],
          body: 'Clear, direct and close, like a partner who knows the market from within, not a salesperson. It explains before it persuades and never overpromises. Its archetype is The Strategist: it doesn’t follow the market, it reads it. The tagline works as a path: Enter. Invest. Build.',
        },
        {
          title: 'The Logo',
          images: [grupoUrbexLogoSystem],
          body: 'We explored two creative directions, The Structure and The Signal. The chosen identity evolved into a U isotype shaped like a building: the brand’s initial and its territory in a single mark.',
        },
        {
          title: 'Color & Typography',
          images: [grupoUrbexColor],
          body: 'In a traditional market, we kept the visual system professional and restrained, and let color do the breaking. Instead of the blues and greys that dominate real estate, we went to the material itself: brick. Terracotta, a deep burgundy, gives the brand weight and roots. Fire, a bright orange, brings action and decision. Warm whites balance the system, and Neue Montreal holds it all with precision. Serious in form, unexpected in color.',
        },
        {
          title: 'Photography',
          images: [grupoUrbexPhotography],
          body: 'Solidity, not luxury. Natural light on concrete and glass, buildings under construction, raw materials and hands at work, with people shown in real moments: a meeting, a site visit, a conversation.',
        },
        {
          title: 'The result',
          images: [grupoUrbexResult],
          body: 'A brand ready to communicate from day one: a complete brandbook with a manifesto, key messages and narrative pillars, a mobile-first institutional deck built for WhatsApp, 9 post and 9 story templates, and an Instagram playbook so the team can run it on their own.',
        },
        {
          title: 'Client quote',
          images: [grupoUrbexQuote],
          body: '“They did an amazing job. Congratulations.”',
          attribution: 'Nicolás Silveyra, Co-Founder',
        },
      ],
      team: [
        {
          title: 'Team, Grupo Urbex',
          members: [{ role: 'Co-Founder', name: 'Nicolás Silveyra' }],
        },
        {
          title: 'Team, [ enlace ]',
          members: [
            { role: 'Narrative Craft & Strategy', name: 'Nico Deges' },
            { role: 'Brand Design', name: 'Florencia Ceresa' },
          ],
        },
      ],
    },
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
    detail: {
      heroVideo: lucilaBarattiniHeroVideo,
      excerpt:
        'A creative director and brand image consultant born in Buenos Aires and based in Madrid. We designed and built a website where her work leads and her eye does the talking.',
      category: 'Web Design & Copywriting',
      location: 'Madrid, Spain',
      year: '2026',
      copy: 'For someone who makes everything look like a film, the website had to feel like one.',
      sections: [
        {
          title: 'The challenge',
          images: [lucilaBarattiniChallenge],
          body: 'Lucila works across fashion, jewelry, gastronomy, hospitality and events, from creative direction to table styling. Her work was strong, but scattered. She needed one place that could hold all of it, speak to brands in any market and let her keep it updated on her own.',
        },
        {
          title: 'The concept',
          images: [lucilaBarattiniConcept],
          body: 'A portfolio that behaves like an editorial. Images come first, text steps back, and every project is presented the way she would present it in person: curated, with space and intention.',
        },
        {
          title: 'Design & Structure',
          body: 'A clean, minimal, high-end design where photography is the protagonist. The work is organized by industry, so a hotel, a jewelry brand or a restaurant can find what speaks to them in seconds, with a clear path from portfolio to services to contact.',
        },
        {
          title: 'Copywriting',
          body: 'We wrote every word on the site: her bio, her services and the way each project is introduced. A voice as curated as her work, clear enough for any brand to understand what she does and why to call her.',
        },
        {
          title: 'Self-Managed System',
          body: 'Designed and developed so Lucila can add projects, update services and change images herself, without depending on anyone. The site grows at the same pace her work does.',
        },
        {
          title: 'The result',
          body: 'A website that works as her main business tool: a portfolio to show, a presentation to send and a closing piece for new clients across Spain, Europe and Latin America.',
        },
      ],
      team: [
        {
          title: 'Team, Lucila Barattini',
          members: [{ role: 'Creative Director & Brand Image Consultant', name: 'Lucila Barattini' }],
        },
        {
          title: 'Team, [ enlace ]',
          members: [
            { role: 'Narrative Craft & Strategy', name: 'Nico Deges' },
            { role: 'Brand Design & Development', name: 'Florencia Ceresa' },
          ],
        },
      ],
    },
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
    detail: {
      heroImage: conteinerHero,
      excerpt:
        'A furniture and ceramics brand handmade by a family in northern Argentina. The brand had already changed. We helped it find the identity to match.',
      category: 'Brand Strategy & Identity',
      location: 'Salta · Buenos Aires, Argentina',
      year: '2026',
      copy: 'Salta doesn’t decorate the brand. It makes it.',
      sections: [
        {
          title: 'The challenge',
          images: [conteinerChallenge],
          body: 'Conteiner started as an imported clothing brand. Today it makes furniture and ceramics: the father a blacksmith, the mother a ceramist, the daughter selling from Buenos Aires what they build in Salta. The product and the audience had changed. The brand hadn’t. It didn’t need to be invented. It needed to be revealed.',
        },
        {
          title: 'The concept',
          images: [conteinerConcept],
          body: 'We called the new chapter Roots to Room and built it around one idea: The Trace of the North. Every piece carries a gesture, from the precise cut of the steel tube to the freehand stroke on ceramic. Three hands, three crafts, one trace. The positioning: design with roots.',
        },
        {
          title: 'Tone of Voice',
          images: [conteinerTone],
          body: 'Warm, honest and free. It speaks like a friend, not a brand, and tells how each piece is made without dressing it up. Its archetype is The Host: it welcomes you into a world that was already there.',
        },
        {
          title: 'The Logo',
          images: [conteinerLogo],
          body: 'A custom logotype built from a serif typeface, reshaped and finished with a texture that brings the mark of the hand and the workshop. A bold, compact secondary mark, CNTR, adds a more direct and contemporary voice when the brand needs impact.',
        },
        {
          title: 'Color',
          images: [conteinerColor],
          body: 'The palette isn’t chosen. It’s extracted from the landscape. Clay, earth, mountains, stone and the vegetation of Salta, with small light blue accents. Nothing comes from outside the territory, so the origin is present even when it isn’t shown.',
        },
        {
          title: 'Typography & Graphic Elements',
          images: [conteinerTypography],
          body: 'Manrope in a single weight, with hierarchy built only through size and position, balances the more expressive parts of the system: stones drawn from real Salta landscapes and stickers that mark an origin, a material, a measure or a coordinate.',
        },
        {
          title: 'Photostyle',
          images: [conteinerPhotostyle],
          body: 'Guidelines for the brand’s first shoot: warm interiors with natural light, color already present in the space, and freer images of Salta’s landscapes, textures and the hands behind each piece.',
        },
        {
          title: 'The result',
          images: [conteinerResult],
          body: 'A complete brandbook with strategy, visual and verbal identity and applications, a starter kit of 9 post and 9 story templates, and photostyle guidelines to take the brand from the page to its first shoot.',
        },
        {
          title: 'Client quote',
          images: [conteinerQuote],
          body: '“I’m so grateful for the incredible work we did together. I have nothing to add or remove, and that tells me you understood exactly what I wanted to say.”',
          attribution: 'Lumena Fernández Mirabelli, Founder',
        },
      ],
      team: [
        {
          title: 'Team, Conteiner',
          members: [{ role: 'Founder', name: 'Lumena Fernández Mirabelli' }],
        },
        {
          title: 'Team, [ enlace ]',
          members: [{ role: 'Narrative Craft & Strategy', name: 'Nico Deges' }],
        },
        {
          title: 'In collaboration with',
          members: [
            { role: 'Brand Identity', name: 'D17 Studio' },
            { role: 'Brand Identity', name: 'Delfina Ferrero' },
          ],
        },
      ],
    },
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
