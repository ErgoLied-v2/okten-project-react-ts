import {NavLink} from "react-router-dom";
import ThemeSwitcherComponent from "../ThemeSwitcher/ThemeSwitcherComponent";
import GenresDropDownComponent from "../GenresDropDown/GenresDropDownComponent";
import SearchMovieComponent from "../SearchMovie/SearchMovieComponent";
import {useAppSelector} from "../../redux/store";
import GuestInfoComponent from "../GuestInfo/GuestInfoComponent";
import GuestAuthComponent from "../GuestAuth/GuestAuthComponent";

const HeaderComponent = () => {
    const {isLoaded} = useAppSelector((state) => state.authSlice);

    return (
        <header className={'flex'}>
            <ThemeSwitcherComponent/>

            <NavLink to={'/'}>[all movies]</NavLink>

            <GenresDropDownComponent/>

            <SearchMovieComponent/>

            {
                isLoaded
                    ? <GuestInfoComponent/>
                    : <GuestAuthComponent/>
            }

            <hr/>
        </header>
    );
};

export default HeaderComponent;