import {useAppDispatch} from "../../redux/store";
import {useEffect} from "react";
import MoviesListComponent from "../../components/MoviesList/MoviesListComponent";
import {moviesActions} from "../../redux/slices/moviesSlice";
import {genresActions} from "../../redux/slices/genresSlice";
import {useSearchParams} from "react-router-dom";
import PaginationComponent from "../../components/Pagination/PaginationComponent";

const MoviesPage = () => {
    const [query] = useSearchParams();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(moviesActions.loadMovies(query.get('page') || '1'));
        dispatch(moviesActions.loadSearchedMovies(query.get('query') || ''));
        dispatch(genresActions.loadGenres());
    }, []);

    return (
        <>
            <PaginationComponent/>
            <MoviesListComponent/>
        </>
    );
};

export default MoviesPage;