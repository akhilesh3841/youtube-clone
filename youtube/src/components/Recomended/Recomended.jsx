import React, { useEffect, useState } from 'react';
import './Recomended.css';
import { Link } from 'react-router-dom';
import { API_KEY, value_converter } from '../Data.jsx';

const Recomended = ({ categoryId }) => {
  const [apidata, setapidata] = useState([]);

  const fetchdata = async () => {
    const relatedvideo = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
    try {
      const response = await fetch(relatedvideo);
      const data = await response.json();
      setapidata(data.items);
    } catch (error) {
      console.log("Error fetching related videos:", error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className='recomended'>
      {apidata.map((item, index) => (
        <div className='side-video-list' key={index}>
          {item.snippet.thumbnails && item.snippet.thumbnails.medium && (
            <img src={item.snippet.thumbnails.medium.url} alt="Thumbnail" />
          )}
          <Link to={`/video/${item.snippet.categoryId}/${item.id}`} className='vid-info' key={index}>
            <h4>{item.snippet.title}</h4>
            <p>{item.snippet.channelTitle}</p>
            <p>{value_converter(item.statistics.viewCount)}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Recomended;
