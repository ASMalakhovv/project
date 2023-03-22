import { ButtonHTMLAttributes, FC } from 'react';

import cls from './Button.module.scss';
import { classNames } from '../../lib/classnames/classnames';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline'
}

export interface ButtonProps extends ButtonHTMLAttributes<any> {
    className?: string
    theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        theme,
        children,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
