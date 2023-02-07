import React, {Suspense} from 'react';
import './styles/index.scss';
import {Link, Route, Routes} from "react-router-dom";
import {useTheme} from "app/providers/ThemeProviders";
import {classNames} from "../shared/lib/classnames/classnames";
import { AboutPage } from 'pages/AboutPage';
import {MainPage} from "pages/MainPage";

const App = () => {
    const {theme, toggleThemeClick} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleThemeClick}>Change theme</button>
            <Link to={'/'}>Главная </Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage/>}/>
                    <Route path={'/'} element={<MainPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
