import {useAppDispatch, useAppSelector} from "../../redux/store";
import {moviesActions} from "../../redux/slices/moviesSlice";
import RatedMoviesListCardComponent from "../RatedMoviesListCard/RatedMoviesListCardComponent";
import './RatedMoviesListComponent.css';

const RatedMoviesListComponent = () => {
    const {ratedMovies, error} = useAppSelector(state => state.moviesSlice);
    const dispatch = useAppDispatch();

    const deleteRate = async (movieID: string) => {
        await dispatch(moviesActions.deleteRating({movieID}));
    }

    return (
        <div>
            {ratedMovies.results.map(movie =>
                <div key={movie.id} className={'flex movie-details m-5'}>
                    <RatedMoviesListCardComponent movie={movie}/>
                    <div>
                        <button onClick={() => deleteRate(movie.id.toString())} title={'delete rate'}></button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RatedMoviesListComponent;