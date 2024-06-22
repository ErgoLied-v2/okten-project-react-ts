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
        <form onSubmit={handleSubmit(search)}>
            <input type="text" {...register('searchBy')} placeholder={'search movie...'}/>
        </form>
    );
};

export default SearchMovieComponent;