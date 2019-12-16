import React from 'react';
import Navbar from '../../containers/Navbar'
const TheatersListItem = (props) => {
    let { movieTheater } = props;
    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500/"
    const BASE_URL = "https://www.youtube.com/embed/";
    // function handleOnClick(){
    //     props.callback(movie)
    // }

    return (
        <div>
            <Navbar/>
        <div className="row row-cols-1 row-cols-md-3">
            <div className="col mb-2">
                <div className="card h-100">
                    <img src={`${IMAGE_BASE_URL}${movieTheater.poster_path}`} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{movieTheater.original_title}</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer{movieTheater.overview}</p>
                        <div className='note'> <h5> Note du public: {movieTheater.vote_average} 	&#x2B50; </h5></div>                 
                    </div>
                </div>
            </div>
        </div>
        </div>



    )

}


export default TheatersListItem;



// 0: {…}
                                                                        //
                                                                        // adult: false
                                                                        //
                                                                        // backdrop_path: "/zTxHf9iIOCqRbxvl8W5QYKrsMLq.jpg"
                                                                        //
                                                                        // genre_ids: (4) […]
                                                                        //
                                                                        // 0: 28
                                                                        //
                                                                        // 1: 12
                                                                        //
                                                                        // 2: 35
                                                                        //
                                                                        // 3: 14
                                                                        //
                                                                        // length: 4
                                                                        //
// <prototype>: Array []
                                                                        // ​​
                                                                        // id: 512200
                                                                        // ​​
                                                                        // original_language: "en"
                                                                        // ​​
                                                                        // original_title: "Jumanji: The Next Level"
                                                                        // ​​
                                                                        // overview: "L’équipe est de retour, mais le jeu a changé. Alors qu’ils retournent dans Jumanji pour secourir l’un des leurs, ils découvrent un monde totalement inattendu. Des déserts arides aux montagnes enneigées, les joueurs vont devoir braver des espaces inconnus et inexplorés, afin de sortir du jeu le plus dangereux du monde..."
                                                                        // ​​
                                                                        // popularity: 543.811
                                                                        // ​​
                                                                        // poster_path: "/kc62PCo8u5sZKq0crYvZSidLFPr.jpg"
                                                                        // ​​
                                                                        // release_date: "2019-12-04"
                                                                        // ​​
                                                                        // title: "Jumanji : next level"
                                                                        // ​​
                                                                        // video: false
                                                                        // ​​
                                                                        // vote_average: 6.8
                                                                        // ​​
// vote_count: 254