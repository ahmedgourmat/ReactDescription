import React from 'react'
import Intro from './Componant/intro/Intro'
import Grey from './Componant/sideNav/Grey'
import SideNav from './Componant/sideNav/SideNav'
import TopBar from './Componant/topbar/TopBar'
import './index.css'

function App() {
  return (
    <div className='app'>
      <Grey/>
      <TopBar/>
      <SideNav/>
      <div className="sections">
        <Intro/>
      </div>
    </div>
  )
}

export default App
