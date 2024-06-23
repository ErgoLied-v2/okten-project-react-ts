import {useParams, useSearchParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import MovieInfoComponent from "../../components/MovieInfo/MovieInfoComponent";
import {moviesActions} from "../../redux/slices/moviesSlice";
import {useEffect} from "react";

const MovieByGenrePage = () => {
    const {genreID, movieID} = useParams();
    const [query] = useSearchParams();
    const page = query.get('page') || '1';

    const dispatch = useAppDispatch();
    const {
        isLoaded,
        selectedMovie,
        error
    } = useAppSelector(state => state.moviesSlice);

    useEffect(() => {
        if (genreID) {
            dispatch(moviesActions.loadSearchMoviesByGenre({genreID, page}));
        }

        if (movieID) {
                dispatch(moviesActions.loadMovieByID(movieID));
        }
    }, [movieID, genreID, query]);

    return (
        <>
            {
                isLoaded
                    ?
                    selectedMovie
                        ?
                        <MovieInfoComponent movie={selectedMovie}/>
                        : <div>{error && (error || 'id doesnt exists')}</div>
                    : <h2>Loading...</h2>
            }
        </>
    );
};

export default MovieByGenrePage;