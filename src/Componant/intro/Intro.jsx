import React from 'react'
import './Intro.css'

function Intro() {
  return (
    <div id='intro' className='All-section'>
      <div className="left">
        <div className="img-container">
          <img src='images/mypic.jpg' alt='my self'/>
        </div>
      </div>
      <div className="right">
        <h4><span id='Hi'>Hi</span> There .... My name is</h4>
        <h1> Gourmat Ahmed <h5>I'm a:</h5></h1>
        <ul>
          <li>Computer science student</li>
          <li>Front-end Developer</li>
          <li>C Developer</li>
        </ul>
      </div>
    </div>
  )
}

export default Intro
