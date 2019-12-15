import React from 'react';

const MakingOfListItem = (props) => {
    let { makingof} = props;

    const BASE_URL = "https://www.youtube.com/embed/";
    // function handleOnClick(){
    //     props.callback(movie)
    // }

    return (

        <li className='list-group-item  mt-1' >
            <div className='media-body'>
                    <h5 className='titlerecomandations'> {makingof.name} {makingof.type}  </h5>
                </div>
            <div className='embed-responsive embed-responsive-16by9 '>
                <iframe className='embed-responsive-item' src={`${BASE_URL}${makingof.key}`} />
            </div> 
        </li>


    )

}

export default MakingOfListItem;