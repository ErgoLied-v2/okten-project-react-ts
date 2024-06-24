import {Link} from "react-router-dom";

const UserInfoComponent = () => {

    return (
        <Link to={'/userRatedMovies'}>
            <p>Hi, User</p>
        </Link>
    );
};

export default UserInfoComponent;