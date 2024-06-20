import {useAppSelector} from "../../redux/store";
import ErrorComponent from "../Error/ErrorComponent";
import MoviesListCardComponent from "../MoviesListCard/MoviesListCardComponent";

const MoviesListComponent = () => {
    const {moviesPaginated, isLoaded, error} = useAppSelector(state => state.moviesSlice);

    return (
        <div className={'flex'}>
            {error
                ? <ErrorComponent error={error}/>
                : isLoaded
                    ? moviesPaginated.results.map(movie => <MoviesListCardComponent key={movie.id} movie={movie}/>)
                    : <h2>loading...</h2>
            }
        </div>
    );
};

export default MoviesListComponent;