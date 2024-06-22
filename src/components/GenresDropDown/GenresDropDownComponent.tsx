import {NavDropdownFixed} from "../BootstrapFixed/BootstrapFixedComponents";
import GenresListComponent from "../GenresList/GenresListComponent";
import {useState} from "react";

const GenresDropDownComponent = () => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
        <div>
            <NavDropdownFixed title="[genres]"
                              id="basic-nav-dropdown"
                              onMouseEnter={() => setIsHovered(true)}
                              onMouseLeave={() => setIsHovered(false)}
                              show={isHovered}
            >
                <GenresListComponent/>
            </NavDropdownFixed>
        </div>
    );
};

export default GenresDropDownComponent;