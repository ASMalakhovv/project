import React from 'react';
import './styles/index.scss';
import {Link} from "react-router-dom";
import {useTheme} from "app/providers/ThemeProviders";
import {classNames} from "shared/lib/classnames/classnames";
import {AppRouter} from "app/providers/router";

const App = () => {
    const {theme, toggleThemeClick} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleThemeClick}>Change theme</button>
            <Link to={'/'}>Главная </Link>
            <Link to={'/about'}>О сайте</Link>
            <AppRouter />
        </div>
    );
};

export default App;
