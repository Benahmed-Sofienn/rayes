import React from 'react'
import Nav from 'react-bootstrap/Container';
import './Home.css'

const Home = ({id}) => {
  return (
    <div id={id} className='home'>
      <div className='home'>
          <button className='HomeBtn' ><a href="#serv">Nos Services</a></button>
          </div>
    </div>
  )
}

export default Home
