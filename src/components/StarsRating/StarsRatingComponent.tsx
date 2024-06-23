import {FC, useEffect, useState} from "react";
import {Rating} from 'react-simple-star-rating';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {moviesActions} from "../../redux/slices/moviesSlice";

interface IProps {
    initialValue: number;
    movieID: number;
}

const StarsRatingComponent: FC<IProps> = ({initialValue, movieID}) => {
    const {isLoaded, guestSessionId} = useAppSelector(state => state.authSlice);
    const dispatch = useAppDispatch();

    const [rating, setRating] = useState<number>(initialValue);

    // useEffect(() => {
    //     setRating(initialValue);
    // }, [initialValue]);

    const changeRating = async (rate: number) => {
        if (guestSessionId) {
            const id = movieID.toString();

            if (rate !== rating) {
                const res = await dispatch(moviesActions.addRating({movieID: id, guestSessionId, rate}));
                if (moviesActions.addRating.fulfilled.match(res)) {
                    setRating(rate);
                }
            } else {
                const res = await dispatch(moviesActions.deleteRating({movieID: id, guestSessionId}));
                if (moviesActions.deleteRating.fulfilled.match(res)) {
                    setRating(initialValue);
                }

            }
        }
    }

    return (
        <div>
            <Rating
                allowFraction
                initialValue={rating}
                iconsCount={10}
                readonly={!isLoaded}
                // transition
                fillColor={'red'}
                onClick={changeRating}
            />
        </div>
    );
};

export default StarsRatingComponent;