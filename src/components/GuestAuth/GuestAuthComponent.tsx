import {authActions} from "../../redux/slices/authSlice";
import {useAppDispatch} from "../../redux/store";

const GuestAuthComponent = () => {
    const dispatch = useAppDispatch();

    const authGuest = () => {
        dispatch(authActions.loadGuestSession());
    }

    return (
        <button onClick={() => authGuest()}>
            sign in as guest
        </button>
    );
};

export default GuestAuthComponent;