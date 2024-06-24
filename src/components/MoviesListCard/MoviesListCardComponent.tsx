import {FC} from "react";
import {IMovie} from "../../models/IMovie";
import PosterPreviewComponent from "../PosterPreview/PosterPreviewComponent";
import {Link} from "react-router-dom";
import GenreBadgeComponent from "../GenreBadge/GenreBadgeComponent";
import {useAppDispatch} from "../../redux/store";
import {moviesActions} from "../../redux/slices/moviesSlice";

interface IProps {
    movie: IMovie;
}

const MoviesListCardComponent: FC<IProps> = ({movie}) => {
    const dispatch = useAppDispatch();

    const setSelectedMovie = () => {
        dispatch(moviesActions.loadMovieByID(movie.id.toString()));
    }

    return (
        <div onClick={() => setSelectedMovie}>
            <Link to={movie.id.toString()}>
                <div className={'cyber-tile-small fg-dark bg-purple'}>
                    <PosterPreviewComponent path={movie.poster_path} title={movie.title}/>
                    <label>{movie.title}</label>

                    {movie.genre_ids.map(genre => <GenreBadgeComponent key={genre} genreID={genre}/>)}
                </div>


            </Link>
        </div>
    );
};

export default MoviesListCardComponent;