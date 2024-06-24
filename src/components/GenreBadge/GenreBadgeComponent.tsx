import React, {FC} from "react";
import {useAppSelector} from "../../redux/store";
import {BadgeFixed} from "../BootstrapFixed/BootstrapFixedComponents";
import './GenreBadgeComponent.css';

interface IProps {
    genreID: number;
}

const GenreBadgeComponent: FC<IProps> = ({genreID}) => {
    const {genres} = useAppSelector(state => state.genresSlice);

    const genre = genres.find(genre => genre.id === genreID);

    return (
            <BadgeFixed bg="info">
                {genre && genre.name}
            </BadgeFixed>
    );
};

export default GenreBadgeComponent;