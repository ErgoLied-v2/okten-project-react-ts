import {FC} from "react";
import PosterPreviewComponent from "../PosterPreview/PosterPreviewComponent";
import GenreBadgeComponent from "../GenreBadge/GenreBadgeComponent";
import StarsRatingComponent from "../StarsRating/StarsRatingComponent";
import {IMovieByID} from "../../models/IMovieByID";

interface IProps {
    movie: IMovieByID;
}

const MovieInfoComponent: FC<IProps> = ({movie}) => {
    return (
        <div>
            <p>{movie.title}</p>
            {movie.genres.map(genre => <GenreBadgeComponent key={genre.id} genreID={genre.id}/>)}
            <hr/>
            <p>original_title: {movie.original_title}</p>
            <p>original_language: {movie.original_language}</p>
            <p>release_date: {movie.release_date}</p>
            <p>popularity: {movie.popularity}</p>
            <p>vote_average: {movie.vote_average}</p>
            <p>vote_count: {movie.vote_count}</p>
            <StarsRatingComponent initialValue={movie.vote_average} movieID={movie.id}/>

            <PosterPreviewComponent path={movie.poster_path} title={movie.title}/>
            <h2>overview</h2>
            <p>{movie.overview}</p>
        </div>
    );
};

export default MovieInfoComponent;