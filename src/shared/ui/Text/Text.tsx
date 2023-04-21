import { classNames } from 'shared/lib/classnames/classnames';

import cls from './Text.module.scss';

type Theme = 'primary' | 'error';

interface TextProps {
    className?: string
    title?: string
    text?: string
    theme?: Theme
}

export const Text = (props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = 'primary',
    } = props;

    return (
        <div className={classNames(cls.Text, {}, [className, cls[theme]])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
};
