import React from 'react';
import {Outlet} from "react-router-dom";

import HeaderComponent from "./components/Header/HeaderComponent";
import FooterComponent from "./components/Footer/FooterComponent";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useAppSelector} from "./redux/store";

function App() {
    const {mod} = useAppSelector(state => state.themeModSlice);
    return (
        <div className={`custom-bg-${mod}`}>
            <HeaderComponent/>
            <Outlet/>
            <FooterComponent/>
        </div>
    );
}

export default App;
