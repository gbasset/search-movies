import React from 'react'
import axios from 'axios'
import SearchBar from '../components/SearchBar'
import VideoDetail from '../components/VideoDetails'
import VideoList from './VideoList'
import Video from '../components/Video'

import './App.css'

const API_END_POINT = "https://api.themoviedb.org/3/"
const POPULAR_MOVIES_URL = "discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images"
const API_KEY = "api_key=64194ae703e2630dd0d31d51af95795c"
const SEARCH_URL = "search/movie?language=frinclude_adult=false"

class App extends React.Component {

    state = {
        movieList: [],
        currentMovie: {},
    }


    componentDidMount() {
        this.initMovies()
    }

    initMovies = () => {
        axios
            .get(`${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`)
            .then(response =>
                this.setState({
                    movieList: response.data.results.slice(1, 20),
                    currentMovie: response.data.results[0]
                }, function () {
                    this.applyVideoToCurrentMovie();
                })
            )   
    }
    onclickSearch=(searchText) => {
        if(searchText){
            axios
            .get(`${API_END_POINT}${SEARCH_URL}&${API_KEY}&query=${searchText}&language=fr&include_adult=false`)
            .then(response => {
                if(response.data && response.data.results[0]){
                    if(response.data.results[0].id !=this.state.currentMovie.id) {
                        this.setState({currentMovie:response.data.results[0]}, () => {
                            this.applyVideoToCurrentMovie();
                            this.setRecommandation();
                            this.initMovies()
                        })
                    }
                }

                else{ 
                    alert('Nous  ne parvenons pas à trouver ce film, essayer de le chercher en anglais')
                }
          
            })
            
        }        
    }
    applyVideoToCurrentMovie = () => {
        axios
        .get(`${API_END_POINT}movie/${this.state.currentMovie.id}?${API_KEY}&append_to_response=videos&include_adult=false`)
        .then(response => {
            const youtube_key = response.data.videos.results[0].key;
            let currentMovieWithVideo = this.state.currentMovie;
            currentMovieWithVideo.videoId = youtube_key;
            this.setState({ currentMovie: currentMovieWithVideo });
            
        })}
           
    onClickrecieveCallback = (movie) => {
        this.setState({ currentMovie: movie },function ()
        {this.applyVideoToCurrentMovie()})
        this.setRecommandation();
    }

    setRecommandation=() =>{
        axios
        .get(`${API_END_POINT}movie/${this.state.currentMovie.id}/recommendations?&${API_KEY}&language=fr `)
        .then(response =>
            this.setState({
                movieList: response.data.results.slice(0, 20),
            })
        )   
    }


    render() {
        const renderVideoList = () => {
            if (this.state.movieList.length >= 5) {
                return <VideoList movieList={this.state.movieList} />
            }
        }
        { renderVideoList() }
        console.log('video render with video', this.state.currentMovie);

        return (
            <div>
                <div className='search_bar'>
                    <SearchBar callback={this.onclickSearch}/>
                </div>

                <div className='row'>
                    <div className='col-md-8'>

                        <Video videoId={this.state.currentMovie.videoId} />
                        <div className='detail'>
                            <VideoDetail title={this.state.currentMovie.title} dateSortie={this.state.currentMovie.release_date} description={this.state.currentMovie.overview} />
                        </div>
                    </div>

                    <div className='col-md-4'>
                        <VideoList movieList={this.state.movieList} callback={this.onClickrecieveCallback} />
                    </div>

                </div>


            </div>
        )
    }

}


export default App;