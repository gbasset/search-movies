import React from 'react'



const VideoDetail = ({ title, description, dateSortie, note, img,titleOrigin }) => {
    return (
        <div className='textfilm'>
            <h1> {title}</h1>
            <h6> Titre original: {titleOrigin} </h6>
            <h6> Date de Sortie:  {dateSortie}</h6>
            <p className='description' > {description} </p>

            <h6> Titre original: {titleOrigin} </h6>
            <div className='note'> <h5> Note du public: {note} 	&#x2B50; </h5></div>
            <div>
            <img className="Affichefilm"  src={img} />
            </div>
        </div>
    )
}
export default VideoDetail;