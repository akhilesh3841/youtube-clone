import React from 'react'
import './Video.css'
import Playvideo from '../../components/Playvideo/Playvideo'
import Recomended from '../../components/Recomended/Recomended.jsx'
import { useParams } from 'react-router-dom'

const Video = () => {

  const {videoId,categoryId}=useParams();



  return (
    <div className='play-container'>
      <Playvideo videoId={videoId}/>
      <Recomended categoryId={categoryId}/>
    </div>
  )
}

export default Video
