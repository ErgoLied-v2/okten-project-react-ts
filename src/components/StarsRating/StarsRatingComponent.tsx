import {FC, useEffect, useState} from "react";
import {Rating} from 'react-simple-star-rating';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {moviesActions} from "../../redux/slices/moviesSlice";

interface IProps {
    initialValue: number;
    movieID: number;
}

const StarsRatingComponent: FC<IProps> = ({initialValue, movieID}) => {
    const {accountStates} = useAppSelector(state => state.moviesSlice);
    const dispatch = useAppDispatch();
    const id = movieID.toString();

    const [rating, setRating] = useState<number>(initialValue);

    useEffect(() => {
        dispatch(moviesActions.loadAccountStates(id));
    }, [id]);

    useEffect(() => {
        if (accountStates.rated) {
            setRating(accountStates.rated.value);
        } else {
            setRating(initialValue);
        }
    }, [accountStates, initialValue]);

    const changeRating = async (rate: number) => {
        if (rate !== rating) {
            const res = await dispatch(moviesActions.addRating({movieID: id, rate}));
            if (moviesActions.addRating.fulfilled.match(res)) {
                setRating(rate);
            }
        } else {
            const res = await dispatch(moviesActions.deleteRating({movieID: id}));
            if (moviesActions.deleteRating.fulfilled.match(res)) {
                setRating(initialValue);
            }

        }
    }

    return (
        <div>
            <Rating
                allowFraction
                initialValue={rating}
                iconsCount={10}
                // transition
                fillColor={'red'}
                onClick={changeRating}
            />
        </div>
    );
};

export default StarsRatingComponent;