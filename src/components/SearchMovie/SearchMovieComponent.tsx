import {useForm} from "react-hook-form";
import {useAppDispatch} from "../../redux/store";
import {moviesActions} from "../../redux/slices/moviesSlice";
import {useNavigate, useSearchParams} from "react-router-dom";

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
        nav('/?query='+formDataProps.searchBy);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(search)} style={{ position: 'relative'}}>
            <input type="text" {...register('searchBy')} placeholder={'search movie...'} style={{
                width: '100%',
                padding: '0.5rem 4rem 0.5rem 0.5rem',
                borderRadius: '4px',
                border: '1px solid #ccc'
            }}/>
            <button style={{
                position: 'absolute',
                right: '0.5rem',
                top: '50%',
                transform: 'translateY(-50%)',
                cursor: 'pointer',
                padding: 0
            }}>search</button>
        </form>
    );
};

export default SearchMovieComponent;