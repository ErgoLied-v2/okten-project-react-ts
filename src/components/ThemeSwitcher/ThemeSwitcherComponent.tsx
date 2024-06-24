import {useAppDispatch, useAppSelector} from "../../redux/store";
import {changeMod} from "../../redux/slices/themeModSlice";

const ThemeSwitcherComponent = () => {
    const {mod} = useAppSelector(state => state.themeModSlice);
    const dispatch = useAppDispatch();
    const changeThemeMod = () => {
        dispatch(changeMod())
    }

    return (
        <div>
            <button onClick={changeThemeMod} className={`cyber-button-small bg-yellow fg-dark`}>
                mod: {mod}
                <span className="glitchtext">Change</span>
                <span className="tag">R25</span>
            </button>
        </div>
    );
};

export default ThemeSwitcherComponent;