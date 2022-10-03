import React from 'react'
import "./footer.css"
import {BsInstagram} from "react-icons/bs"
import {BsFacebook} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"

export const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Alifian</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="facebook.com"><BsFacebook/></a>
        <a href="instagram.com"><BsInstagram/></a>
        <a href="linkedin.com"><BsLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Alifian. All rights reserved.</small>
      </div>
    </footer>
  )
}
export default footer
