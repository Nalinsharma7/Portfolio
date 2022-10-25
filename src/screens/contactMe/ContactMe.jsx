import React from 'react'
import './ContactMe.css'
import { navigationLinks } from '../../helpers/navigationLinks'

function createLinks() {
  return navigationLinks.map((e, idx) => (
    <p key={idx}><a href={e.ref}>{e.name}</a></p>
  ))
}

function ContactMe() {
  return (
    <div className="contactMe__container" id="contact">
      <div className="contactMe__data__links">
        <div>
          <p>Delhi,India</p>
          <p>Nalin Sharma</p>
          <p>nalinsharma606@gmail.com</p>
          <p><a href='https://www.linkedin.com/in/nalin-sharma/' target="_blank" rel="noreferrer">https://www.linkedin.com/in/nalin-sharma/</a></p>
        </div>
        <div>
          {createLinks()}
        </div>
      </div>
      <div style={{ textAlign:'center'}}>Copyright&copy; {new Date().getFullYear()} All rights reserved</div>
    </div>
  )
}

export default ContactMe
