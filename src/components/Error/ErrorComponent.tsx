import {FC} from "react";

interface IProps{
    error: string | null;
}

const ErrorComponent: FC<IProps> = ({error}) => {
    return (
        <div>
            {error}
        </div>
    );
};

export default ErrorComponent;