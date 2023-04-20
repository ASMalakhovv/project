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
        disabled,
        ...otherProps
    } = props;

    const mods:Record<string, boolean> = {
        [cls.square]: square,
        [cls.disabled]: disabled,
    };

    return (
        <button
            disabled={disabled}
            type="button"
            className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
