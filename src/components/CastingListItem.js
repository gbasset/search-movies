import React from 'react';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500/";


const CastingListItem = (props) => {
    let { cast } = props;


    // function handleOnClick(){
    //     props.callback(movie)

    // }

    return (


        <li className='list-group-item-casting'>
            <div className='media'>
                <div className="media-left">
                    <img className="media-object img-rounded cast" src={`${IMAGE_BASE_URL}${cast.profile_path}`} alt={cast.name} />
                </div>
                <div className='media-body'>
                    <p className="card-title"> {cast.name} </p>
                    <p>Rôle {cast.character} </p>
                </div>
            </div>

        </li>


    )

}

export default CastingListItem;