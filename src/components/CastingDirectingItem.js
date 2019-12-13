import React from 'react';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500/";


const CastingDirectingItem = ({ castDir}) => {
  


    // function handleOnClick(){
    //     props.callback(movie)

    // }

    return (


        <li className='list-group-item '>
              
            <div className='media'>
                <div className="media-left">
                    <img className="media-object img-rounded cast" src={`${IMAGE_BASE_URL}${castDir.profile_path}`} alt={castDir.name} />
                </div>
                <div className='media-body'>
                    <p className="card-title"> {castDir.name} </p>
                    <p>Rôle :{castDir.job} </p>
                    <p> department: {castDir.department}</p>
                </div>
            </div>

        </li>


    )

}


export default CastingDirectingItem;