import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/muhammad-rizky-alifian-sarodi-a99619245/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Alifian438" target="_blank"><FaGithub/></a>
        <a href="https://www.instagram.com/m.alifian/" target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocial