import React from 'react'
import axios from 'axios'
import SearchBar from '../components/SearchBar'
import VideoDetail from '../components/VideoDetails'
import VideoList from './VideoList'
import Video from '../components/Video'
import CastingList from '../containers/CastingList'
import CastingListDirecting from '../containers/CastingListDirecting'
import MakingOfList from '../containers/MakingOfList'
import Navbar from '../containers/Navbar'
import './App.css'

const API_END_POINT = "https://api.themoviedb.org/3/"
const POPULAR_MOVIES_URL = "discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images"
const API_KEY = "api_key=64194ae703e2630dd0d31d51af95795c"
const SEARCH_URL = "search/movie?language=frinclude_adult=false"
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500/"///kc3M04QQAuZ9woUvH3Ju5T7ZqG5.jpg"

class App extends React.Component {

    state = {
        movieList: [],
        currentMovie: {},
        casting: [],
        castingdirection: [],
        salles: [],
        genres: [],
        video: [],
    }


    componentDidMount() {
        this.initMovies()
        this.nowPlaying()
        this.genres()
       


    }

    initMovies = () => {
        axios
            .get(`${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`)
            .then(response =>
                this.setState({
                    movieList: response.data.results.slice(1, 20),
                    currentMovie: response.data.results[0],

                }, function () {
                    this.applyVideoToCurrentMovie()
                    this.cast()
                    this.videos()

                })

            )
    }


    onclickSearch = (searchText) => {
        if (searchText) {
            axios
                .get(`${API_END_POINT}${SEARCH_URL}&${API_KEY}&query=${searchText}&language=fr&include_adult=false`)
                .then(response => {
                    if (response.data && response.data.results[0]) {
                        if (response.data.results[0].id !== this.state.currentMovie.id) {
                            this.setState({ currentMovie: response.data.results[0] }, () => {
                                this.applyVideoToCurrentMovie();
                                this.setRecommandation();
                                this.cast();
                                this.videos()
                            })
                        }
                    }

                    else {
                        alert('Nous  ne parvenons pas à trouver ce film, essayer de le chercher en anglais')
                    }

                })

        }
    }

    applyVideoToCurrentMovie = () => {
        axios
            .get(`${API_END_POINT}movie/${this.state.currentMovie.id}?${API_KEY}&language=eng&append_to_response=videos&include_adult=true`)
            .then(response => {
                if (response.data.videos.results[0]) {
                    const youtube_key = response.data.videos.results[0].key;
                    let currentMovieWithVideo = this.state.currentMovie;
                    currentMovieWithVideo.videoId = youtube_key;
                    this.setState({ currentMovie: currentMovieWithVideo });
                }
                else {
                    let currentMovieWithVideo = this.state.currentMovie;
                    this.setState({ currentMovie: currentMovieWithVideo })
                    alert(`Nous n'avons pas encore de medias, ni de recommandations pour ce film`)

                }

            })
    }

    onClickrecieveCallback = (movie) => {
        this.setState({ currentMovie: movie }, function () {
            this.applyVideoToCurrentMovie()
            this.setRecommandation()
            this.cast()
            this.videos()
        })
    }

    setRecommandation = () => {
        axios
            .get(`${API_END_POINT}movie/${this.state.currentMovie.id}/recommendations?&${API_KEY}&language=fr `)
            .then(response =>
                this.setState({
                    movieList: response.data.results.slice(0, 20),
                })
            )
    }

    cast = () => {
        axios
            .get(`${API_END_POINT}movie/${this.state.currentMovie.id}/credits?${API_KEY}&language=fr&page=1`)
            // https://api.themoviedb.org/3/movie/150540?api_key=64194ae703e2630dd0d31d51af95795c&append_to_response=credits
            .then(response => {
                this.setState({
                    casting: response.data.cast.slice(0, 20)
                })
                return response
            })
            .then(response =>
                this.setState({
                    castingdirection: response.data.crew.slice(0, 20)
                })
            )


    }

    nowPlaying = () => {
        axios.get(`${API_END_POINT}movie/now_playing?${API_KEY}&language=fr&page=1`)
            //https://api.themoviedb.org/3/movie/now_playing?api_key=64194ae703e2630dd0d31d51af95795c&language=en-US&page=1
            //https://api.themoviedb.org/3/movie/now_playing?api_key=64194ae703e2630dd0d31d51af95795c&language=fr&page=1`
            .then(response =>
                this.setState({
                    salles: response.data.results
                })
            )

    }

    genres = () => {
        axios.get(`${API_END_POINT}genre/movie/list?${API_KEY}&language=fr`)
            //   https://api.themoviedb.org/3/genre/movie/list?api_key=64194ae703e2630dd0d31d51af95795c&language=en-US

            .then(response =>
                this.setState({
                    genres: response.data.genres.slice(0, 10)
                })
            )

    }
    
    
    videos = () => {
        axios.get(`${API_END_POINT}movie/${this.state.currentMovie.id}/videos?${API_KEY}`)

            // ${API_END_POINT}movie/${this.state.currentMovie.id}${API_KEY}&language=en-US
            //  https://api.themoviedb.org/3/movie/330457/videos?api_key=64194ae703e2630dd0d31d51af95795c&language=en-US
            //https://api.themoviedb.org/3/movie/330457/videos?api_key=64194ae703e2630dd0d31d51af95795c&language=fr
            .then(response =>
                this.setState({
                    video: response.data.results
                })
            )

    }
    // https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US
    render() {
        console.log('currentmovieid', this.state.currentMovie.id)
        console.log('casting', this.state.casting);
        console.log('salles', this.state.salles);
        console.log('genres', this.state.genres);
        console.log('video', this.state.video);
        console.log('casting2', this.state.castingdirection);
        const renderVideoList = () => {
            if (this.state.movieList.length >= 5) {
                return <VideoList movieList={this.state.movieList} />
            }
        }
        { renderVideoList() }

        console.log('video render with video', this.state.currentMovie);

        return (
            <>
                
                <Navbar />
                <div className='search_bar col-sm-8 col-md-12' >
                    <SearchBar callback={this.onclickSearch} />
                </div>
                <div className='col-md-2 '>
                    <h4 className='titlerecomandations'>Casting</h4>
                    <CastingList casting={this.state.casting} />

                </div>

                <div className='col-sm-12 col-md-7 movie'>

                    <div className='detail'>
                        <VideoDetail title={this.state.currentMovie.title} dateSortie={this.state.currentMovie.release_date} description={this.state.currentMovie.overview} note={this.state.currentMovie.vote_average} img={`${IMAGE_BASE_URL}${this.state.currentMovie.poster_path}`} titleOrigin={this.state.currentMovie.original_title} casting={this.state.casting} />

                        <Video videoId={this.state.currentMovie.videoId} />
                        <MakingOfList video={this.state.video} videoId={this.state.currentMovie.videoId} />
                        
                    </div>
                    
                    <CastingListDirecting castD={this.state.castingdirection} />
                    
                   
                    {/* <MakingOfList video={this.state.video}/> */}
                </div>

                <div className='col-md-3'>
                    <h4 className='titlerecomandations'>Laissez vous tenter</h4>
                    <VideoList movieList={this.state.movieList} castingdirector={this.state.castingdirector} callback={this.onClickrecieveCallback} />


                </div>


            </>
        )
    }

}


export default App;