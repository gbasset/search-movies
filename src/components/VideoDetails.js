import React from 'react'

const VideoDetail = ({title, description, dateSortie}) => {
    return (
        <div> 
            <h1> {title}</h1>
             <h4> Date de Sortie: {dateSortie}</h4>
            <p className='description' > {description} </p>
            
        </div>
    )
}
export default VideoDetail;