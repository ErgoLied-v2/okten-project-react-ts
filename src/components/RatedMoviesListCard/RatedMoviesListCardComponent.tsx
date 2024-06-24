import {FC} from "react";
import {IMovie} from "../../models/IMovie";
import PosterPreviewComponent from "../PosterPreview/PosterPreviewComponent";
import {useAppSelector} from "../../redux/store";
import './RatedMoviesListCardComponent.css';

interface IProps {
    movie: IMovie;
}

const RatedMoviesListCardComponent: FC<IProps> = ({movie}) => {
    const {mod} = useAppSelector(state => state.themeModSlice);
    return (
        <div className={'flex'}>
            <div className={`cyber-tile-small fg-dark custom-bg-accent-${mod}`}>
                <PosterPreviewComponent path={movie.poster_path} title={movie.title}/>
            </div>
            <div className={`overview`}>
                <h2 className={`cyber-h custom-fg-${mod} cyber-glitch-1`}>{movie.title}</h2>

                <p className={`cyber-tile-big custom-bg-accent-${mod} fg-yellow`}>{movie.overview}</p>
            </div>
        </div>
    );
};

export default RatedMoviesListCardComponent;