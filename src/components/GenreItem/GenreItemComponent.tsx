import {FC} from "react";
import {IGenre} from "../../models/IGenre";

interface IProps {
    genre: IGenre;
}

const GenreItemComponent: FC<IProps> = ({genre}) => {
    return (
        <li>{genre.name}</li>
    );
};

export default GenreItemComponent;