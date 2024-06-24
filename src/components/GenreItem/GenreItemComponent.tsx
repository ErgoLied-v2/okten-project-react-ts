import {FC} from "react";
import {IGenre} from "../../models/IGenre";
import {NavLink} from "react-router-dom";
import {useAppSelector} from "../../redux/store";

interface IProps {
    genre: IGenre;
}

const GenreItemComponent: FC<IProps> = ({genre}) => {
    const {mod} = useAppSelector(state => state.themeModSlice);
    return (
        <li className={`custom-link-${mod}`}>
            <NavLink to={'/genres/'+genre.id}>{genre.name}</NavLink>
        </li>
    );
};

export default GenreItemComponent;