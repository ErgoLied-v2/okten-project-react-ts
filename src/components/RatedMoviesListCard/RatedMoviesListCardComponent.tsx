import {FC} from "react";
import {IMovie} from "../../models/IMovie";
import PosterPreviewComponent from "../PosterPreview/PosterPreviewComponent";

interface IProps {
    movie: IMovie;
}

const RatedMoviesListCardComponent: FC<IProps> = ({movie}) => {
    return (
        <div>
            <PosterPreviewComponent path={movie.poster_path} title={movie.title}/>
            <p>{movie.title}</p>
            <p>{movie.overview}</p>
        </div>
    );
};

export default RatedMoviesListCardComponent;