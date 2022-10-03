import React from 'react'
import "./portofolio.css"
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg' 
import IMG6 from '../../assets/portfolio6.jpg'

//jangan gunakan gambar pada product

const data = [
  {
    id: 1,
    image: IMG1,
    tittle: 'Website GMDP (kediri)',
    link:'https://gmdpkediri.com/',
    isi: 'GMDP Kediri merupakan sebauh perusahaan yang bergerak di bidang ISP (Internet Service Provider) atau disebut juga dengan Jasa Penyedia Layanan Internet.',
  },
  {
    id: 2,
    image: IMG2,
    tittle: 'Website PSGFC Kediri',
    link: 'https://psgfc.id/',
    isi: 'Website PSGF Kediri ini adalah sebua website untuk memanajemen informasi dan memanajemen anggota, dan membahas topik sekilas Sepak Bola yang ada di daerah Kediri.',
  },
  {
    id: 3,
    image: IMG3,
    tittle: 'Website Para Pasir Indonesia',
    link: 'https://volcanicsandindonesia.com/',
    isi: 'Website Para Pasir Indonesia adalah sebuah website yang menjual berbagai macam pasir volcanic yang berada di Indonesia.',
  },
  {
    id: 4,
    image: IMG4,
    tittle: 'Website Kurniagroup',
    link: 'https://kurniagroup.psgfc.id/',
    isi: 'Website Kurniagroup adalah sebuah website personal yang di dalamnya berisi informasi mengenai perosnal dan dimanfaatkan untuk jasa pemasangan Wifi maupun CCTV dll.',
  },
  {
    id: 5,
    image: IMG5,
    tittle: 'Website Aim Nusantara',
    link: 'https://aimnusantara.com/product/',
    isi: 'Website Aim Nusantara adalah website yang menjual berbagai macam rempah-rempah yang ada di indonesia contohnya cocoa, coffe bean, Raw Cashew Nut, Coconut, briquette charcoal dan lain-lain.',
  },
  {
    id: 6,
    image: IMG6,
    tittle: 'Website Meet Doctor',
    link: 'https://github.com/Alifian438/BWA-laravel',
    isi: 'Website Meet Doctor adalah project yang saya buat saat mengikuti pelatihan bootcamp pada BWA(BuildWith Angga) website ini di buat untuk mempermudah pasien bertemu dengan doctor.',
  },
]

export const portofolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, tittle, link, isi}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={tittle} />
                </div>
                <h3>{tittle}</h3>
                <p>{isi}</p>
                <div className="portfolio__item-cta">
                <a href={link} className='btn btn-primary' target='_blank'>Link Website</a>
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