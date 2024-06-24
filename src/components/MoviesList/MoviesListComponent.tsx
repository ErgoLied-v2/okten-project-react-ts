import {useAppSelector} from "../../redux/store";
import ErrorComponent from "../Error/ErrorComponent";
import MoviesListCardComponent from "../MoviesListCard/MoviesListCardComponent";
import {useParams, useSearchParams} from "react-router-dom";
import styles from './MoviesListComponent.module.css';

const MoviesListComponent = () => {
    const {
        moviesPaginated,
        searchedMoviesPaginated,
        searchedMoviesByGenre,
        isLoaded,
        error
    } = useAppSelector(state => state.moviesSlice);
    const [query] = useSearchParams();
    const {genreID} = useParams();
    const movies =
        query.has('query')
            ? searchedMoviesPaginated
            : genreID ? searchedMoviesByGenre : moviesPaginated;

    return (
        <div className={styles.movieContainer}>
            <div className={'grid'}>
                {error
                    ? <ErrorComponent error={error}/>
                    : isLoaded
                        ? movies.results.length > 0
                            ? movies.results.map(movie => <MoviesListCardComponent key={movie.id} movie={movie}/>)
                            : <h2>sorry, no results includes {query.get('query')}</h2>
                        : <h2>loading...</h2>
                }

            </div>
        </div>
    );
};

export default MoviesListComponent;