
import React from 'react';
import TheatersListItem from '../../components/theaters/TheatersListItem'

const TheatersList = (props) => {
    const { moviesTheaters } = props

    return (

        <div>

            <ul className='navigationList'>
                {moviesTheaters
                    .map(movieTheater => {
                        return <TheatersListItem key={movieTheater.id} movieTheater={movieTheater} 
                        
                        />
                    }
                    )}

            </ul>

        </div>

    )
}


export default TheatersList
