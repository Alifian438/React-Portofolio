import React from 'react'
import "./portofolio.css"
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png' 
import IMG6 from '../../assets/portfolio6.jpg'

//jangan gunakan gambar pada product

const data = [
  {
    id: 1,
    image: IMG1,
    tittle: 'lorem ipsun',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 2,
    image: IMG2,
    tittle: 'lorem ipsun',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 3,
    image: IMG3,
    tittle: 'lorem ipsun',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 4,
    image: IMG4,
    tittle: 'lorem ipsun',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 5,
    image: IMG5,
    tittle: 'lorem ipsun',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 6,
    image: IMG6,
    tittle: 'lorem ipsun',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
]

export const portofolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, tittle, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={tittle} />
                </div>
                <h3>{tittle}</h3>
                <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default portofolio