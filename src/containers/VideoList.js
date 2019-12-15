import React from 'react';
import VideoListItem from '../components/VideoListItem'





const VideoList = (props) => {
    const {movieList}= props

    return (

        <div>

            <ul className='navigationList'>
                {movieList
                    .map(movie => {
                        return <VideoListItem key={movie.id} movie={movie} callback={recieveCallback}/>
                    }
                    
                    )}

            </ul>

        </div>

    )

    function recieveCallback(movie){
        props.callback(movie)
    }
}

export default VideoList;