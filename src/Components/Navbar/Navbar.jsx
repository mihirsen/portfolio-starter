import React from 'react';
import './Navbar.css';
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
     
    <div className='n-wrapper'>
        <div className="n-left">
            <div className="name"></div>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listSttyleType: 'none'}} >
                  <Link spy={true} to='Navbar' smooth={true}>
                    <li>Home</li>
                    </Link>
                    <Link spy={true} to='Services' smooth={true} >
                    <li>Services</li>
                    </Link>
                    <Link spy={true} to='Experiences' smooth={true} >
                    <li>Experiences</li></Link>
                    <Link spy={true} to='Portfolio' smooth={true} >
                    <li>Portfolio</li></Link>
                    <Link spy={true} to='Testimonials' smooth={true}>
                    <li>Testimonials</li></Link>
                </ul>
            </div>
            <Link spy={true} to='Contact' smooth={true}>
            <button className="button n-button">
              Contact
            </button></Link>
        </div>

    </div>
    
  )
}

export default Navbar