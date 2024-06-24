import {useAppDispatch, useAppSelector} from "../../redux/store";
import GenreItemComponent from "../GenreItem/GenreItemComponent";
import {useEffect} from "react";
import {genresActions} from "../../redux/slices/genresSlice";
import './GenresListComponent.css';

const GenresListComponent = () => {
    const dispatch = useAppDispatch();
    const {genres, error} = useAppSelector(state => state.genresSlice);

    useEffect(() => {
        dispatch(genresActions.loadGenres());
    }, []);

    return (
        <div className={'list-container'}>
            <ul className={'two-column-list'}>
                {genres.map(genre => <GenreItemComponent key={genre.id} genre={genre}/>)}
            </ul>
        </div>
    );
};

export default GenresListComponent;