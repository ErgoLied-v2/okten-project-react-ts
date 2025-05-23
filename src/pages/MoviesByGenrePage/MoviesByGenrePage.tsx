import {useParams, useSearchParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {useEffect} from "react";
import {moviesActions} from "../../redux/slices/moviesSlice";
import MoviesListComponent from "../../components/MoviesList/MoviesListComponent";
import PaginationComponent from "../../components/Pagination/PaginationComponent";

const MoviesByGenrePage = () => {
    const {genreID} = useParams();
    const [query] = useSearchParams();
    const dispatch = useAppDispatch();
    const {searchedMoviesByGenre} = useAppSelector(state => state.moviesSlice);


    useEffect(() => {
        const page = query.get('page') || '1';
        // if (genreID && searchedMoviesByGenre.results.length === 0) {
        if (genreID ) {
            dispatch(moviesActions.loadSearchMoviesByGenre({genreID, page}));
            // dispatch(moviesActions.clearSearchedMovies());
        }
    }, [genreID, query, searchedMoviesByGenre.results.length]);

    return (
        <div>
            <PaginationComponent/>
            <MoviesListComponent/>
        </div>
    );
};

export default MoviesByGenrePage;