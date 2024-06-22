import {NavLink} from "react-router-dom";
import ThemeSwitcherComponent from "../ThemeSwitcher/ThemeSwitcherComponent";
import GenresDropDownComponent from "../GenresDropDown/GenresDropDownComponent";

const HeaderComponent = () => {
    return (
        <header className={'flex'}>
            <ThemeSwitcherComponent/>

            <NavLink to={'/'}>[all movies]</NavLink>

            <GenresDropDownComponent/>

            <div> [search movies component]</div>

            <div> [user account info
                * [rated movies list] (ADDITIONAL)
                GUEST SESSION!!!!!
                ]
            </div>

            <hr/>
        </header>
    );
};

export default HeaderComponent;