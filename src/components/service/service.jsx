import React from 'react'
import "./service.css"
import {BsCheck} from 'react-icons/bs'

export const service = () => {
  return (
    <section id='service'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {/*UI UX*/}
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* end UI UX */}

        {/*web development*/}
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* end web development */}

        {/*content creator*/}
        <article className='service'>
          <div className="service__head">
            <h3>Content Creator</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* end cotent creator */}
      </div>
    </section>
  )
}

export default service