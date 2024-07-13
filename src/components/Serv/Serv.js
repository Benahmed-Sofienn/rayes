import React from 'react'
import './Serv.css'

const Serv = ({id}) => {
  return (

      <div id={id} className='services'>
          <div className='peinture'>
            <h3>Peinture</h3>
          </div>
          <div className='raval'>
            <h3>Ravalemment de façade</h3>
          </div>
          <div className='plaque'>
            <h3>Plaque ba13</h3>
          </div>
          <div className='carlage'>
            <h3>Carlage</h3>
          </div>
          <div className='electricité'>
            <h3>Electricité</h3>
          </div>
          <div className='plomberie'>
            <h3>Plomberie</h3>
          </div>
        </div>

  )
}

export default Serv
