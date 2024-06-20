import {FC} from "react";
import {IMovie} from "../../models/IMovie";
import PosterPreviewComponent from "../PosterPreview/PosterPreviewComponent";
import {Link} from "react-router-dom";
import GenreBadgeComponent from "../GenreBadge/GenreBadgeComponent";

interface IProps {
    movie: IMovie;
}

const MoviesListCardComponent: FC<IProps> = ({movie}) => {

    return (
        <Link to={movie.id.toString()}>
            <PosterPreviewComponent path={movie.poster_path} title={movie.title}/>
            <p>{movie.title}</p>

            {movie.genre_ids.map(genre => <GenreBadgeComponent key={genre} genreID={genre}/>)}
        </Link>
    );
};

export default MoviesListCardComponent;