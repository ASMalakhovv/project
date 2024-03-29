import { FC } from 'react';
import { classNames } from 'shared/lib/classnames/classnames';
import { Link, LinkProps } from 'react-router-dom';

import cls from './AppLink.module.scss';

export type AppLinkTheme = 'primary' | 'secondary';

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
}

export const AppLink:FC<AppLinkProps> = (props) => {
    const {
        className, to, children, theme = 'primary', ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
