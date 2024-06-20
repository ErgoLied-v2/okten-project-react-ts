import MovieInfoComponent from "../../components/MovieInfo/MovieInfoComponent";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {IMovie} from "../../models/IMovie";
import {useEffect} from "react";
import {moviesActions} from "../../redux/slices/moviesSlice";

const MoviePage = () => {
    const {movieID} = useParams();
    const {isLoaded, moviesPaginated, error} = useAppSelector(state => state.moviesSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(moviesActions.loadMovies());
    }, []);

    let movie: IMovie | undefined;
    if (movieID) {
        movie = moviesPaginated.results.find(movie => movie.id === parseInt(movieID));
    }

    console.warn('if reload - movieID disappear and here is endless /loading/ ');
    console.warn('do something with this');

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

export default MoviePage;