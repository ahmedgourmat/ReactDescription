import React from 'react'
import './TopBar.css'

function TopBar() {
    const changeColor=()=>{
        let nav=document.getElementsByClassName('top-bar');
        nav[0].classList.toggle('active');
        let sideNav=document.getElementsByClassName('side-nav');
        sideNav[0].classList.toggle('move');
        let grey=document.getElementsByClassName('white');
        grey[0].classList.toggle('grey');
    }

  return (
    <div className='top-bar'>
        <div className="wraper">
            <div className="left">
                    <a className='logo' href='#intro'>Osppert</a>
                    <div className='item-container'>
                      <span>Gourmat Ahmed</span>
                    </div>
                    <div className='item-container'>
                      <span>grmidou15@gmail.com</span>
                    </div>
            </div>
            <div className="right">
                <div className="hamberguer" onClick={changeColor}>
                    <span className='line1'></span>
                    <span className='line2'></span>
                    <span className='line3'></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopBar;