import React from 'react';
import App from '../containers/App'
import TheatersListItem from '../components/theaters/TheatersListItem'
import { Switch, Route } from 'react-router-dom';
const Test = (props) => {
    let { movieTheater } = props;
    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500/"
    const BASE_URL = "https://www.youtube.com/embed/";
    // function handleOnClick(){
    //     props.callback(movie)
    // }

    return (
        <Switch>
            <Route exact path="/" component={Test} />
        <Route exact path="accueil" component={App} />
        <Route exact path="theater" component={TheatersListItem} />
        
    </Switch>


    )

}


export default Test;