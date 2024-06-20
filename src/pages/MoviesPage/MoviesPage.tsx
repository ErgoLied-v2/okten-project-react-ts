import {useAppDispatch} from "../../redux/store";
import {useEffect} from "react";
import MoviesListComponent from "../../components/MoviesList/MoviesListComponent";
import {moviesActions} from "../../redux/slices/moviesSlice";
import {genresActions} from "../../redux/slices/genresSlice";

const MoviesPage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(moviesActions.loadMovies());
        dispatch(genresActions.loadGenres());
    }, []);

    return (
        <MoviesListComponent/>
    );
};

export default MoviesPage;