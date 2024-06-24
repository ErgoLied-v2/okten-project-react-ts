import GenresListComponent from "../../components/GenresList/GenresListComponent";
import styles from './GenresPage.module.css';

const GenresPage = () => {
    return (
        <div className={styles.genresContainer}>
            <GenresListComponent/>
        </div>
    );
};

export default GenresPage;