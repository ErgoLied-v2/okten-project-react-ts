import {useAppDispatch, useAppSelector} from "../../redux/store";
import GenreItemComponent from "../GenreItem/GenreItemComponent";
import {useEffect} from "react";
import {genresActions} from "../../redux/slices/genresSlice";

const GenresListComponent = () => {
    const dispatch = useAppDispatch();
    const {genres, error} = useAppSelector(state => state.genresSlice);

    useEffect(() => {
        dispatch(genresActions.loadGenres());
    }, []);

    return (
        <ul>
            {genres.map(genre => <GenreItemComponent key={genre.id} genre={genre}/>)}
        </ul>
    );
};

export default GenresListComponent;