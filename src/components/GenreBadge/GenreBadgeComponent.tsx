import React, {FC} from "react";
import {useAppSelector} from "../../redux/store";
import Badge from 'react-bootstrap/Badge';


interface IProps {
    genreID: number;
}

const GenreBadgeComponent: FC<IProps> = ({genreID}) => {
    const {genres} = useAppSelector(state => state.genresSlice);

    const genre = genres.find(genre => genre.id === genreID);

    return (
        <div>
            <Badge bg="secondary">
                {genre && genre.name}
            </Badge>

        </div>
    );
};

export default GenreBadgeComponent;