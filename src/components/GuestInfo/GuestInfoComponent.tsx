import {useAppSelector} from "../../redux/store";

const GuestInfoComponent = () => {
    const {guestSessionId} = useAppSelector((state) => state.authSlice);

    return (
        <div>
            <p>Hi, Guest</p>
            <p>{guestSessionId}</p>
        </div>
    );
};

export default GuestInfoComponent;