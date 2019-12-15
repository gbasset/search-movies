import React from 'react';
import MakingOfListItem from '../components/MakingOfListItem'




const VideoList = (props) => {
    const {video,videoId}= props

    return (

        <div>
 
            <ul className='navigationList'>
                {video
                    .map(makingof => {
                        return makingof.key !== videoId ?
                        <MakingOfListItem key={makingof.id} makingof={makingof} callback={recieveCallback} /> : null
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