import {FC} from "react";
import {IMovie} from "../../models/IMovie";
import PosterPreviewComponent from "../PosterPreview/PosterPreviewComponent";
import {Link} from "react-router-dom";
import GenreBadgeComponent from "../GenreBadge/GenreBadgeComponent";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {moviesActions} from "../../redux/slices/moviesSlice";
import './MoviesListCardComponent.css';

interface IProps {
    movie: IMovie;
}

const MoviesListCardComponent: FC<IProps> = ({movie}) => {
    const {mod} = useAppSelector(state => state.themeModSlice);
    const dispatch = useAppDispatch();

    const setSelectedMovie = () => {
        dispatch(moviesActions.loadMovieByID(movie.id.toString()));
    }

    return (
        <div onClick={() => setSelectedMovie}>
            <Link to={movie.id.toString()}>
                <div className={`cyber-tile-small fg-dark custom-bg-accent-${mod}`}>
                    <PosterPreviewComponent path={movie.poster_path} title={movie.title}/>
                    <label className={`fg-yellow`}>{movie.title}</label>

                    <div className={'movieGenres'}>
                        <div className={'badge-box'}>
                            {movie.genre_ids.map(genre => <GenreBadgeComponent key={genre} genreID={genre}/>)}
                        </div>
                    </div>
                </div>


            </Link>
        </div>
    );
};

export default MoviesListCardComponent;