import { Link } from 'react-router-dom'
import SiteNav from '../components/SiteNav'
import Footer from '../components/Footer'
import { projects } from '../data/projects'
import './Work.css'

function Work() {
  return (
    <>
      <SiteNav />

      <section className="work">
        <p className="work-copy">
          Every project starts with an idea looking for its form. These are
          some of the brands we've helped find it, from the first concept to
          the last touchpoint.
        </p>

        <span className="work-eyebrow">Latest projects</span>

        <div className="work-grid">
          {projects.map((project) => (
            <Link
              to={`/work/${project.slug}`}
              className="work-card"
              key={project.name}
              style={{ gridRow: project.row, gridColumn: project.col }}
            >
              <div className="work-card-image">
                <img src={project.image} alt={project.name} loading="lazy" />
              </div>
              <div className="work-card-caption">
                <p>{project.name}</p>
                <p>{project.category}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Work
