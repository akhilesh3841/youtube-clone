import React from 'react'
import './Sidebar.css'

import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertain from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blog from '../../assets/blogs.png'
import news from '../../assets/news.png'
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'


const Sidebar = ({sidebar,category,setcategory}) => {
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
       <div className='sortcut-links'>
          <div className={`side-link ${category===0?"active":""}`} onClick={()=>setcategory(0)}>
            <img src={home}></img><p>Home</p>
          </div>
          <div className={`side-link ${category===20?"active":""}`} onClick={()=>setcategory(20)}>
            <img src={game_icon}></img><p>Gaming</p>
          </div>
          <div className={`side-link ${category===2?"active":""}`} onClick={()=>setcategory(2)}>
            <img src={automobiles}></img><p>Automobiles</p>
          </div>
          <div className={`side-link ${category===17?"active":""}`} onClick={()=>setcategory(17)}>
            <img src={sports}></img><p>Sports</p>
          </div>
          <div className={`side-link ${category===24?"active":""}`} onClick={()=>setcategory(24)}>
            <img src={entertain}></img><p>Entertainment</p>
          </div>
          <div className={`side-link ${category===28?"active":""}`} onClick={()=>setcategory(28)}>
            <img src={tech}></img><p>Technology</p>
          </div>
          <div className={`side-link ${category===10?"active":""}`} onClick={()=>setcategory(10)}>
            <img src={music}></img><p>Music</p>
          </div>
          <div className={`side-link ${category===22?"active":""}`} onClick={()=>setcategory(22)}>
            <img src={blog}></img><p>Blogs</p>
          </div>
          <div className={`side-link ${category===25?"active":""}`} onClick={()=>setcategory(25)}>
            <img src={news}></img><p>News</p>
          </div>

          <hr></hr>

          <div className='subscribed-link'>
            <h3>SUBSCRIBED</h3>
                 <div className='side-link' onClick={()=>setcategory(0)}>
                        <img src={jack}></img><p>Smith</p>
                 
                 </div>

                 <div className='side-link' onClick={()=>setcategory(0)}>
                        <img src={simon}></img><p>Head</p>
                 
                 </div>
                 <div className='side-link' onClick={()=>setcategory(0)}>
                        <img src={tom}></img><p>Warner</p>
                 
                 </div>
                 <div className='side-link' onClick={()=>setcategory(0)}>
                        <img src={megan}></img><p>Kane</p>
                 
                 </div>
                 <div className='side-link' onClick={()=>setcategory(0)}>
                        <img src={cameron}></img><p>Morgan</p>
                 
                 </div>
          </div>
       </div>
    </div>
  )
}

export default Sidebar
