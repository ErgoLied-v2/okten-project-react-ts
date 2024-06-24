import MovieInfoComponent from "../../components/MovieInfo/MovieInfoComponent";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {useEffect} from "react";
import {moviesActions} from "../../redux/slices/moviesSlice";

const MoviePage = () => {
    const {movieID} = useParams();

    const dispatch = useAppDispatch();
    const {
        isLoaded,
        selectedMovie,
        error
    } = useAppSelector(state => state.moviesSlice);

    useEffect(() => {
        if(movieID){
            dispatch(moviesActions.loadMovieByID(movieID))
        }
    }, []);


    return (
        <>
            {
                isLoaded
                    ? selectedMovie
                        ? <MovieInfoComponent movie={selectedMovie}/>
                        : <div>{error && (error || 'id doesnt exists')}</div>
                    : <h2>Loading...</h2>
            }
        </>
    );
};

export default MoviePage;