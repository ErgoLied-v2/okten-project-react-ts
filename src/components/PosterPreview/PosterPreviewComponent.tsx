import {FC} from "react";

interface IProps {
    path: string;
    title: string;
}

const PosterPreviewComponent: FC<IProps> = ({path, title}) => {
    return (
        <img src={'https://image.tmdb.org/t/p/w500/' + path} alt={title}/>
    );
};

export default PosterPreviewComponent;