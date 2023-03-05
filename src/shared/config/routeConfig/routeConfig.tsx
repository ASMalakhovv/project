import { RouteProps } from 'react-router-dom';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';

enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about'
}

const routhPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.ABOUT]: {
        path: routhPath.about,
        element: <AboutPage />,
    },
    [AppRoutes.MAIN]: {
        path: routhPath.main,
        element: <MainPage />,
    },
};
