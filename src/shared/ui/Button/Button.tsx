import { ButtonHTMLAttributes, FC } from 'react';

import { classNames } from '../../lib/classnames/classnames';

import cls from './Button.module.scss';

export type ButtonTheme = 'clear' | 'outline' | 'background' | 'backgroundInverted';

export type ButtonSize = 'small' | 'medium' | 'large' | 'maxContent';

export interface ButtonProps extends ButtonHTMLAttributes<any> {
    className?: string
    theme?: ButtonTheme
    size?: ButtonSize
    square?: boolean
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        theme,
        children,
        square = false,
        size = 'medium',
        ...otherProps
    } = props;

    const mods:Record<string, boolean> = {
        [cls.square]: square,
    };

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
