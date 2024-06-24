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

            <button className={styles.searchBtn}>search</button>
        </form>
    );
};

export default SearchMovieComponent;