import {NavLink} from "react-router-dom";
import ThemeSwitcherComponent from "../ThemeSwitcher/ThemeSwitcherComponent";
import SearchMovieComponent from "../SearchMovie/SearchMovieComponent";
import UserInfoComponent from "../UserInfo/UserInfoComponent";
import './HeaderComponent.module.css';
import {useAppSelector} from "../../redux/store";

const HeaderComponent = () => {
    const {mod} = useAppSelector(state => state.themeModSlice);
    return (
        <header className={`flex cyber-razor-bottom custom-bg-accent-${mod}`}>
            <ThemeSwitcherComponent/>

            <NavLink to={'/'} className={`cyber-button-small bg-yellow fg-dark`}>
                all movies
            </NavLink>

            <NavLink to={'/genres'} className={`cyber-button-small bg-yellow fg-dark`}>
                genres
            </NavLink>

            <SearchMovieComponent/>

            <UserInfoComponent/>

            <hr/>
        </header>
    );
};

export default HeaderComponent;