import React, {FC, PropsWithChildren, ReactNode} from "react";
import {useAppSelector} from "../../redux/store";
import Badge from 'react-bootstrap/Badge';


interface IProps {
    genreID: number;
}

const GenreBadgeComponent: FC<IProps> = ({genreID}) => {
    const {genres} = useAppSelector(state => state.genresSlice);

    const genre = genres.find(genre => genre.id === genreID);

    const BadgeFixed = Badge as unknown as React.FC<PropsWithChildren<{ children: ReactNode, bg:string }>>;


    return (
        <div>
            <BadgeFixed bg="secondary">
                {genre && genre.name}
            </BadgeFixed>

        </div>
    );
};

export default GenreBadgeComponent;