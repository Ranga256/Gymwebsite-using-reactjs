import React, { useState } from 'react'
import './Header.css'
import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';
import {Link} from 'react-scroll'
const Header = () => {
  const mobile = window.innerWidth<=768 ? true : false;
  const [menuOpened,setMenuOpened] = useState(false)
  return (
    <div className="header">
        <img src={Logo} alt='' className='logo'/>
        {(menuOpened=== false && mobile===true)? (
        <div style={{ backgroundColor: 'var(--appColor)', padding: '0.56rem', borderRadius: '5px' }}
        onClick={()=> setMenuOpened(true)}><img src={Bars} alt="" style={{ width: '1.5rem', height: '1.5rem' }} /></div>
        ):<ul className='header-menu'>
        <li><Link to='hero' spy={true} smooth={true} onClick={()=> setMenuOpened(false)}>Home</Link></li>
        <li><Link to='programs' spy={true} smooth={true} onClick={()=> setMenuOpened(false)}>Programs</Link></li>
        <li><Link to='reasons' spy={true} smooth={true} onClick={()=> setMenuOpened(false)}>Why us</Link></li>
        <li><Link to='gym_plans' spy={true} smooth={true} onClick={()=> setMenuOpened(false)}>plans</Link></li>
        <li><Link to='Testimonials' spy={true} smooth={true} onClick={()=> setMenuOpened(false)}>Testimonials</Link></li>
    </ul>}
        
    </div>
  )
}

export default Header