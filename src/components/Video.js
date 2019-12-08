import React from 'react'
const BASE_URL="https://www.youtube.com/embed/";

const Video = ({videoId}) => {
        return (
          <div className='embed-responsive embed-responsive-16by9'>
                <iframe lassName='embed-responsive-item' src={`${BASE_URL}${videoId}`}/> 
            </div>
        );
}

// objet-fits:contain en css pour le continer video

export default Video