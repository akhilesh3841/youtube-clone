import React, { useEffect, useState } from 'react'
import './Playvideo.css'


import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import profile from '../../assets/user_profile.jpg'
import {API_KEY, value_converter} from '../Data.jsx'
import moment from 'moment'

const Playvideo = ({videoId}) => {

    
  const [apidata,setapidata] =useState(null);
  const [channeldata,setchanneldata] =useState(null);

  const [commentdata,setcommentdata] = useState(null);


//wrong method to fetch dta
// const fetchdata=async ()=>{
//   const videodetails_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
//   await fetch(videodetails_url).then(res=>res.json()).then(data=>setapidata(data.items[0]))}
//   useEffect(()=>{
//     fetchdata();
//  },[])

const fetchdata = async () => {
  const videodetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
  try {
    const response = await fetch(videodetails_url);
    const data = await response.json();
    setapidata(data.items[0]);
  } catch (error) {
    console.log("error fetching data:", error);
  }
};

const fetchotherdata = async () => {
  if (apidata) {
    const channel_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apidata.snippet.channelId}&key=${API_KEY}`;
    try {
      const response = await fetch(channel_url);
      const data = await response.json();
      setchanneldata(data.items[0]);
    } catch (error) {
      console.log("error fetching channel data:", error);
    }

    const comments_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&maxResults=10&key=${API_KEY}`;
    try {
      const response = await fetch(comments_url);
      const data = await response.json();
      setcommentdata(data.items);
    } catch (error) {
      console.log("error fetching comments:", error);
    }
  }
};

useEffect(() => {
  if (videoId) {
    fetchdata();
  }
}, [videoId]);

useEffect(() => {
  fetchotherdata();
}, [apidata]);

  return (
    <div className='play-video'>
       {/* <video src={video1} controls autoPlay muted></video> */}
       <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       <h3>{apidata?apidata.snippet.title:"Title Here"}</h3> 

       <div className='play-video-info'>
          <p>{apidata?value_converter(apidata.statistics.viewCount):"16k"} views &bull; {apidata?moment(apidata.snippet.publishedAt).fromNow():""}</p>
          <div>
            <span>
                 <img src={like}></img>
                 {apidata?value_converter(apidata.statistics.likeCount):155}
            </span>
            <span>
                 <img src={dislike}></img>
            {apidata?value_converter(apidata.statistics.dislikeCount):15}
            </span>
            <span>
                 <img src={share}></img>
                 share
            </span>
            <span>
                 <img src={save}></img>
                 save
            </span>
          </div>
       </div>
       <hr/>
       <div className='publisher'>

          <img src={channeldata?channeldata.snippet.thumbnails.default.url:""}></img>
          <div>
            <p>{apidata?apidata.snippet.channelTitle:""}</p>
            <span>{channeldata?value_converter(channeldata.statistics.subscriberCount):"1M"}</span>
          </div>
          <button>Subscribe</button>
       </div>


       <div className='vid-description'>
         <p>{apidata?apidata.snippet.description.slice(0,250):"description here"}</p>
          <h4>{apidata?value_converter(apidata.statistics.commentCount):102}      Comments</h4>



          {commentdata && commentdata.map((comment, index) => (
          <div className='comment' key={index}>
            <img src={profile} alt="profile"></img>
            <div>
              <h3>{comment.snippet.topLevelComment.snippet.authorDisplayName} <span>{moment(comment.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span></h3>
              <p>{comment.snippet.topLevelComment.snippet.textOriginal}</p>
            </div>
            <div key={index} className='comment-action'>
              <img src={like} alt="like"></img>
              <span>{value_converter(comment.snippet.topLevelComment.snippet.likeCount)}</span>
              <img src={dislike} alt="dislike"></img>
            </div>
          </div>
        ))}




       </div>

    </div>
    
  )
}

export default Playvideo
