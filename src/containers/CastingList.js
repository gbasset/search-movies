import React from 'react';
import CastingListItem from '../components/CastingListItem'

const CastingList = (props) => {
    const {casting} = props

    return (

        <div>

            <ul className='navigationList'>
                {casting
                    .map(cast => {
                        return <CastingListItem key={cast.id} cast={cast}  callback={recieveCallback}/>
                    })}


            </ul>

        </div>

    )

    function recieveCallback(movie){
        props.callback(movie)
    }
}

export default CastingList;