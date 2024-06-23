import {NavLink} from "react-router-dom";
import ThemeSwitcherComponent from "../ThemeSwitcher/ThemeSwitcherComponent";
import GenresDropDownComponent from "../GenresDropDown/GenresDropDownComponent";
import SearchMovieComponent from "../SearchMovie/SearchMovieComponent";
import UserInfoComponent from "../UserInfo/UserInfoComponent";

const HeaderComponent = () => {
    return (
        <header className={'flex'}>
            <ThemeSwitcherComponent/>

            <NavLink to={'/'}>[all movies]</NavLink>

            <GenresDropDownComponent/>

            <SearchMovieComponent/>

            <UserInfoComponent/>

            <hr/>
        </header>
    );
};

export default HeaderComponent;