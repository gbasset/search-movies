import React from 'react';
import CastingDirectingItem from '../components/CastingDirectingItem'

const CastingListDirecting = (props) => {
    const {castD} = props

    return (

        <div>

            <ul className='navigationList'>
            <h1 className='title mr-3'> Equipe technique</h1>
              {castD
                  .map(castDir => {
                      return castDir.profile_path? <CastingDirectingItem  key={castDir.credit_id}  castDir={castDir}  callback={recieveCallback} /> : null
                  })}
            </ul>
        </div>
    )

    function recieveCallback(movie){
        props.callback(movie)
    }
}

export default CastingListDirecting;