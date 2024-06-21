import React, {FC} from "react";
import {useAppSelector} from "../../redux/store";

interface IProps {
    genreID: number;
}

const GenreBadgeComponent: FC<IProps> = ({genreID}) => {
    const {genres} = useAppSelector(state => state.genresSlice);

    const genre = genres.find(genre => genre.id === genreID);

    return (
        <div>
            {
                genre && genre.name
            }
        </div>
    );
};

export default GenreBadgeComponent;