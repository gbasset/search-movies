import React from 'react'



const VideoDetail = ({ casting, title, description, dateSortie, note, img, titleOrigin, }) => {
    
    const SortieDate = () => {
        if (!dateSortie) {
            return
        }        
        const date2=dateSortie.split('-')       
        return (date2[2]+'/'+date2[1]+'/'+date2[0])
    }
    
    return (
        <div className='media m-1 textfilm '>

                <h1 className='title-list-item '>  {title} </h1>
                <h6> Titre original: {titleOrigin} </h6>
                <h6> Date de Sortie: {SortieDate()} </h6>
                <div className="media-left test">
                    <img  width="120px" height="170px" className="media-object img-rounded afficheMovie" src={img} alt={title}/>
                <p className='description' > {description} </p>
            </div>

            <div className='note'> <h5> Note du public: {note} 	&#x2B50; </h5></div>

        </div>
    )
}
export default VideoDetail;