import { Link } from 'react-router-dom'
import SiteNav from '../components/SiteNav'
import Footer from '../components/Footer'
import { posts } from '../data/posts'
import './Blog.css'

const methodologyCopy = `Notes from the studio. What we learn from our projects, how we think
about process and what we see in the industry. Thinking out loud about
how ideas find their form, and everything that happens in between.`

function Blog() {
  return (
    <>
      <SiteNav />

      <section className="blog-intro">
        <p className="blog-copy">{methodologyCopy}</p>
      </section>

      <div className="blog-stack">
        {posts.map((post) => (
          <article className="blog-card" key={post.slug}>
            <div className="blog-card-inner">
              <div className="blog-card-text">
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`} className="blog-card-more">
                  Read more
                </Link>
              </div>
              <Link to={`/blog/${post.slug}`} className="blog-card-image">
                <img src={post.image} alt={post.title} loading="lazy" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      <Footer />
    </>
  )
}

export default Blog
