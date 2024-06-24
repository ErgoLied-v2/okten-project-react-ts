import React from 'react';
import {Outlet} from "react-router-dom";

import HeaderComponent from "./components/Header/HeaderComponent";
import FooterComponent from "./components/Footer/FooterComponent";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    return (
        <div className={'bg-yellow'}>
            <HeaderComponent/>
            <Outlet/>
            <FooterComponent/>
        </div>
    );
}

export default App;
