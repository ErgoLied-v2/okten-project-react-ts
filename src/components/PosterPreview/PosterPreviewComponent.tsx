import {FC} from "react";
import styles from './PosterPreviewComponent.module.css';

interface IProps {
    path: string;
    title: string;
}

const PosterPreviewComponent: FC<IProps> = ({path, title}) => {
    return (
        <>
        {
            path
                ? <img src={'https://image.tmdb.org/t/p/w500/' + path} alt={title}/>
                : <div className={styles.noImg + ' cyber-tile-small'}></div>
        }
        </>
    );
};

export default PosterPreviewComponent;