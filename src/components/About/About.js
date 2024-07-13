import React from 'react'
import toulon from '../../assets/Imgs/toulon.jpg'

import './About.css'

const About = ({id}) => {
  return (
    <div id={id} className='About'>
      <div className='description'>
        <p >Rénovation Rayes est une société avec une equipe trés qualifier situé à Toulon.
        Nous avons un large domaine d'activité, on se charge de tous ce qui est rénovation, peinture, plaqueau, carlage,electricité et plomberie.</p>
        <p>La satisfaction du client avec des prix trés abordable est notre objectif !</p>
      </div>
        <img className='MapImg' src={toulon} alt='MAP TOULON'/>
    </div>
  )
}

export default About
