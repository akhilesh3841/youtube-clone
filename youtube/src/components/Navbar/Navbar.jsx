import React from 'react'
import './Navbar.css'

import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search from '../../assets/search.png'
import upload from '../../assets/upload.png'
import more from '../../assets/more.png'
import notification from '../../assets/notification.png'
import profile from '../../assets/jack.png'
import { Link } from 'react-router-dom'

const Navbar = ({setsidebar}) => {
  return (
    <nav className='flex-div'>
       <div className='nav-left flex-div'>
             <img className='menu-icon' onClick={()=>setsidebar(prev=>prev===false?true:false)} src={menu_icon} alt=''></img>
             <Link to="/"><img className='logo' src={logo} alt=''></img></Link>
       </div>

       <div className='nav-middle flex-div'>
          <div className='search-box flex-div'>
              <input  type='text' placeholder='Search'></input>
               <img src={search} alt=''></img>
          </div>
       </div>


       <div className='nav-right flex-div'>
           <img src={upload} alt=''></img> 
           <img src={more} alt=''></img>
           <img src={notification} alt=''></img>
           <img className='user-icon' src={profile} alt=''></img>
       </div>

    </nav>
  )
}

export default Navbar
