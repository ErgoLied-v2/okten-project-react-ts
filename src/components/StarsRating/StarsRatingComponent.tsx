import {Rating} from 'react-simple-star-rating';

const StarsRatingComponent = () => {
    return (
        <div>
            <Rating
                allowFraction initialValue={7.5} iconsCount={10}
            />
        </div>
    );
};

export default StarsRatingComponent;