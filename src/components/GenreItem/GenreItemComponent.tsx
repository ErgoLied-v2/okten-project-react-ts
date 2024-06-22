import {FC} from "react";
import {IGenre} from "../../models/IGenre";
import {NavLink} from "react-router-dom";

interface IProps {
    genre: IGenre;
}

const GenreItemComponent: FC<IProps> = ({genre}) => {
    return (
        <li>
            <NavLink to={'/genres/'+genre.id}>{genre.name}</NavLink>
        </li>
    );
};

export default GenreItemComponent;