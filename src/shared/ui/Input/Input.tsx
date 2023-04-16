import React, {
    ChangeEvent, InputHTMLAttributes, useEffect, useRef,
} from 'react';

import { classNames } from 'shared/lib/classnames/classnames';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
    className?: string
    value?: string
    onChange?: (value: string) => void
    autoFocus?: boolean
}

export const Input = React.memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        autoFocus,
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autoFocus) {
            ref.current.focus();
        }
    }, [autoFocus]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.inputWrapper, {}, [className])}>
            <input
                ref={ref}
                className={cls.input}
                value={value}
                onChange={handleInputChange}
                type={type}
                {...otherProps}
            />
        </div>
    );
});
