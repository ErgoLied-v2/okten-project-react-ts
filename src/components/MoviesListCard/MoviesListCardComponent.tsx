import {FC} from "react";
import {IMovie} from "../../models/IMovie";
import PosterPreviewComponent from "../PosterPreview/PosterPreviewComponent";
import {Link} from "react-router-dom";
import {useAppSelector} from "../../redux/store";
import GenreBadgeComponent from "../GenreBadge/GenreBadgeComponent";

interface IProps {
    movie: IMovie;
}

const MoviesListCardComponent: FC<IProps> = ({movie}) => {
    const {genres} = useAppSelector(state => state.genresSlice);

    return (
        <Link to={movie.id.toString()}>
            <PosterPreviewComponent path={movie.poster_path} title={movie.title}/>
            <p>{movie.title}</p>

            {movie.genre_ids.map(genre => <GenreBadgeComponent genreID={genre}/>)}
        </Link>
    );
};

export default MoviesListCardComponent;