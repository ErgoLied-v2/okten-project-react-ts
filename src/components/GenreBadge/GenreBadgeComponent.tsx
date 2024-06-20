import {FC} from "react";
import {useAppSelector} from "../../redux/store";

interface IProps {
    genreID: number;
}

const GenreBadgeComponent: FC<IProps> = ({genreID}) => {
    const {genres} = useAppSelector(state => state.genresSlice);

    return (
        <div>
            {genres.find(genre => genre.id === genreID)?.name}
        </div>
    );
};

export default GenreBadgeComponent;