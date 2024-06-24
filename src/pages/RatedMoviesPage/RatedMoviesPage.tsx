import RatedMoviesListComponent from "../../components/RatedMoviesList/RatedMoviesListComponent";
import {useAppDispatch} from "../../redux/store";
import {useEffect} from "react";
import {moviesActions} from "../../redux/slices/moviesSlice";

const RatedMoviesPage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(moviesActions.loadRatedMovies());
    }, []);

    return (
        <div>
            <RatedMoviesListComponent/>
        </div>
    );
};

export default RatedMoviesPage;