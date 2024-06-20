import {useAppDispatch} from "../../redux/store";
import {useEffect} from "react";
import MoviesListComponent from "../../components/MoviesList/MoviesListComponent";
import {moviesActions} from "../../redux/slices/moviesSlice";
import {genresActions} from "../../redux/slices/genresSlice";
import {useSearchParams} from "react-router-dom";

const MoviesPage = () => {
    const [query] = useSearchParams();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(moviesActions.loadMovies(query.get('page') ||'1'));
        dispatch(genresActions.loadGenres());
    }, []);

    return (
        <MoviesListComponent/>
    );
};

export default MoviesPage;