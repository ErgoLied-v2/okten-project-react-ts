import './FooterComponent.module.css';
import {useAppSelector} from "../../redux/store";

const FooterComponent = () => {
    const {mod} = useAppSelector(state => state.themeModSlice);
    return (
        <footer className={`flex cyber-razor-top custom-bg-accent-${mod} fg-yellow`}>
            <div>MADE BY ERGO-LIED</div>
        </footer>
    );
};

export default FooterComponent;