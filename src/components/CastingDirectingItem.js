import React from 'react';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500/";


const CastingDirectingItem = ({ castDir }) => {



    // function handleOnClick(){
    //     props.callback(movie)

    // }

    return (
        <div className="flex-column-reverse">
            <div className="col-sm-4 lg-4">
                <div className="media-left">
                    <div className="card img img-rounded ">
                        <img src={`${IMAGE_BASE_URL}${castDir.profile_path}`} alt={castDir.name} className="card-img-top directing" />
                    </div>
                </div>
                <div className="media-body">
                    <h5 className="card-title">{castDir.name} </h5>
                    <p className="card-text"> Département :{castDir.department} Rôle :{castDir.job} </p>

                </div>
            </div>


        </div>



    )

}


export default CastingDirectingItem;