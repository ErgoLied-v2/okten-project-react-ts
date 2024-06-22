import {
    PaginationEllipsisFixed,
    PaginationFirstFixed,
    PaginationFixed,
    PaginationItemFixed, PaginationLastFixed, PaginationNextFixed,
    PaginationPrevFixed
} from "../BootstrapFixed/BootstrapFixedComponents";

const PaginationComponent = () => {
    return (
        <div>
            <PaginationFixed>
                <PaginationFirstFixed />
                <PaginationPrevFixed />
                <PaginationItemFixed>{1}</PaginationItemFixed>
                <PaginationEllipsisFixed />

                <PaginationItemFixed>{10}</PaginationItemFixed>
                <PaginationItemFixed>{11}</PaginationItemFixed>
                <PaginationItemFixed active>{12}</PaginationItemFixed>
                <PaginationItemFixed>{13}</PaginationItemFixed>
                <PaginationItemFixed disabled>{14}</PaginationItemFixed>

                <PaginationNextFixed/>
                <PaginationLastFixed/>
            </PaginationFixed>
        </div>
    );
};

export default PaginationComponent;