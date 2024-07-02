import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import { Route,Routes } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import Video from './Pages/Video/Video.jsx'

const App = () => {

  const [sidebar,setsidebar]=useState(true);




  return (
    <div>
      <Navbar setsidebar={setsidebar}/>
      <Routes>
         <Route path='/' element={<Home sidebar={sidebar}/>}/>
         <Route path='/video/:categoryId/:videoId' element={<Video/>}/>
      </Routes>
    </div>
  )
}

export default App
