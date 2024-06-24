import MoviesListComponent from "../../components/MoviesList/MoviesListComponent";
import PaginationComponent from "../../components/Pagination/PaginationComponent";
import {useSearchParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {useEffect} from "react";
import {moviesActions} from "../../redux/slices/moviesSlice";
import {genresActions} from "../../redux/slices/genresSlice";
import styles from './MoviesPage.module.css';

const MoviesPage = () => {
    const [query] = useSearchParams();
    const dispatch = useAppDispatch();
    const {moviesPaginated, searchedMoviesPaginated} = useAppSelector(state => state.moviesSlice);


    useEffect(() => {
        const page = query.get('page') || '1';
        const searchQuery = query.get('query') || '';

        if (searchQuery) {
                dispatch(moviesActions.loadSearchedMovies({query: searchQuery, page}));
        } else {
            if (moviesPaginated.results.length === 0) {
                dispatch(moviesActions.loadMovies(page));
            }
            dispatch(moviesActions.loadMovies(page));
        }
        dispatch(genresActions.loadGenres());
    }, [query]);

    return (
        <div className={styles.moviesContainer}>
            <PaginationComponent/>
            <MoviesListComponent/>
        </div>
    );
};

export default MoviesPage;