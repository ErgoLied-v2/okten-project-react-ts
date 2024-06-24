import {NavLink} from "react-router-dom";
import ThemeSwitcherComponent from "../ThemeSwitcher/ThemeSwitcherComponent";
import GenresDropDownComponent from "../GenresDropDown/GenresDropDownComponent";
import SearchMovieComponent from "../SearchMovie/SearchMovieComponent";
import UserInfoComponent from "../UserInfo/UserInfoComponent";
import styles from './HeaderComponent.module.css';
import './HeaderComponent.module.css';

const HeaderComponent = () => {
    return (
        <header className={'flex cyber-razor-bottom bg-purple fg-yellow'}>
            <ThemeSwitcherComponent/>

            <NavLink to={'/'} className={'fg-yellow'}>[all movies]</NavLink>

            <GenresDropDownComponent/>

            <SearchMovieComponent/>

            <UserInfoComponent/>

            <hr/>
        </header>
    );
};

export default HeaderComponent;