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
            <button onClick={changeThemeMod}>mod: {mod}</button>
        </div>
    );
};

export default ThemeSwitcherComponent;