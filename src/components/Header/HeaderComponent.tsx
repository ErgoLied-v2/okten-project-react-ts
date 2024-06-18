import {NavLink} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <header>
            <div> [toggler]</div>

            <NavLink to={'/'}>[all movies]</NavLink>

            <NavLink to={'genres'}>[genres list]</NavLink>

            <div> [search movies component]</div>

            <div> [user accaunt info
                * [rated movies list] (ADDITIONAL)
                ]
            </div>

            <hr/>
        </header>
    );
};

export default HeaderComponent;