import {useForm} from "react-hook-form";
import {useAppDispatch} from "../../redux/store";
import {moviesActions} from "../../redux/slices/moviesSlice";
import {useNavigate, useSearchParams} from "react-router-dom";
import styles from './SearchMovieComponent.module.css';

interface IFormProps {
    searchBy: string;
}

const SearchMovieComponent = () => {
    const nav = useNavigate();
    const dispatch = useAppDispatch();
    const [query] = useSearchParams();
    const page = query.get('page') || '1';

    const {
        handleSubmit,
        register,
        reset
    } = useForm<IFormProps>();

    const search = (formDataProps: IFormProps) => {
        dispatch(moviesActions.loadSearchedMovies({query: formDataProps.searchBy, page}));
        nav('/?query=' + formDataProps.searchBy);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(search)} className={styles.searchForm}>
            <div className="cyber-input ac-yellow fg-yellow">
                <input type="text" {...register('searchBy')} placeholder={'search movie...'}/>
            </div>

            <button className={styles.searchBtn}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                    <path
                        d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
                </svg>
            </button>

        </form>
    );
};

export default SearchMovieComponent;