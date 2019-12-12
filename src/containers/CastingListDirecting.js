import React from 'react';
import CastingDirectingItem from '../components/CastingDirectingItem'

const CastingListDirecting = (props) => {
    const {castD} = props

    return (

        <div>

            <ul className='navigationList'>
              {castD
                  .map(castDir => {
                      return <CastingDirectingItem  key={castDir.credit_id}  castDir={castDir}  callback={recieveCallback} />
                  })}
            </ul>
        </div>
    )

    function recieveCallback(movie){
        props.callback(movie)
    }
}

export default CastingListDirecting;