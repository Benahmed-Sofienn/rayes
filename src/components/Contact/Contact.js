import React from 'react'
import './Contact.css'
import Email from '../Email/Email'

const Contact = ({id}) => {
  return (
    <div id={id} className='contact'>
        <h2>Appelez nous au <span className='num'>07 80 53 99 47</span> !! </h2>
        <h3>ou contactez nous via email avec les details de vos travaux a faire pour recevoir un devis</h3>
        <Email/>      
      
    </div>
  )
}

export default Contact
