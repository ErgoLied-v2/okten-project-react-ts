import React from 'react';
import {Outlet} from "react-router-dom";

import HeaderComponent from "./components/Header/HeaderComponent";
import FooterComponent from "./components/Footer/FooterComponent";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    return (
        <>
            <HeaderComponent/>
            <Outlet/>
            <FooterComponent/>
        </>
    );
}

export default App;
