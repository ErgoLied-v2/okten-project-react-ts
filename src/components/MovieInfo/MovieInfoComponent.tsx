import {FC} from "react";
import {IMovie} from "../../models/IMovie";
import PosterPreviewComponent from "../PosterPreview/PosterPreviewComponent";
import GenreBadgeComponent from "../GenreBadge/GenreBadgeComponent";

interface IProps {
    movie: IMovie;
}

const MovieInfoComponent: FC<IProps> = ({movie}) => {
    return (
        <div>
            <p>{movie.title}</p>
            {movie.genre_ids.map(genre => <GenreBadgeComponent key={genre} genreID={genre}/>)}
            <hr/>
            <p>original_title: {movie.original_title}</p>
            <p>original_language: {movie.original_language}</p>
            <p>release_date: {movie.release_date}</p>
            <p>popularity: {movie.popularity}</p>
            <p>vote_average: {movie.vote_average}</p>
            <p>vote_count: {movie.vote_count}</p>

            <PosterPreviewComponent path={movie.poster_path} title={movie.title}/>
            <h2>overview</h2>
            <p>{movie.overview}</p>
        </div>
    );
};

export default MovieInfoComponent;