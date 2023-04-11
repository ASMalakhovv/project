import { RouteProps } from 'react-router-dom';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';

enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not_found'
}

export const routhPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOT_FOUND]: '*',
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
    [AppRoutes.NOT_FOUND]: {
        path: routhPath.not_found,
        element: <NotFoundPage />,
    },
};
