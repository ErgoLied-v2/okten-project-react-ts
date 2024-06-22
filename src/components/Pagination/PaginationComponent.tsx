import {
    PaginationEllipsisFixed,
    PaginationFirstFixed,
    PaginationFixed,
    PaginationItemFixed, PaginationLastFixed, PaginationNextFixed,
    PaginationPrevFixed
} from "../BootstrapFixed/BootstrapFixedComponents";
import {useAppSelector} from "../../redux/store";
import {useNavigate, useParams, useSearchParams} from "react-router-dom";

const PaginationComponent = () => {
    const {moviesPaginated, searchedMoviesPaginated, searchedMoviesByGenre} = useAppSelector(state => state.moviesSlice);
    const [query] = useSearchParams();
    const {genreID} = useParams();
    const navigate = useNavigate();

    let currentPage: number;
    let totalPages: number;
    if (searchedMoviesPaginated.results.length > 0) {
        currentPage = searchedMoviesPaginated.page;
        totalPages = searchedMoviesPaginated.total_pages >= 500 ? 500 : searchedMoviesPaginated.total_pages;
    }
    else if(genreID && searchedMoviesByGenre.results.length>0){
        currentPage = searchedMoviesByGenre.page;
        totalPages = searchedMoviesByGenre.total_pages >= 500 ? 500 : searchedMoviesByGenre.total_pages;
    }
    else {
        currentPage = moviesPaginated.page;
        totalPages = moviesPaginated.total_pages >= 500 ? 500 : moviesPaginated.total_pages;
    }
    const onPageClick = (page: number) => {
        query.set('page', page.toString());
        navigate({search: query.toString()});
    }
    const onFirstPageClick = () => onPageClick(1);
    const onPrevPageClick = () => onPageClick(currentPage > 1 ? currentPage - 1 : 1);
    const onNextPageClick = () => onPageClick(currentPage < totalPages ? currentPage + 1 : totalPages);
    const onLastPageClick = () => onPageClick(totalPages);

    const pages: JSX.Element[] = [];

    if (totalPages <= 10) {
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <PaginationItemFixed key={i}
                                     active={i === currentPage}
                                     onClick={() => onPageClick(i)}>
                    {i}
                </PaginationItemFixed>
            );
        }
    } else {
        pages.push(
            <PaginationItemFixed key={1}
                                 active={1 === currentPage}
                                 onClick={() => onPageClick(1)}>1</PaginationItemFixed>
        );

        if (currentPage > 4) {
            pages.push(<PaginationEllipsisFixed key="start ..." disabled/>);
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
                <PaginationItemFixed key={i}
                                     active={i === currentPage}
                                     onClick={() => onPageClick(i)}>
                    {i}
                </PaginationItemFixed>
            );
        }
    }


    return (
        <div>
            <PaginationFixed>
                <PaginationFirstFixed onClick={onFirstPageClick}
                                      disabled={currentPage === 1}/>
                <PaginationPrevFixed onClick={onPrevPageClick}
                                     disabled={currentPage === 1}/>

                {pages}

                <PaginationNextFixed onClick={onNextPageClick}
                                     disabled={currentPage === totalPages}/>
                <PaginationLastFixed onClick={onLastPageClick}
                                     disabled={currentPage === totalPages}/>
            </PaginationFixed>
        </div>
    );
};

export default PaginationComponent;