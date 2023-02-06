import React, {Suspense, useContext, useState} from 'react';
import './styles/index.scss';
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {useTheme} from "./styles/theme/useTheme";
import {classNames} from "./helpers/classnames/classnames";

const App = () => {
    const {theme, toggleThemeClick} = useTheme()

    return (
        <div className={classNames('app', {'aaaa': true}, [theme])}>
            <button onClick={toggleThemeClick}>Change theme</button>
            <Link to={'/'}>Главная </Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
