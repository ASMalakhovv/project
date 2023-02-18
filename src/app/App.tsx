import React from 'react';
import './styles/index.scss';
import {useTheme} from "app/providers/ThemeProviders";
import {classNames} from "shared/lib/classnames/classnames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";

const App = () => {
    const {theme, toggleThemeClick} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <button onClick={toggleThemeClick}>Change theme</button>
            <AppRouter />
        </div>
    );
};

export default App;
