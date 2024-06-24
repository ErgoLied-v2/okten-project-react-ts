import {useAppDispatch, useAppSelector} from "../../redux/store";
import {moviesActions} from "../../redux/slices/moviesSlice";
import MoviesListCardComponent from "../MoviesListCard/MoviesListCardComponent";
import RatedMoviesListCardComponent from "../RatedMoviesListCard/RatedMoviesListCardComponent";

const RatedMoviesListComponent = () => {
    const {ratedMovies, error} = useAppSelector(state => state.moviesSlice);
    const dispatch = useAppDispatch();

    const deleteRate = async (movieID: string) => {
        await dispatch(moviesActions.deleteRating({movieID}));
    }

    return (
        <div>
            {ratedMovies.results.map(movie =>
                <div key={movie.id}>
                    <RatedMoviesListCardComponent movie={movie}/>
                    <button onClick={() => deleteRate(movie.id.toString())}>del rate</button>
                </div>
            )}
        </div>
    );
};

export default RatedMoviesListComponent;