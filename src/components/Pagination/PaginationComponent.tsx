import {PaginationFixed, PaginationItemFixed} from "../BootstrapFixed/BootstrapFixedComponents";
import {useAppSelector} from "../../redux/store";
import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import './PaginationComponent.css';

const PaginationComponent = () => {
    const {mod} = useAppSelector(state => state.themeModSlice);
    const {
        moviesPaginated,
        searchedMoviesPaginated,
        searchedMoviesByGenre
    } = useAppSelector(state => state.moviesSlice);
    const [query, setQuery] = useSearchParams();
    const {genreID} = useParams();
    const navigate = useNavigate();
    const searchQuery = query.get('query') || '';

    let currentPage: number;
    let totalPages: number;

    if (searchQuery && searchedMoviesPaginated.results.length > 0) {
        currentPage = searchedMoviesPaginated.page;
        totalPages = searchedMoviesPaginated.total_pages >= 500 ? 500 : searchedMoviesPaginated.total_pages;
    } else if (genreID && searchedMoviesByGenre.results.length > 0) {
        currentPage = searchedMoviesByGenre.page;
        totalPages = searchedMoviesByGenre.total_pages >= 500 ? 500 : searchedMoviesByGenre.total_pages;
    } else {
        currentPage = moviesPaginated.page;
        totalPages = moviesPaginated.total_pages >= 500 ? 500 : moviesPaginated.total_pages;
    }

    const onPageClick = (page: number) => {
        const url = `?page=${page}${searchQuery ? `&query=${searchQuery}` : ''}`;
        navigate(url, {replace: true});
    };

    const onFirstPageClick = () => onPageClick(1);
    const onPrevPageClick = () => onPageClick(currentPage > 1 ? currentPage - 1 : 1);
    const onNextPageClick = () => onPageClick(currentPage < totalPages ? currentPage + 1 : totalPages);
    const onLastPageClick = () => onPageClick(totalPages);

    const pages: JSX.Element[] = [];

    if (totalPages <= 10) {
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <button key={i}
                        disabled={i === currentPage}
                        onClick={() => onPageClick(i)}
                        className={`cyber-button-small custom-bg-accent-${mod} fg-yellow p-2 m-1`}>
                    {i}
                </button>
            );
        }
    } else {
        pages.push(
            <button key={1}
                    disabled={1 === currentPage}
                    onClick={() => onPageClick(1)}
                    className={`cyber-button-small custom-bg-accent-${mod} fg-yellow p-2 m-1`}>1</button>
        );

        if (currentPage > 4) {
            pages.push(<button key="start ..." disabled className={`cyber-button-small custom-bg-accent-${mod} fg-yellow p-2 m-1`}>...</button>);
        }

        let start = currentPage > 4 ? currentPage - 2 : 2;
        let end = currentPage + 5 > totalPages ? totalPages : currentPage + 5;

        if (currentPage < 5) {
            end = 9;
        } else if (currentPage >= totalPages - 5) {
            start = totalPages - 8;
        }

        for (let i = start; i <= end; i++) {
            pages.push(
                <button key={i}
                        disabled={i === currentPage}
                        onClick={() => onPageClick(i)}
                        className={`cyber-button-small custom-bg-accent-${mod} fg-yellow p-2 m-1`}>
                    {i}
                </button>
            );
        }
    }


    return (
            <PaginationFixed>
                <button onClick={onFirstPageClick}
                        disabled={currentPage === 1}
                        className={`cyber-button-small custom-bg-accent-${mod} fg-yellow p-2 m-1`}>
                    {'<<'}
                </button>
                <button onClick={onPrevPageClick}
                        disabled={currentPage === 1}
                        className={`cyber-button-small custom-bg-accent-${mod} fg-yellow p-2 m-1`}>
                    {'<'}
                </button>

                {pages}

                <button onClick={onNextPageClick}
                        disabled={currentPage === totalPages}
                        className={`cyber-button-small custom-bg-accent-${mod} fg-yellow p-2 m-1`}>
                    {'>'}
                </button>
                <button onClick={onLastPageClick}
                        disabled={currentPage === totalPages}
                        className={`cyber-button-small custom-bg-accent-${mod} fg-yellow p-2 m-1`}>
                    {'>>'}
                </button>
            </PaginationFixed>
    );
};

export default PaginationComponent;