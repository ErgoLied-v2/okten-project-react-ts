import {Link} from "react-router-dom";
import styles from './UserInfoComponent.module.css';

const UserInfoComponent = () => {

    return (
        <Link to={'/userRatedMovies'} className={'fg-yellow'}>
            <p className={styles.username}>Hi, User</p>
        </Link>
    );
};

export default UserInfoComponent;