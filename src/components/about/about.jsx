import React from 'react'
import "./about.css"
import ME from '../../assets/me-about.jpg'
import {FaPhotoVideo} from 'react-icons/fa'
import {MdDesignServices} from 'react-icons/md'
import {SiArduino} from 'react-icons/si'

export const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            {/* <article className='about__card'>
              <FaPhotoVideo className='about__item'/>
              <h5>Editing</h5>
              <small>Photo and Video</small>
            </article> 

            <article className='about__card'>
              <MdDesignServices className='about__item'/>
              <h5>Web Developer</h5>
              <small>Frontend and Backend</small>
            </article> 

            <article className='about__card'>
              <SiArduino className='about__item'/>
              <h5>Microkontroller</h5>
              <small>3+ complete project</small>
            </article>  */}
 
          </div>
          <p>
          Saya fresh graduate dari Politeknik Negeri Jember, Jurusan Teknologi Informasi, Program Studi D3 Teknik Komputer dan mendapatkan IPK 3.80, saya merupakan orang yang bertanggung jawab, displin, suka belajar hal baru tentang teknologi. Saya berpengalaman pada bidang programming pada website dan microkontroller, dan juga berpengalaman pada bidang editing photo dan viddeo
          </p>
          <a href="#contact" className='btn btn-primary'>Lets Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about