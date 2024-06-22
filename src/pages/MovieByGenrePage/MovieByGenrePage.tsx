import {useParams} from "react-router-dom";
import {useAppSelector} from "../../redux/store";
import {IMovie} from "../../models/IMovie";
import MovieInfoComponent from "../../components/MovieInfo/MovieInfoComponent";

const MovieByGenrePage = () => {
    const {movieID} = useParams();
    const {
        isLoaded,
        searchedMoviesByGenre,
        error
    } = useAppSelector(state => state.moviesSlice);

    let movie: IMovie | undefined;
    if (movieID) {
            movie = searchedMoviesByGenre.results.find(movie => movie.id === parseInt(movieID))
    }

    return (
        <>
            {
                isLoaded
                    ?
                    movie
                        ?
                        <MovieInfoComponent movie={movie}/>
                        : <div>{error && (error || 'id doesnt exists')}</div>
                    : <h2>Loading...</h2>
            }
        </>
    );
};

export default MovieByGenrePage;