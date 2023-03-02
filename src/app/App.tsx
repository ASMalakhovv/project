import React, { Suspense } from 'react';
import './styles/index.scss';
import {useTheme} from "app/providers/ThemeProviders";
import {classNames} from "shared/lib/classnames/classnames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";
import { useTranslation } from 'react-i18next';

function MyComponent() {
    const { t, i18n } = useTranslation();

    const toggle = () => {
      i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }

    return <>
        <button onClick={toggle}>{t('Перевод')}</button>
        <p>{t('Привет мир')}</p>
    </>
}

const App = () => {
    const {theme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar/>
                <MyComponent/>
                <div className="content-page">
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    );
};

export default App;
