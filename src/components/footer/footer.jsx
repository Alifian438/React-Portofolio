import React from 'react'
import "./footer.css"
import {BsInstagram} from "react-icons/bs"
import {BsFacebook} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {BsYoutube} from "react-icons/bs"
import {FaSteam} from "react-icons/fa"
import {BsSpotify} from "react-icons/bs"
import {FaTiktok} from "react-icons/fa"

export const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Alifian</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/muhammad.alifian0/"><BsFacebook/></a>
        <a href="https://www.instagram.com/m.alifian/"><BsInstagram/></a>
        <a href="https://www.linkedin.com/in/muhammad-rizky-alifian-sarodi-a99619245/"><BsLinkedin/></a>
        <a href="https://github.com/Alifian438"><BsGithub/></a>
        {/* <a href="https://www.youtube.com/channel/UCtWDNqh3Th4T4Jskto6dlJQ"><BsYoutube/></a> */}
        <a href="https://steamcommunity.com/id/alifian438/"><FaSteam/></a>
        <a href="https://open.spotify.com/user/lzzd908jhd1gp826hcrngb3va"><BsSpotify/></a>
        <a href="https://www.tiktok.com/@m.alifian?lang=en"><FaTiktok/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Alifian. All rights reserved.</small>
      </div>
    </footer>
  )
}
export default footer
